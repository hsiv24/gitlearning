function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user = {
        username: username,
        email: email,
        phone: phone
    };

    //store email as key 
    localStorage.setItem(email, JSON.stringify(user));

    showUserOnScreen(user);

    event.target.username.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";
}

function showUserOnScreen(user) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.textContent = `${ user.username } ${ user.email } ${ user.phone }`;

    ul.appendChild(li);
}

module.exports = handleFormSubmit;