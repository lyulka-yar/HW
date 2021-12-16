

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then(response => response.json())
    .then(data => data.map(user => {


            class User {

                constructor(name, id) {
                    this.name = name;
                    this.id = id;
                }


                html() {
                    let userCard = document.createElement("div");
                    let wrap = document.getElementsByClassName("container")[0];
                    userCard.classList.add("userCard");
                    userCard.innerHTML = `
                <p id="userName">${this.name}</p>
                <p id="userId">id: ${this.id}</p>`;

                    wrap.appendChild(userCard);

                    function localStore() {
                        let details = document.createElement("a");
                        details.innerText = "details";
                        details.href = "users/user-details.html";

                        details.setAttribute("id","details");
                        userCard.appendChild(details);

                        details.onclick = () => {
                            // e.preventDefault();
                            localStorage.removeItem("user");
                            localStorage.setItem("user", JSON.stringify(user));
                        }
                    }
                    localStore();
                }
            }
            let users = new User(user.name, user.id);
            users.html();
        }
    ));


