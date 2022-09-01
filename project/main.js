const container = document.createElement('div');
document.body.appendChild(container);
let innerKey = 'innerKey';
fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users => {
    for (const user of users){
         const userName = document.createElement('div');
         userName.innerText = `${user.id} -- ${user.name}`;
         userName.className = 'name';
         container.appendChild(userName);

         const button = document.createElement('button');
         button.innerText = 'Click me';
         userName.appendChild(button);
         button.onclick = (event) => {
             event.preventDefault();
             localStorage.setItem(innerKey, JSON.stringify(user));
             location.href = `user_details/user-details.html`;
         }
    }
});