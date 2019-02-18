function makeCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!faces.includes(face)) {
        throw new Error('Invalid card face!');
    }

    if (!suits[suit]) {
        throw new Error('Invalid card suit!');
    }


    let card = {
        face: face,
        suit: suits[suit],
        toString: function name() {
            return this.face + this.suit
        }
    };

    return card;
}

let card = makeCard('A', 'S');
console.log(card.toString());
