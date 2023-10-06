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



export default function Josefa() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="content shadow">
            <h1 className="title2">María Josefa Contreras Vergara</h1>
            <div>
                <p className="parrafo">A continuación expondré algunos de mis pasatiempos o actividades que realizo en momentos de ocio o que no tienen que ver con la universidad y otras responsabilidades.</p>
            </div>
            <h2 className="izquierda">+ Uno de mis pasatiempos preferidos es leer</h2>
            <p className="parrafo2 izquierda">Entre algunos de los libros que pude recordar mientras creaba esta lista de pasatiempos se encuentran:</p>
            <table className="mi_tabla">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Harry Potter y la piedra filosofal</td>
                        <td>J.K. Rowling</td>
                        <td>Ficción</td>
                    </tr>
                    <tr>
                        <td>Los juegos del hambre</td>
                        <td>Suzanne Collins</td>
                        <td>Ciencia Ficción</td>
                    </tr>
                    <tr>
                        <td>Joyland</td>
                        <td>Stephen King</td>
                        <td>Terror o suspenso</td>
                    </tr>
                    <tr>
                        <td>Si decido quedarme</td>
                        <td>Gayle Forman</td>
                        <td>Romance</td>
                    </tr>
                    <tr>
                        <td>La selección</td>
                        <td>Kiera Cass</td>
                        <td>Romance</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h2 className="izquierda">+ Continuando con la lista puedo mencionar como pasatiempo el ver películas, tanto en salas de cine como en plataformas</h2>
            <p className="parrafo2 izquierda">Me gusta en realidad todo tipo de películas y me es muy difícil hacer un listado de las mejores a mi parecer, pero puedo destacar una de las primeras que vi en el cine: La era de Hielo cuando era muy pequeña y la más reciente, Oppenheimer, géneros muy distintos como se puede notar.</p>
            <a className="izquierda link" href="https://www.netflix.com/title/70206672">Aquí se puede encontrar la adaptación al cine de uno de los libros mencionados en la lista</a>
            <h2 className="izquierda">+ En tercer lugar puedo mencionar el hacer manualidades</h2>
            <p className="parrafo2 izquierda">Me gusta confeccionar accesorios en macramé y otros materiales, pintar en variadas superficies, aprendí a tejer y a trabajar la lana, también sé bordar y he aprendido muchas otras técnicas que en este momento no recuerdo.</p>
            <h2 className="izquierda">+ Otro pasatiempo es salir, pasear por lugares nuevos, parques, admirar los paisajes y disfruto mucho de mirar atardeceres.</h2>
            <img className="imagen1 " src="https://i0.wp.com/apuntesyviajes.com/wp-content/uploads/2021/01/mejores_fotos_2020_valparaiso_chile.jpg?resize=1200%2C801&ssl=1" alt="Referenciando" width="500" />
            <h2 className="izquierda">+ Puedo mencionar también la fotografía, como pasatiempo, es algo a lo que me gustaría dedicarle más tiempo a aprender sus técnicas y secretos.</h2>
            </div>
            <Footer />
        </div>
    );
}