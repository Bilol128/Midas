const banner_close = document.querySelector(".navabr-banner__close")
const navbar_close = document.querySelector(".navbar-banner")
const navbar_burger = document.querySelector(".navbar-burger")
const navbar_content = document.querySelector(".navbar-content")
const burger_menu = document.querySelector(".burger-menu")
const burger_menu__dark = document.querySelector(".burger-menu__dark")
const body = document.querySelector("body")
const navbar__drop__li = document.querySelectorAll(".navbar__drop__li")
const navbar__drop__li2 = document.querySelectorAll(".navbar__drop__li2")
const navbar__dropDown = document.querySelectorAll(".navbar__dropDown")
const navbar__dropDown2 = document.querySelectorAll(".navbar__dropDown2")
const burger__dark = document.querySelector(".burger-menu__dark")
const number2Top = document.querySelector(".steke-number")
const deposit_spoiler = document.querySelector(".deposit-spoiler")
const deposit_spoiler__icon = document.querySelector(".deposit-spoiler__icon")
const deposit_spoiler__content = document.querySelector(".deposit-spoiler__content")
const input_blur__butto = document.querySelector(".input-blur__button")
const deposit_input_p = document.querySelector(".deposit-input_p")
const deposit_box = document.querySelector(".deposit-box")
const deposit_spoiler__text = document.querySelector(".deposit-spoiler__text p")
const deposit_spoiler__li = document.querySelectorAll(".deposir-spoiler__content-list li")
const select__word = document.querySelectorAll(".grafik-select__word")
const swap_spiler__content = document.querySelectorAll(".swap-spiler__content")
const swap_coin__header = document.querySelectorAll(".swap-coin__header")
const swap_coin__spoiler = document.querySelectorAll(".swap-coin__spoiler")
const steke_number = document.querySelector(".steke-number")
const steke_number2 = document.querySelector(".steke-number2")
const steke_number3 = document.querySelector(".steke-number3")
const seven_spoiler__box = document.querySelectorAll(".seven-spoiler__box")







seven_spoiler__box.forEach(acardion_elem2 => {
    acardion_elem2.addEventListener('click' , function(){
        if(acardion_elem2.classList.contains('seven_spoiler__boxActive')){
            acardion_elem2.classList.remove('seven_spoiler__boxActive')
        }else{
            seven_spoiler__box.forEach((event3) => event3.classList.remove("seven_spoiler__boxActive"));
            acardion_elem2.classList.add('seven_spoiler__boxActive')
        }
    })
})   











let number10 = 0
let number20 = 0
let number30 = 0


setInterval(() => {
    if(steke_number.classList.contains('aos-animate')){
        setInterval(() => {
            if(number10 < 2600){
                let number2 = number10 += 20;
                let arr2 = [...number2.toString()];
                arr2[2] = 0
                arr2[3] = 0
                steke_number.innerHTML = arr2[0] + '.' + arr2[1] + arr2[2] + arr2[3]  + '<span> users</span>'        
             }
             else{
             }
        }, 100);
    }
    else{
    }    
    if(steke_number2.classList.contains('aos-animate')){
        setInterval(() => {
            if(number30 < 30){
                let number3 = number30 += 1;
                steke_number2.innerHTML =  '<span>$ </span>' + number3 + '<span> million</span>'        
             }
             else{
             }
        }, 100);
    }
    else{
    }    
    if(steke_number3.classList.contains('aos-animate')){
        setInterval(() => {
            if(number20 < 1800000){
                let number1 = number20 += 10000;
                let arr = [...number1.toString()];
                arr[5] = 0
                arr[6] = 0
                steke_number3.innerHTML = arr[0] + '.' + arr[1] + arr[2] + arr[3] + '.' + arr[4] + arr[5] + arr[6]
             }
             else{
              
             }
        }, 100);
    }
    else{
    }    
}, 30);
// 



swap_coin__spoiler.forEach(acardion_elem => {
    acardion_elem.addEventListener('click' , function(){
        if(acardion_elem.classList.contains('acardion-active')){
            acardion_elem.classList.remove('acardion-active')
        }else{
            swap_coin__spoiler.forEach((event2) => event2.classList.remove("acardion-active"));
            acardion_elem.classList.add('acardion-active')
        }
    })    
  });






select__word.forEach(select__wordeElement => {
    select__wordeElement.addEventListener('click' , function(){
        select__word.forEach(select__wordeElement2 => {
            select__wordeElement2.classList.remove('select__wordeElementActive')
        })
        select__wordeElement.classList.add('select__wordeElementActive')
    })
});



deposit_spoiler__li.forEach(deposit_spoiler__lielement => {
    deposit_spoiler__lielement.addEventListener('click' , function(){
        deposit_spoiler__text.innerHTML = deposit_spoiler__lielement.innerHTML
    })
});



input_blur__butto.addEventListener('click' , function(){
    deposit_input_p.classList.toggle('deposit_input_p__active')
})


deposit_spoiler.addEventListener('click' , function(){
    deposit_spoiler.classList.toggle('deposit_spoiler_active')
    deposit_spoiler__icon.classList.toggle('deposit_spoiler__icon__active')
    deposit_spoiler__content.classList.toggle('deposit_spoiler__content__active')
})

    
burger__dark.addEventListener('click' , function(){
    burger_menu.classList.remove('burger_menu__active')
    burger_menu__dark.classList.remove('burger__dark__active')
    navbar_burger.classList.remove('navbar-burger__active')
    body.classList.toggle('body__lock')
})




AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


navbar__drop__li2.forEach(navbar__drop__li2element => {
    navbar__dropDown2.forEach(navbar__dropDownelement2 => {
        navbar__drop__li2element.addEventListener('click' , function(){
            navbar__dropDownelement2.classList.add("navbar__dropDown__active")
        })
        navbar__drop__li2element.addEventListener('mouseout' , function(){
            navbar__dropDownelement2.classList.remove("navbar__dropDown__active")
        })
        navbar__drop__li2element.addEventListener('mouseover' , function(){
            navbar__dropDownelement2.classList.add("navbar__dropDown__active")
        })
    });
});










navbar__drop__li.forEach(navbar__drop__lielement => {
    navbar__dropDown.forEach(navbar__dropDownelement => {
        navbar__drop__lielement.addEventListener('click' , function(){
            navbar__dropDownelement.classList.add("navbar__dropDown__active")
        })
        navbar__drop__lielement.addEventListener('mouseout' , function(){
            navbar__dropDownelement.classList.remove("navbar__dropDown__active")
        })
        navbar__drop__lielement.addEventListener('mouseover' , function(){
            navbar__dropDownelement.classList.add("navbar__dropDown__active")
        })
    });
});








burger_menu__dark.addEventListener('click' , function(){
    burger_menu.classList.remove('burger_menu__active')
    burger_menu__dark.classList.remove('burger__dark__active')
    navbar_burger.classList.remove('navbar-burger__active')
})


navbar_burger.addEventListener('click' , function(){
    navbar_burger.classList.toggle('navbar-burger__active')
    burger_menu.classList.toggle('burger_menu__active')
    burger_menu__dark.classList.toggle('burger__dark__active')
    body.classList.toggle('body__lock')
})


banner_close.addEventListener('click' , function(){
    navbar_close.classList.add('navbar-banner__disabled') 
    navbar_content.classList.add('navbar-content__active') 
})