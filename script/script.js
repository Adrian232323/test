const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-item');


const handleNav = () => {
    nav.classList.toggle('nav-active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active')
        })
    }
    
    )
    
    handleNavItemsAnimation();
}

const handleGround = () => {
    nav.classList.toggle('nav-active-ground')
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active-ground')
        })
    })
    
   
}



const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}


navBtn.addEventListener('click', handleNav)
navBtn.addEventListener('click', handleGround)