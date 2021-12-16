function storage() {
    return JSON.parse(localStorage.getItem("user"));
}

let person = storage();

class Details {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }

    parser() {
        let container = document.getElementsByClassName("container")[0];
        let userCard = document.createElement("div");
        userCard.classList.add("userCard");
        container.appendChild(userCard);

        userCard.innerHTML = `
        <h3> ${this.name}</h3>
        <p><span class="bold">id: </span> ${this.id}</p>
        <span class="bold">username: </span> <p>${this.username}</p>
        <span class="bold">email: </span> ${this.email}<p></p>
        <p class="upper bold">address</p>
        <span class="bold">street:</span> <p>${this.address.street}</p>
        <span class="bold">suite:</span> <p>${this.address.suite}</p>
        <span class="bold">city:</span> <p>${this.address.city}</p>
        <span class="bold">zipcode:</span> <p>${this.address.zipcode}</p>
        <p class="upper bold">geo</p>
        <span class="bold">lattitude:</span> <p>${this.address.geo.lat}</p>
        <span class="bold">longitude:</span> <p>${this.address.geo.lng}</p>
        <span class="bold">phone:</span> <p>${this.phone}</p>
        <span class="bold">website:</span> <p>${this.website}</p>
        <p class="upper bold">company</p>
        <span class="bold">name:</span> <p>${this.company.name}</p>
        <span class="bold">catchPhrase:</span> <p>${this.company.catchPhrase}</p>
        <span class="bold">bs:</span> <p>${this.company.bs}</p>`;

        function posts() {
            let showPosts = document.createElement("button");
            showPosts.classList.add("showPosts");
            showPosts.innerText = "post of current user";
            userCard.appendChild(showPosts);

            showPosts.onclick = () => {
                showPosts.classList.toggle("close")
                let postContainer = document.createElement("div");
                const url = `https://jsonplaceholder.typicode.com/users/${person.id}/posts`;
                fetch(url)
                    .then(response => response.json())
                    .then(posts => posts.map(post => {
                        postContainer.classList.add("postContainer");
                        let postTitle = document.createElement("div");
                        let title = document.createElement("p");
                        let more = document.createElement("a");
                        title.innerHTML = `<span class="bold">title:</span> ${post.title}`;
                        more.innerText = "more";
                        more.href = "../posts/post-details.html";

                        more.onclick = () => {
                            let postInfo = {userId: post.userId, id: post.id, title: post.title, body: post.body};
                            localStorage.setItem("postInfo", JSON.stringify(postInfo));
                        }

                        postTitle.append(title, more);
                        postContainer.appendChild(postTitle);
                    }));
                container.appendChild(postContainer);
            }
        }

        posts();
    }
}

let detail = new Details(person.id, person.name, person.username, person.email, person.address, person.phone, person.website, person.company);
detail.parser();