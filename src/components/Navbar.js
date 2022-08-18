import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.aboutTitle}</a>
                        </li>
                    </ul>
                    {/* <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" onChange={() => { props.colourMode('red') }} />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Red
                        </label>
                    </div>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" onChange={() => { props.colourMode('green') }} />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Green
                        </label>
                    </div> */}

                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                            onClick={props.colourMode} />
                        <label class="btn btn-outline-danger" for="btnradio1">Red</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
                            onClick={props.colourMode}/>
                        <label class="btn btn-outline-success" for="btnradio2">Green</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" 
                            onClick={props.colourMode}/>
                        <label class="btn btn-outline-warning" for="btnradio3">Yellow</label>
                    </div>
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" type="checkbox" id="modeButton" onChange={props.ToggleMode} />
                        <label className={`form-check-label mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="buttonMode" >
                            {props.mode} Mode </label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'TextUtils',
    aboutTitle: 'About'
};

export default Navbar;