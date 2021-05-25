import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBriefcase, faHeadphones, faTv, } from '@fortawesome/free-solid-svg-icons'
import { } from "@fortawesome/free-brands-svg-icons";


const personalInfo = (props) => {
    return (
        <div className={"personal " + props.view}>
            <div >
                <h1 className="tittle">About Me</h1>
                <h4>30 años</h4>
                <span>|</span>
                <h4>San Miguel de Tucumán</h4>
                <span>|</span>
                <h4>Autodidacta</h4>
            </div>
            <div className="aboutme">
                <p>En este ultimo año de pandemia me propuse un desafio, crecer, y que mejor manera de hacerlo que sumergiendome en
                lo que va a ser la nueva revolucion industrial, la tecnologia, mas especificamente la programacion.
                De esta manera comenzo mi viaje de aprendizaje y auto enseñanza y me apasione por este nuevo mundo que descubrí.
                    <br />
                    Esta es una pequeña muestra de lo que la iniciativa de aprender puede generar en mi, enfocando mi aprendizaje en el
                    desarrollo de UI y UX, espero poder adentrarme en este mercado laboral que tanto tiene para ofrecer.

                </p>
            </div>
            <div className="studies">
                <h2>Formacion</h2>
                <div>
                    <span><FontAwesomeIcon icon={faBook} /> </span>
                    <h5>Secundario completo, orioentacion administracion de empresas</h5>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faHeadphones} /> </span>
                    <h5>ingles avanzado, LSA (lengua de señas argentina) intermedio</h5>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faTv} /> </span>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faBriefcase} /> </span>
                    <ul>
                        <li>Instructor de primeros auxilios (2008 - 2014)</li>
                        <li>Agente telefonico en Teleperformance (2015 - 2016)</li>
                        <li>Vigilador en Prosegur (2016 - actual)</li>                        
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default personalInfo;