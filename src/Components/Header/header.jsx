import styles from './header.scss';



export default function Header() {
    return(
        <header class="header">
           
        {/* Рабочая кнопка переключения  */}
            {/* <div className={styles.form}>
              <label className={styles.toggle}>
                <div className={styles.toggleWrapper}>
                    <input type="checkbox"/>
                    <div className={styles.toggleBg}>
                        <div className={styles.toggleSphere}>
                            <div className={styles.toggleSphereBg}></div>
                            <div className={styles.toggleSphereOverlay}></div>
                        </div>
                    </div>
                </div>
                </label>
            </div> */}


            
            <div class="mainImg"></div>
            <div><h1>Yanda Ihor</h1>
            <p>Front-End Developer</p>
            </div>   
           
        </header>
    )
}