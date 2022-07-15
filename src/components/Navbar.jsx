import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <img src="../src/assets/imgs/logo.png" alt="Logo" width='65%'/>
                    </div>
                    <div className="col-8">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <NavLink className='nav-link text-dark' to='/'>
                                    <h2 className="text-center">ESCUELA TAEKWONDO</h2>
                                </NavLink>
                            </div>
                            <div className="row justify-content-center">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly" style={{width: '100%'}} >
                                        <li className="nav-item text-center">
                                            <NavLink className='nav-link fs-4' to='/profesor'>
                                                Profesor
                                            </NavLink>
                                        </li>
                                        <li className="nav-item text-center">
                                            <NavLink className='nav-link fs-4' to='/deportivo'>
                                                Deportivo y Horarios
                                            </NavLink>
                                        </li>
                                        <li className="nav-item text-center">
                                            <NavLink className='nav-link fs-4' to='/archivos'>
                                                Material/Examenes
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="../src/assets/imgs/bandera_ko.png" alt="Bandera KO" width='100%'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar