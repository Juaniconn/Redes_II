import React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header class="header">
          <div class="container">
            <h1>WEBNEER</h1>
            <div class="nav">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#video">Video</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#galeria">Gallery</a>
                </li>
                <li>
                  <a href="#skills">Slills</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <section class="hero" id="home">
          <div class="container">
            <div class="hero_leftside">
              <h1>Automatizaión de Redes</h1>
              <p>Funcionamiento óptimo y automatizado en redes</p>
            </div>
          </div>
          <div class="hero_background">
            <img src={require("./assets/images/cover.png")} width="300px"/>
            <img src={require("./assets/images/hero.png")} width="300px"/>
            {/* <img src={require("./assets/images/gallery1.jpg")} width="300px"/> */}
          </div>
        </section>
        <section class="video" id="video">
          <div class="container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AhdGgJ5nDyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="video_rightside">
              <h2>Scripts en python</h2>
              <p>Configuración de routers y switch por medio de python</p>
              <p>El proceso de configuracióon tanto en los routers como en los switchs creamos scripts por medio de python que de manera automatizada se configuran a cada uno de los dispositivos de manera remota y segura.</p>
            </div>
          </div>
        </section>
        <section class="project" id="project">
          <div class="container">
            <h2>Proyecto Final</h2>
            <p>Diseñar, analizar e implementar un diseño optimo de red utilizando las habilidades adquiridas en los cursos de CCNA y en clases.</p>

            <div class="project_content">
              <div class="project_content_item">
                <h3>Dual Stack</h3>
                <p>Direccionamiento privado tanto como IPv4 e IPv6</p>
              </div>
              <div class="project_content_item">
                <h3>División de Subredes</h3>
                <p>Sumarización de direcciones para un ruteo optimo y funcional</p>
              </div>
              <div class="project_content_item">
                <h3>Configuración Basica</h3>
                <p>Politicas de administración de la empresa</p>
              </div>
              <div class="project_content_item">
                <h3>DHCP</h3>
                <p>Asignación de direcciones dinámicas</p>
              </div>
              <div class="project_content_item">
                <h3>Protocolo de ruteo EIGGRP</h3>
                <p>Sistema de ruteo de extremo a extremo</p>
              </div>
              <div class="project_content_item">
                <h3>HSRP</h3>
                <p>Routers redundantes tolerantes a fallas</p>
              </div>
              <div class="project_content_item">
                <h3>Seguridad en puertos</h3>
                <p>Implementación de seguridad de puertos en la empresa</p>
              </div>
              <div class="project_content_item">
                <h3>Agregación de enlaces</h3>
                <p>Configuración del protocolo LACP para garantizar un rendimiento en ancho de banda</p>
              </div>
              <div class="project_content_item">
                <h3>NAT</h3>
                <p>Los servicios de la empresa podrán ser accedidos mediante sistemas autónomos e internet</p>
              </div>
              <div class="project_content_item">
                <h3>Lista de acceso</h3>
                <p>Asignación de politicas de seguridad en la empresa</p>
              </div>
              <div class="project_content_item">
                <h3>Evitar ataques</h3>
                <p>Asignación de politicas de seguridad para ataques en la empresa</p>
              </div>
              <div class="project_content_item">
                <h3>Diagrama Topologico</h3>
                <p>Diseño de la empresa en formato topológico</p>
              </div>
            </div>
          </div>
        </section>
        <section class="skills" id="skills">
          <div class="container">
            <h2>Metricas sobrer el gestionamiento del proyecto</h2>
            <div class="skills_content">
              <div class="skills_content_item">
                <h3>Horas totales</h3>
                <div class="skills_raiting">
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                </div>
                <p>168 Horas</p>
              </div>
              <div class="skills_content_item">
                <h3>Tiempo de implementación</h3>
                <div class="skills_raiting">
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                </div>
                <p>128 Horas</p>
              </div>
              <div class="skills_content_item">
                <h3>Tiempo en errores</h3>
                <div class="skills_raiting">
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                  <i class="icon-star-full"></i>
                </div>
                <p>44 Horas</p>
              </div>
            </div>
          </div>
        </section>
        <section class="galeria" id="galeria">
          <div class="container">
            <h2>Galería</h2>
            <div class="galeria_content">
              <div class="galeria_img galeria_img1"></div>
              <div class="galeria_img galeria_img2"></div>
              <div class="galeria_img galeria_img3"></div>
              <div class="galeria_img galeria_img4"></div>
              <div class="galeria_img galeria_img5"></div>
            </div>
          </div>
        </section>
        <section class="contact" id="contact">
          <img src={require("./assets/images/cover.png")} width="300px"/>
          <div class="container">
            <div class="contact_item_aboutus">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="contact_item_navigation">
              <h2>Navigation</h2>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#video">Video</a>
                </li>
                <li>
                  <a href="#project">Proyecto</a>
                </li>
                <li>
                  <a href="#galeria">Galería</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
              </ul>
            </div>
            <div class="contact_item_followus">
              <h2>Follow Us</h2>
              <div class="social_links">
                <a href="#"><i class="icon-facebook2"></i></a>
                <a href="#"><i class="icon-instagram"></i></a>
                <a href="#"><i class="icon-twitter"></i></a>
                <a href="#"><i class="icon-youtube"></i></a>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="container">
            <p>Copyright © 2019 All rights reserved | Made by <a href="https://juanponce.dev">Juan Ponce</a></p>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
