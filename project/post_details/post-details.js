const container = document.createElement('div');
document.body.appendChild(container);

let  innerKay = 'innerKay';

const post = JSON.parse(localStorage.getItem(innerKay));
console.log(post);

let createPost = (obj) => {
    for (let innerKey in obj){
        if (typeof obj[innerKey] !== 'object') {
            let div = document.createElement('div');
            div.innerText = `${innerKey} -- ${obj[innerKey]}`;
            container.appendChild(div);
        } else {
            createPost(obj[innerKey]);
        }
    }
}
createPost(post);

const post_button = document.createElement('button');
post_button.innerText = 'Click me';
container.appendChild(post_button);

const post_div = document.createElement('div');
document.body.appendChild(post_div);


post_button.onclick = (event) => {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users/${user.id}/posts')
        .then(value => value.json())
        .then(posts =>{
            for (const post of posts){
                const post_div = document.createElement('div');
                post_div.innerText = `${post.id} -- ${post.title}`;
                post_div.appendChild(post_div);

                const post_button = document.createElement('button');
                post_button.innerText = 'Click me';
                post_div.appendChild(post_button);
                post_button.onclick = (event) =>{
                    event.preventDefault();
                    localStorage.setItem(innerKay, JSON.stringify(post));
                    location.href =`../post_details/post-details.html?=${post.id}`;
                }
            }
        });
}