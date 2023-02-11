# Tabs Switcher

## Description

Simple Tabs Switcher. Switches tabs with content with fade animation.

## Customization
### HTML-structure:
```
<div class="tabcontainer">
        <div class="tabcontent">
            <img src="tab1.webp" alt="tab1">
            <div class="tabcontent__descr">
                tab1 description!
            </div>
        </div>
        <div class="tabcontent">
            <img src="tab2.webp" alt="tab2">
            <div class="tabcontent__descr">
                tab2 description!
            </div>
        </div>
        <div class="tabcontent">
            <img src="tab3.webp" alt="tab3">
            <div class="tabcontent__descr">
                tab3 description!
            </div>
        </div>
        <div class="tabcontent">
            <img src="tab4" alt="tab4">
            <div class="tabcontent__descr">
                tab4 description!
            </div>
        </div>
        <div class="tabheader">
            <h3>Select the tab</h3>
            <div class="tabheader__items">
                <div class="tabheader__item tabheader__item active">tab1</div>
                <div class="tabheader__item">tab2</div>
                <div class="tabheader__item">tab3</div>
                <div class="tabheader__item">tab4</div>
            </div>
        </div>
    </div>
```
### CSS-styles:
```
 .show {
        display: block;
}

.hide {
    display: none;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {
        opacity: 0.1;
    }

    to {
        opacity: 1;
    }
}

.active {
    color: #000;
    font-size: 22px;
    font-weight: 700;
}
```

* In order to get tabs selector - change 'tabs' variable and change 'if' method 'contains'.
* In order to get tabs content and tabs parent - change 'tabsContent' and 'tabsParent' variable.
* In order to set/remove active class - change 'hideTabContent' function and 'showTabContent' function.
