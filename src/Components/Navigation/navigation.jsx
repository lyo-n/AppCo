import styles from './navigation.scss';
import $ from 'jquery';

export default function Navigation(){  
  
    // let menuItems = document.querySelectorAll('.mobile-menu__list li');

    // for (let i = 0; i < menuItems.length; ++i) {
    //     menuItems[i].addEventListener('click', function(e) {
    // let closeEvent = new CustomEvent('closeMenu', {
    //   bubbles: true,
    // });
    // e.currentTarget.dispatchEvent(closeEvent);
    //     });
    // }

    // let menu = document.querySelector('.mobile-menu__list')
    // let toggler = document.querySelector('.mobile-menu__checkbox')
    //     if (menu && toggler) {
    //         menu.addEventListener('closeMenu', function(e) {
    // menu.classList.remove('open');
    // toggler.checked = false;
    //     });
    // toggler.addEventListener('click', function(e) {
    // menu.classList.toggle('closeMenu');
    //     });
    // }

    return(      
        <div class="navigation">

<nav class="mobile-menu">
    <input type="checkbox" id="checkbox" class="mobile-menu__checkbox"/>
    <label for="checkbox" class="mobile-menu__btn" ><div class="mobile-menu__icon"></div></label>
    <div class="mobile-menu__container">
    <ul class="mobile-menu__list">
        <li class="mobile-menu__item"><a target="_blank" href="https://drive.google.com/file/d/1LlXOYD8Cf-qQ5pbv8mF3LyoS2xaPxYre/view?usp=sharing"  class="mobile-menu__link">MY RESUME</a></li>
        <li class="mobile-menu__item"><a target="_blank" href="https://drive.google.com/file/d/1bkrgz_HnGOZuOCoyqujQoqtlUfZFfv3i/view?usp=sharing" class="mobile-menu__link">Certificate №1</a></li>
        <li class="mobile-menu__item"><a target="_blank" href="https://drive.google.com/file/d/1KEBqfHnrx0eTmJC_9s1396ACwKALQT0k/view?usp=sharing" class="mobile-menu__link">Certificate №2</a></li>
        {/* <li class="mobile-menu__item"><a href="#item_4" class="mobile-menu__link">PURPOSE</a></li>
        <li class="mobile-menu__item"><a href="#item_5" class="mobile-menu__link">EXPERIENCE WORKING IN PROJECTS</a></li>
        <li class="mobile-menu__item"><a href="#item_6" class="mobile-menu__link">WORK EXPERIENCE</a></li>
        <li class="mobile-menu__item"><a href="#item_7" class="mobile-menu__link">EDUCATION</a></li>
        <li class="mobile-menu__item"><a href="#itemContact" class="mobile-menu__link">CONTACTS</a></li> */}
    </ul>
    </div>
</nav>
        </div>
    )
}
