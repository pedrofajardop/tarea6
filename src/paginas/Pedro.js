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

export default function Pedro() {
    return(
    <div>
        <Header/>
        <Navbar />
        <h2 className="title2">Pedro Fajardo Pérez</h2>
        <h2 className="title3">Mis actividades favoritas fuera de universidad son:</h2>
        <div className="actividades">
            <section className="actividad content">
                <img className="imagen1" src={img3} alt="basket"/>
                <h3>Jugar Básquetbol</h3>
                <p className="parrafo2">
                    Me dedico a realizar este deporte desde que tengo 12 años, me gusta jugarlo como también verlo.
                </p>
                
            </section>

            <section className="actividad">
                <img className="imagen1" src={img4} alt="cocina"/>
                <h3>Cocinar</h3>
                <p className="parrafo2"> 
                    Me encanta cocinar, este pasatiempo lo adqiurí por mi hermano que se dedica al mundo de la cocina y me transfrió su pasión por ella.
                </p>
            </section>
        </div>
        <div>
           <Footer />
        </div>
    </div>


    );


}