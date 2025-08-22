// Retriving data from the text

interface Change {
    line: number;
    text: string;
}

class ChangeLog {
    public log: Change[]

    constructor() {
        this.log = []
    }

    clear() {
        this.log = []
    }

    add(change: Change) {
        this.log.push(change)
    }
}

// For saving file content
function save() {
    
}