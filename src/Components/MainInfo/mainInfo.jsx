import styles from './mainInfo.module.css';
import { useHistory } from 'react-router-dom';

export default function Main() {   

    const history = useHistory();

    return(
        <main className={styles.main}>
            {/* <h3>PURPOSE:</h3>
            <div className={styles.educationBlock}>
            <p>I am looking for an interesting job as a Front-End developer in a
                friendly developing team that will help me to revitalize and
                multiply my programming skills.
            </p>
            </div>
                <h3>EXPERIENCE WORKING IN PROJECTS</h3>
                <ul>
                    <li>1.Team project on HTML+CSS
Link to the work page:
<a href="https://ehorhavrylenko.github.io/Project_Mission_team/build/index.html">link</a>

<br/>
Technologies: HTML5 - CSS3 - GULP - SASS - BEM
About the project: adaptive page layout is implemented.
                    </li>
                    <br/>
                    <li>2.Team project on JavaScript
Link to the work page:
<a href="https://kandaurov-aleksandr.github.io/Filmoteka-Project/build/index.html">link</a>
<br/>
Technologies: JS - HTML5 - CSS3 - WEBPACK - 
<br/>SASS - BEM-Axios
<br/>
About the project: adaptive page layout is implemented.
A movie search site that has a personal account where you can save
your favorite movies.
                    </li>
                    <br/>
                    <li>3.Participant of a commercial project "Kharkiv IT Cluster"
Technologies: HTML5 - CSS3 - React.JS - <br/> Redux - REST API - .NET
<br/>
About the project: the page was created according to the layout of the
customer Kharkiv Eco City, the message of which was to draw the
attention of others to the problem of waste and the environment.
                    </li>
                </ul>
                <h3>WORK EXPERIENCE</h3>
                <div className={styles.educationBlock}>
                <p>Been working in the lubricants testing laboratory for 5 years, 4.5
of which I hold the position of head of the laboratory. I have a
certificate of internal auditor from the international company
QSCert.                
                </p>
                </div> */}






{/* 
                <h3 className={styles.education}>EDUCATION</h3>
                <div className={styles.educationBlock}>
                <h4>IT School GoIT
                FULL-STACK DEVELOPER
                </h4>
                <span>March 2020 - June 2021</span>
                <h4>National Technical University of Ukraine «Igor
                Sikorsky Kyiv Polytechnic Institute»
                </h4>
                <p>SPECIALIST OF ENGINEERING - CHEMICAL ENGINEERING
TECHNOLOGY/TECHNICIAN</p>
                <span>2010-2016</span>
                </div> */}
        </main>
    )
}