const container = document.createElement('div');
document.body.appendChild(container);

let  innerKay = 'innerKay';

const user = JSON.parse(localStorage.getItem(innerKay));
console.log(user);

let createUser = (obj) => {
    for (let innerKey in obj){
        if (typeof obj[innerKey] !== 'object') {
            let div = document.createElement('div');
            div.innerText = `${innerKey} -- ${obj[innerKey]}`;
            container.appendChild(div);
        } else {
            createUser(obj[innerKey]);
        }
    }
}
createUser(user);

const user_button = document.createElement('button');
user_button.innerText = 'Click me';
container.appendChild(user_button);

const user_div = document.createElement('div');
document.body.appendChild(user_div);

user_button.onclick = (event) =>{
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts =>{
            for (const post of posts){
                const user_div = document.createElement('div');
                user_div.innerText = `${post.id} -- ${post.title}`;
                user_div.appendChild(user_div);

                const user_button = document.createElement('button');
                user_button.innerText = 'Click me';
                user_div.appendChild(user_button);
                user_button.onclick = (event) => {
                    event.preventDefault();
                    localStorage.setItem(innerKay, JSON.stringify(post));
                    location.href =`../post_details/post-details.html?=${post.id}`;
                }
            }
        });
}