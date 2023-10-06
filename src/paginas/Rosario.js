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



export default function Rosario() {
    return(
        <div>
            <Header/>
            <Navbar />
            <div>
            <h2 className="title2">María Rosario Baeza Zúñiga</h2>
            <h2 className="title3">Mis actividades favoritas fuera de universidad son:</h2>
            <div className="actividades">
                <section className="actividad">
                    <img className="imagen1" src={img5} alt="Baile español"/>
                    <h3>DANZA ESPAÑOLA</h3>
                    <p className="parrafo2">
                        Esta actividad la hago hace más de 13 años
                    </p>
                    
                </section>

                <section className="actividad">
                    <img className="imagen1" src={img6} alt="scout"/>
                    <h3>SCOUT</h3>
                    <p className="parrafo2">
                        Desde los 10 años que participo en mi grupo scout, ahora no como beneficiaria sino que como dirigente de la unidad menor.
                    </p>
                </section>
            </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );


}