import styles from './skills.scss';
// import $ from 'jquery';



export default function Skills() {
    
    return(
    <section class="skills">

        <div id="item_1" class="pseudoBox"></div>
        <div class="flexContent">
    <div>
            <label for="pseudoBtn" id="item_2" class="btn"><h3 >TECHNICAL SKILLS</h3></label>
            <input type="checkbox" id="pseudoBtn" class="pseudoBtn"></input>
        <ul class="techSkills">
            <li>HTML5/CSS3</li>
            <li>Webpack</li>
            <li>Gulp</li>
            <li>SASS</li>
            <li>JavaScript Es6+</li>            
            <li>Redux</li>
            <li>REST API</li>
            <li>Node.js</li>
            <li>React.js</li>
        </ul>
    </div>
    <div>
            <label for="pseudoBtnSoft" class="btn"><h3 id="item_3">SOFT SKILLS</h3></label>
            <input type="checkbox" id="pseudoBtnSoft" class="pseudoBtnSoft"></input>
        <ul class="softSkills">
            <li>Responsibility</li>
            <li>Scrum</li>
            <li>Agile</li>
            <li>Teamwork</li>
            <li>Quality Management System Auditor</li>
        </ul>
    </div>
    <div>
        <label for="pseudoBtnLang" class="btn"><h3 id="item_4">LANGUAGES</h3></label>
        <input type="checkbox" id="pseudoBtnLang" class="pseudoBtnLang"></input>
        <ul class="lang">
            <li><span>English</span> - Pre-Intermediate</li>
            <li><span>Ukrainian</span> - Native</li>
            <li><span>Russian</span> - Native</li>
        </ul>
    </div>
    <div>
        <label for="pseudoBtnPurp" class="btn"><h3 id="item_5">PURPOSE</h3></label>
        <input type="checkbox" id="pseudoBtnPurp" class="pseudoBtnPurp"></input>
            <ul class="purpouseText">
                <li>I am looking for an interesting job as a Front-End developer in a
                friendly developing team that will help me to revitalize and
                multiply my programming skills.
                </li>
            </ul>
    </div>
    <div>
            <label for="pseudoBtnExp" class="btn"><h3 id="item_6">EXPERIENCE WORKING IN PROJECTS</h3></label>
            <input type="checkbox" id="pseudoBtnExp" class="pseudoBtnExp"></input>
                <ul class="expText">
                    <li> 1.Team project on HTML+CSS
Link to the work page:  <span>
<a class="linkWork" target="_blank" href="https://ehorhavrylenko.github.io/Project_Mission_team/build/index.html">link</a>
</span>
<br/>
Technologies: HTML5 - CSS3 - GULP - SASS - BEM
About the project: adaptive page layout is implemented.
                    </li>
                    <br/>
                    <li>2.Team project on JavaScript
Link to the work page:  <span>
<a class="linkWork" target="_blank" href="https://kandaurov-aleksandr.github.io/Filmoteka-Project/build/index.html">link</a>
</span>
<br/>
Technologies: JS - HTML5 - CSS3 - WEBPACK - 
SASS - BEM-Axiosthis <br/>
About the project: adaptive page layout is implemented.
A movie search site that has a personal account where you can save
your favorite movies.
                    </li>
                    <br/>
                    <li>3.Participant of a commercial project "Kharkiv IT Cluster"
Technologies: HTML5 - CSS3 - React.JS - Redux - REST API - .NET
<br/>
About the project: the page was created according to the layout of the
customer Kharkiv Eco City, the message of which was to draw the
attention of others to the problem of waste and the environment.
                    </li>
                </ul>
    </div>
    <div>
                <label for="pseudoBtnWorkExp" class="btn"><h3 id="item_7">WORK EXPERIENCE</h3></label>
                <input type="checkbox" id="pseudoBtnWorkExp" class="pseudoBtnWorkExp"></input>
                <ul class="workExpText">
                   <li> Been working in the lubricants testing laboratory for 5 years, 4.5
of which I hold the position of head of the laboratory. I have a
certificate of internal auditor from the international company
QSCert.          
                </li>
                </ul>
    </div>
</div>

                <label for="pseudoBtnUniverce" class="btn"><h3 id="item_8">EDUCATION</h3></label>
                <input type="checkbox" id="pseudoBtnUniverce" class="pseudoBtnUniverce"></input>
                <ul class="univerce">
                    <li><h4>IT School GoIT
                FULL-STACK DEVELOPER</h4>
                <span>March 2020 - June 2021</span>
                <div class="sertifFiles">
                    <div>
                <a class="linkCertificate" target="_blank" href="https://drive.google.com/file/d/1bkrgz_HnGOZuOCoyqujQoqtlUfZFfv3i/view?usp=sharing">View certificate №1 </a>
                </div>
                <div>
                <a class="linkCertificate" target="_blank" href="https://drive.google.com/file/d/1KEBqfHnrx0eTmJC_9s1396ACwKALQT0k/view?usp=sharing">View certificate №2 </a>
                </div>
                </div>  
                    </li>
                <br />
                    <li> <h4>National Technical University of Ukraine «Igor Sikorsky Kyiv Polytechnic Institute»</h4>
                <p>SPECIALIST OF ENGINEERING - CHEMICAL ENGINEERING TECHNOLOGY/TECHNICIAN</p>
                <span>2010 - 2016</span>
                </li>
                </ul>
        </section>
    )
}
