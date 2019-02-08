function solve() {
    let submitButton = document.getElementsByTagName('button')[0];
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let userDiv = document.querySelectorAll('div.user-info input');
        let name = userDiv[0].value;
        let password = userDiv[1].value;
        let email = userDiv[2].value;

        let topics = [];
        let topicsDiv = document.querySelectorAll('div.topics input');
        for (let topic of topicsDiv) {
            if (topic.checked) {
                topics.push(topic.value);
            }
        }

        let tdUsername = document.createElement('td');
        tdUsername.textContent = name;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        let tdTopics = document.createElement('td');
        tdTopics.textContent = topics.join(' ');

        let tr = document.createElement('tr');
        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        let tableElement = document.getElementsByTagName('tbody')[0];
        tableElement.appendChild(tr);

        userDiv[0].value = '';
        userDiv[1].value = '';
        userDiv[2].value = '';
    });

    let searchButton = document.getElementsByTagName('button')[1];
    searchButton.addEventListener('click', (e) => {
        let searchedText = document.querySelector('div input[placeholder="Search..."]').value;
        let users = document.querySelectorAll('tbody tr');
        for (let user of users) {
            let name = user.children[0].textContent;
            let email = user.children[1].textContent;
            let topics = user.children[2].textContent;

            if (name.includes(searchedText) || email.includes(searchedText) || topics.includes(searchedText)) {
                user.style.visibility = 'visible';
            } else {
                user.style.visibility = 'hidden';
            }
        }
    });
}