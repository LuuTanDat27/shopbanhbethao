const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        const linkId = link.id;

        allLinks.forEach(l => l.classList.toggle("active", l === link));
        allTabs.forEach(tab => tab.classList.toggle("active-tab-content", tab.id === linkId));
    });
});
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop){
        // Cuộn xuống dưới
        document.querySelector('.scroll-header').classList.add('hidden');
    } else {
        // Cuộn lên đầu trang
        document.querySelector('.scroll-header').classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
