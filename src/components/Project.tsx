import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>My Project</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/zhrtlmrdyh/Learnify.git" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zhrtlmrdyh/Learnify.git" target="_blank" rel="noreferrer"><h2>Learnify: Learning Management Systems</h2></a>
                <p>Develop Learnify website application which is a Learning Management System (LMS) as a Fullstack Developer using CodeIgniter 4 and MySQL.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=id.co.jict.myjict" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=id.co.jict.myjict" target="_blank" rel="noreferrer"><h2>My JICT GBOSS</h2></a>
                <p>Developed My JICT GBOSS with Flutter and Spring Boot to improve customer service access, focusing on Billing Transaction on Order Export, Order Extension, E-Invoice, and Transaction E-Ticket menus, and Shipping Line on Tariff Transaction, Container Tracking, and TbsQuota menus.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.persib.persibpass" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.persib.persibpass" target="_blank" rel="noreferrer"><h2>Persib Apps</h2></a>
                <p>Developed Persib App for digital access to tickets, merchandise and news. I was responsible for Family Member and Ticketing features with Order Ticket and E-Ticket options to enhance fan experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/zhrtlmrdyh/Dicuci-Customer.git" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zhrtlmrdyh/Dicuci-Customer.git" target="_blank" rel="noreferrer"><h2>Dicuci Customer</h2></a>
                <p>Developed the Dicuci Customer app for online laundry services. I was responsible for the Express Laundry feature, Get and Add Favorite Packages option, and Star Partner feature.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.dipujas.kantin" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.dipujas.kantin" target="_blank" rel="noreferrer"><h2>DiPujas Kantin</h2></a>
                <p>Developed DiPujas Kantin using Flutter, ExpressJS, and Firebase, addressing long queues, update real-time menus, and inefficient service in universities.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.dipujas.konsumen" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.dipujas.konsumen" target="_blank" rel="noreferrer"><h2>DiPujas Konsumen</h2></a>
                <p>Developed DiPujas Konsumen with Flutter, ExpressJS, and Firebase for online ordering in universities, reducing queues, automating service, and increasing speed. Enables quick online food ordering, fast payments, and shorter lines.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rzhilal/GameDev-Galactic-War.git" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rzhilal/GameDev-Galactic-War.git" target="_blank" rel="noreferrer"><h2>Game: Galactic Spaceship War</h2></a>
                <p>Developed "Galactic Spaceship War" with Godot engine and Blender to created assets, offering an aerial combat simulation. Players pilot spaceships, shooting enemies for 50 points each and leveling up every 500 points, facing faster enemies and unavoidable stone obstacles. Health depletes with collisions, adding challenge.</p>
            </div>
            <div className="project">
                <a href="http://firesensor-fireteams.my.id/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://firesensor-fireteams.my.id/" target="_blank" rel="noreferrer"><h2>Website Monitoring: Fire Detector</h2></a>
                <p>Developed Website Monitoring: Fire Detector using PHP and integrated with MQTT for early fire detection, employing fuzzy control to read temperature rise, smoke, humidity, UV levels, and air quality index. Ensures fast data transmission, routine monitoring, and remote surveillance via internet connection.</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/zhrtlmrdyh/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zhrtlmrdyh/" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/zhrtlmrdyh/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zhrtlmrdyh/" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;