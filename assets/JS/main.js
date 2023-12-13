const blogLink = document.getElementById('active'),
    about = document.getElementById('about'),
    close = document.getElementById('close'),
    main = document.getElementById('main');

blogLink.addEventListener('click', () => {
        main.classList.add('hidden')
        about.classList.remove('hidden')
})

close.addEventListener('click', () =>{
        about.classList.add('hidden')
        main.classList.remove('hidden')
})
