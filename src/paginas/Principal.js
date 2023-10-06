import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.JPG";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpeg";

export default function Principal() {
    return(
        <div>
        <Header />
        <Navbar />
        <section className="objetivos">
            <div className="contenido-objetivos">
                <h2>Pequeña descripción</h2>
                <p className="parrafo">Nuestro grupo de trabajo esta conformado por 3 estudiantes de 4to año de ingeniería, uno de ellos tiene como especialidad informática y las otras dos integrantes cursan doble titulación industrial-informática. </p>
                <div>
                    <a href="/index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users-group" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                        </svg>
                    </a>
                </div>
                <p className="parrafo2">En cuanto a nuestros objetivos para este ramo podemos mencionar el aprender más acerca de las aplicaciones y alcances que tiene la programación, tanto de la teoria como la practica, a través de paginas web. Estamos muy interesados en ir viendo nuestro avance a lo largo del curso y poder aplicar en nuestros futuros trabajos todas las herramientas adquiridas al finalizarlo.  </p>
            </div>
        </section>
        <div className='container mt-4'>
            <h2 className="title2">Integrantes</h2>
            <div className="integrantes content shadow">
                <section className="integrante">
                    <a href="/rosario"><img className="imagen" src={img7} alt="Rosario" /></a>
                    <div className="nombres">
                    <a href="/rosario">Rosario Baeza</a>
                    </div>
                </section>
                <section className="integrante">
                    <a href="/pedro"><img className="imagen" src={img2} alt="Pedro" /></a>
                    <div className="nombres">
                    <a href="/Pedro">Pedro Fajardo</a>
                    </div>
                </section>

                <section className="integrante">
                    <a href="/josefa"><img className="imagen" src={img1} alt="Josefa" /></a>
                    <div className="nombres">
                    <a href="/josefa">Josefa Contreras</a>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
            
        </div>

    );


}