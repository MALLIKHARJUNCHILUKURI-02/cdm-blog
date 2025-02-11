document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu_icon");
    const navList = document.getElementById("navliks");
    const heroSection = document.querySelector(".first_after_nav");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show"); 

        if (navList.classList.contains("show")) {
            heroSection.style.marginTop = navList.offsetHeight + "px"; 
        } else {
            heroSection.style.marginTop = "0"; 
        }
    });
});


document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("blogTitle").value;
    const content = document.getElementById("blogContent").value;

    const blogLength = content.length;

    if (title && content) {
        const post = document.createElement("div");

        if (blogLength>5000) {
            alert(`Blog Content Exceeds limit length Should be ${5000} You Should Reduce ${blogLength-5000}`);

            title = title;
            content = content;
        } else {
            post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            document.getElementById("blogPosts").appendChild(post);
        }
        document.getElementById("blogTitle").value = "";
        document.getElementById("blogContent").value = "";
    }
});