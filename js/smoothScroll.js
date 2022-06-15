const scrollButton = document.querySelectorAll(".menu__side-link");

scrollButton.forEach(function(item){
    item.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = item.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth"
        })
    })
})