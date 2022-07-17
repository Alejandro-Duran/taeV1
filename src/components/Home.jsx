const home = () => {
    return (
        <div className="container-fluid px-3">
            <div className="d-flex justify-content-center flex-wrap align-items-sm-center align-items-stretch">
                <div id="prof" className="mt-4 pt-sm-0 pt-3 order-sm-1 order-1 col-5 col-sm-3 container-fluid border border-5 border-dark rounded-pill d-flex flex-column align-items-center">
                    <h3>Profesor</h3>
                    <dl>
                        <dt>Nombre</dt>
                        <dd>Jonathan A. Dúran R.</dd>
                        <dt>Grado</dt>
                        <dd>Cinta negra 3er DAN</dd>
                    </dl>
                </div>
                <img src="../src/assets/imgs/muestra.jpg" alt="Muestra Combate" className="mt-4 order-sm-2 order-3 col-sm-4 col-12 img-fluid border border-5 border-white" style={{ borderRadius: '53px' }} />
                <div id="prof" className="mt-4 pt-sm-0 pt-3 order-sm-3 order-2 col-5 col-sm-3 container-fluid border border-5 border-dark rounded-pill d-flex flex-column align-items-center">
                    <h3>Telefonos</h3>
                    <dl>
                        <dt>Celular</dt>
                        <dd>55 6177 0823</dd>
                        <dt>Telefono Fijo</dt>
                        <dd>55 8863 0894</dd>
                    </dl>
                </div>
                <img src="../src/assets/imgs/alumnos/b2.jpg" alt="Muestra Combate" className="mt-4 order-sm-4 order-5 col-sm-4 col-12 img-fluid border border-5 border-white" style={{ borderRadius: '53px' }} />
                <div id="prof" className="mt-4 ms-auto me-0 pt-sm-0 pt-3 order-sm-5 order-4 col-12 col-sm-7 container-fluid border border-5 border-dark d-flex flex-column align-items-center" style={{ borderRadius: '60px' }}>
                    <h3>¿Qué es el TaeKwonDo?</h3>
                    <p className="text-center fs-5">
                        El TaeKwonDo es un arte marcial de origen coreano que
                        destaca por su espectacularidad en
                        técnicas de pateo y su marcialidad. <br /><br />
                        La práctica del taekwondo promueve valores tales como
                        respeto, puntualidad, responsabilidad, perseverancia,
                        paciencia, entre otros. <br /><br />
                        Actualmente el taekwondo es uno de los deportes mas
                        practicados a nivel mundial y México es considerado
                        como un de los países con mejor rendimiento en competencias
                        internacionales.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default home