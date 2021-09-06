import styles from './anim.scss';
import $ from 'jquery';



export default function Animation() {
return(
  <div class="wrapper" >
        <div class="center">
  <h1 class="center__text glitch is-glitching" data-text="Front-End Developer React.JS">Front-End Developer <span>React.JS</span> </h1>
        </div>
      {/* <div class="dropping-texts">
        <div>Front-End</div>
        <div>React.JS</div>
        <div>Developer</div>
        <div>Yanda Ihor</div>
      </div>       */}
  </div>
    )
}