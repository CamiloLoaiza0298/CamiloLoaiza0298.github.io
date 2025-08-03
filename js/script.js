function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

let animated = document.querySelectorAll(".animated");

function showScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animated.length; i++){
        let heigthAn = animated[i].offsetTop;
        console.log('heigth:' + heigthAn);
        if(heigthAn - 600 < scrollTop){
            animated[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);