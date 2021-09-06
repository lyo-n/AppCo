import styles from './footer.scss';
import { SocialIcon } from 'react-social-icons';
import sprite from "./../../image/sprite.svg";
// import $ from 'jquery';




export default function Footer() {   
    const phoneIcon = '<use xlink:href="../../../image/sprite.svg#phone" />';


    return(
        <footer class="footer" id="itemContact">
             <p class="footerHeading" >CONTACT ME</p>
            <ul class="socialIcons">
                <li><SocialIcon url="https://linkedin.com/in/yandaihor" /></li>
                <li><SocialIcon  bgColor="#4b4b4b" fgColor="#ffffff" url="https://github.com/lyo-n"/></li>
                <li><SocialIcon fgColor="#ffffff" bgColor="#fd5949" url="https://instagram.com/1y0nn"/></li>
            </ul>
            <div class="infoBlock">
           
            <p>My number: <span  data-title="Click to copy" class="editor" onClick={() =>  navigator.clipboard.writeText('+38 (095)-424-10-75')}>+38 (095)-424-10-75</span>  
            <a href="tel:+38 (095)-424-10-75" class="phoneLink">       
            <button class="phoneBtn">
                <svg class="phoneImg">
                  <use href={sprite + "#phone"}></use>
                </svg>
            </button>
            </a>
            </p>            
            <p>My email: <span data-title="Click to copy" onClick={() =>  navigator.clipboard.writeText('YandaIhor@gmail.com')}>YandaIhor@gmail.com</span></p>
            </div>
           
        </footer>
    )
}