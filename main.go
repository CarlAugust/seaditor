package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	router := http.NewServeMux()

	router.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./public"))))

	server := &http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	fmt.Println("Server starting at http://localhost:8080")
	log.Fatal(server.ListenAndServe())
}
