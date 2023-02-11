'use strict';
  
const tabs = document.querySelectorAll('.tabheader__item'), // Change tabs
    tabsContent = document.querySelectorAll('.tabcontent'), // Change tabs content
    tabsParent = document.querySelector('.tabheader__items'); // Change tabs parent

function hideTabContent() {
    
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('active'); // Change active class
    });
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('active'); // Change active class
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
const target = event.target;
if(target && target.classList.contains('.tabheader__item'.slice(1))) { // Change method contains(tabs)
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
}
});

