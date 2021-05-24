const personalInfo = (props) => {
    return (
        <div>
            <div className={"personal " + props.view}>
                <h1>About Me</h1>
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
                    
                </p>
            </div>
            <div className="studies">
                <h2>Estudios</h2>
            </div>
        </div>
    )
}

export default personalInfo;