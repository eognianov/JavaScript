function solve() {
    var myButton = document.getElementsByTagName('button')[0];
    var peshoButton = document.getElementsByTagName('button')[1];

    myButton.addEventListener('click', myButtonClickEvent);
    peshoButton.addEventListener('click', peshoButtonCLickEvent);

    function myButtonClickEvent(e) {
        let myText = document.getElementById('myChatBox');
        let divElement = document.createElement('div');

        let spanElement = document.createElement('span');
        spanElement.textContent = 'Me';
        let parElement = document.createElement('p');
        parElement.textContent = myText.value;
        
        divElement.appendChild(spanElement);
        divElement.appendChild(parElement);
        divElement.style.textAlign = 'left';

        let chronologyElement = document.getElementById('chatChronology');
        chronologyElement.appendChild(divElement);

        myText.value = '';
    };

    function peshoButtonCLickEvent(e) {
        let peshoText = document.getElementById('peshoChatBox');
        let divElement = document.createElement('div');

        let spanElement = document.createElement('span');
        spanElement.textContent = 'Pesho';
        let parElement = document.createElement('p');
        parElement.textContent = peshoText.value;
        
        divElement.appendChild(spanElement);
        divElement.appendChild(parElement);
        divElement.style.textAlign = 'right';

        let chronologyElement = document.getElementById('chatChronology');
        chronologyElement.appendChild(divElement);

        peshoText.value = '';
    };
}