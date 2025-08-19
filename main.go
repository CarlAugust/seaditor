package main

import (
	"fmt"
	"log"
	"net/http"
)

func NoCache(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		// Set headers to prevent caching
		w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		w.Header().Set("Pragma", "no-cache")
		w.Header().Set("Expires", "0")
		w.Header().Set("X-Accel-Expires", "0")

		r.Header.Del("If-None-Match")
		r.Header.Del("If-Modified-Since")

		h.ServeHTTP(w, r)
	}
	return http.HandlerFunc(fn)
}

func main() {

	router := http.NewServeMux()
	fs := http.FileServer(http.Dir("./public"))
	router.Handle("/", http.StripPrefix("/", fs))

	server := &http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	fmt.Println("Server starting at http://localhost:8080")
	log.Fatal(server.ListenAndServe())
}
