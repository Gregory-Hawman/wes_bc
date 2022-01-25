class Card {
    constructor(){
        this.suit = null
        this.val = null
        this.next = null
    }
}

class Deck {    
    constructor(){
        this.top = null
    }

    addDecks(amount){
        // 54 cards per deck, 52 normal, 2 jokers. 1 = Ace of spades, 2 = 2 of spades... 14 = Ace of hearts... (spades, hearts, clubs, diamonds, 2 jokers)
    }

    shuffle(){

    }

}

class Discard {
    constructor(){
        this.top = null
        this.next = null
    }
}

class Hand {
    constructor(){
        this.first = null
        this.last = null
        this.next = null
        this.prev = null
    }
}