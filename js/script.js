// СКРОЛЛЫ по разделам макета--------------------------------------------------------------------------------------------------------------
let scroll = document.querySelectorAll('header [id*="#"]');
for (scl of scroll) {
    if (scl) {
        scl.addEventListener('click', e => {
            e.preventDefault();
            sclId = e.currentTarget.getAttribute('id');
            document.querySelector(sclId).scrollIntoView({behavior: 'smooth', block: 'start'})
        })
    }
};
//АНИМАЦИИ ПРИ СКРОЛЛЕ---------------------------------------------------------------------------------------------------------------------
const animItems = document.querySelectorAll('.-anim');
if (animItems.length>0) {
    window.addEventListener('scroll', animScroll);
    function animScroll() {
        for (item of animItems) {
            const itemHeight = item.offsetHeight,
                itemOffset = offset(item).top,
                animStart = 4;
            let itemPoint = window.innerHeight - itemHeight / animStart;
            if (itemHeight> window.innerHeight) {itemPoint = window.innerHeight - window.innerHeight / animStart;}
            if((pageYOffset> itemOffset - itemPoint) && pageYOffset<(itemOffset + itemHeight)) {item.classList.add('scroll');}
            else {item.classList.remove('scroll');}
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            sclLeft = window.pageXOffset||document.documentElement.scrollLeft,
            sclTop = pageYOffset||document.documentElement.scrollTop;
            return {top: rect.top + sclTop, left: rect.left + sclLeft}
    }
}
setTimeout(animScroll(), 100);
