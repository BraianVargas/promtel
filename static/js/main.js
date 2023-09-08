window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    var navbar = document.getElementById('navbar');

    if(document.documentElement.scrollTop > 10){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
}