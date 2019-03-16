class BookCollection{
    constructor(shelfGenre, room, shelfCapacity){
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get room(){
        return this._room;
    }

    set room(value){
        switch (value) {
            case 'livingRoom':
            case 'bedRoom':
            case 'closet':
                this._room = value;
                break;
            default:
                throw `Cannot have book shelf in ${value}`;
        }
    }

    get shelfCondition(){
        return this.shelfCapacity-this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre){
        let book = {bookName, bookAuthor, genre};

        if (this.shelfCondition <= 0) {
            this.shelf.shift();
        }

        this.shelf.push(book);
        this.shelf.sort((a,b)=>a.bookAuthor.localeCompare(b.bookAuthor));
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(b=>b.bookName !== bookName);
    }

    showBooks(genre){
        let result  = `Results for search "${genre}:\n"`;

        result += this.shelf
            .filter(b=>b.genre===genre)
            .map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`)
            .join('\n');

        return result;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        } else {
            let result = '';
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let book of this.shelf) {
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
            }

            return result.trim();
        }
    }
}