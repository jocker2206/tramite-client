import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Show from '../components/show';
import { Button } from 'semantic-ui-react'

export default class Navbar extends Component {

    logout = async () => {
        await Cookies.remove('convocatoria_auth');
        // history.go('/');
        alert('remove');
    }

    render() {


        let { app, isLoggin } = this.props;

        return (
            <nav className={ `navbar navbar-expand-md navbar-dark fixed-top` }>
                <a className="navbar-brand" href="#">
                    <img src={ app.icon || '/img/logo.png' } alt="Logo" className="logo" />
                    { app.name || 'Convocatorias' }
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">


                    </ul>
                    <div className="form-inline mt-2 mt-md-0">




                        <Link href="/">
                            <a className="btn mr-2">
                                Consulta
                            </a>

                        </Link>


                        <button className="btn btn-outline ml-3"
                            onClick={ (e) => Router.push('/register') }
                        >
                            <i className="fas fa-file-word"></i>  Trámite
                        </button>


                    </div>
                </div>
            </nav >
        );
    }

}