const post = JSON.parse(localStorage.getItem("postInfo"));

function parse(post) {
    let container = document.getElementsByClassName("container")[0];
    let wrap = document.createElement("div");
    let title = document.createElement("h3");
    let userId = document.createElement("p");
    let id = document.createElement("p");
    let postTitle = document.createElement("p");
    let body = document.createElement("p");
    let showComments = document.createElement("button");
    wrap.classList.add("postContainer");

    title.innerHTML = 'Post description';
    userId.innerHTML = `<span class="bold">userId:</span> ${post.userId}`;
    id.innerHTML = `<span class="bold">id:</span> ${post.id}`;
    postTitle.innerHTML = `<span class="bold">title:</span> ${post.title}`;
    body.innerHTML = `<span class="bold">body:</span> ${post.body}`;
    showComments.innerText = "get comments";
    showComments.onclick = () => {
        container.appendChild(getComments());
        showComments.disabled = true;
        showComments.classList.add("close");
    }
    wrap.append(title, userId, id, postTitle, body);
    container.append(wrap, showComments);
}

parse(post);

function getComments() {
    let wrap = document.createElement("div");
    wrap.classList.add("commentsWrap");
    const url = `https://jsonplaceholder.typicode.com/users/${post.userId}/comments`;
    fetch(url)
        .then(response => response.json())
        .then(comments => comments.map(comment => {
            if (post.userId === comment.postId) {
                let commentCard = document.createElement("div");
                let postId = document.createElement("p");
                let commentId = document.createElement("p");
                let commentName = document.createElement("p");
                let commentEmail = document.createElement("p");
                let commentBody = document.createElement("p");

                commentCard.classList.add("commentCard");
                postId.innerHTML = `<span class="bold">postId:</span> ${comment.postId}`
                commentId.innerHTML = `<span class="bold">id:</span> ${comment.id}`
                commentName.innerHTML = `<span class="bold">name:</span> ${comment.name}`
                commentEmail.innerHTML = `<span class="bold">email:</span> ${comment.email}`
                commentBody.innerHTML = `<span class="bold">body:</span> ${comment.body}`

                commentCard.append(postId, commentId, commentName, commentEmail, commentBody)
                wrap.append(commentCard);
            }
        }));
    return wrap;
}