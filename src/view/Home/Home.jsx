import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

/** Import Componen */
import Card from './Card'
/** Import styles */
import logo from './logo.jpg';
import SEO from './styles/styles.module.css'

const Home = () => (
    <Fragment>
        <Navbar />

        <main className="container-fluid">
            <SectionH />

            <section className={`row justify-content-center SEO-alternative-b`}>
                <Card {...cardInfo._1} />
                <Card {...cardInfo._2} />
                <Card {...cardInfo._3} />
            </section>

            <SectionF className={`row ${SEO.contSectionF}`} />   
            <p>
                Visita nuestra Tienda: 
            </p>
            <a href='https://server.seosemapi.com/' >
                SEOSEMAPI Store
            </a> 
        </main>

        <footer className={SEO.footer}>
            Seosemapi C.A. @2019 Todos los derechos reservados
        </footer>
    </Fragment>
);

const cardInfo = {
    _1: {
        about: `Metricas`,
        icon: `fa-bar-chart`,
        iconColor: `#efd5c8`,
        iconAnimation: ``,
        title: `Midelo todo`,
        description: `Descubre cuanto crece tu web, obten herramientas que te haran crecer observando cada detalle`
    },
    _2: {
        about: `Diseño`,
        icon: `fa-heart`,
        iconColor: `#c12d2d`,
        iconAnimation: `pulse`,
        title: `Pensado para ti`,
        description: `Ofrecemos un diseño sencillo y poderoso para que puedas aprovechar al máximo y de la forma más sencilla`
    },
    _3: {
        about: `Seguridad`,
        icon: `fa-shield`,
        iconColor: `#3b5998`,
        iconAnimation: ``,
        title: `Eres prioridad`,
        description: `Antes que nada pensamos en la privacidad de tus datos y en la seguridad de quienes confian en nosotros`
    }
}

const Navbar = () => (
    <nav className={`${SEO.navbar} SEO-blue-b`}>
        <ul>
            <li><img src="/favicon.ico" alt="" /></li>
            <li><Link to="/entra"><i className="fa fa-sign-in"></i><span>Ingresar</span></Link></li>
        </ul>
    </nav>
)

const SectionH = () => (
    <section className="row justify-content-center">
        <div className="SEO-text-center">
            <div className="mt-6">
                <h1>Bienvenido a Seosemapi</h1>
                <div className={`${SEO.contLogo}`}>
                    <img src={logo} alt="delson" />
                </div>
            </div>
            <div className={`SEO-alternative-light-b ${SEO.contDescription}`}>
                <p>Somos la <strong style={{ color: '#3b5998', fontWeight: 700 }}>Mejor Alternativa</strong> para estructurar tu contenido con palabras clave y de la manera más fácil llevar <strong style={{ color: '#3b5998', fontWeight: 700 }}>SEO</strong> de tu sitio web a <strong style={{ color: '#3b5998', fontWeight: 700 }}>Otro nivel.</strong></p>
            </div>
        </div>
    </section>
)

const SectionF = () => (
    <div className={`p-5`}>
        <div className="container-fluid ">
            <div className="SEO-card SEO-card-tb my-5" >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div className="text-left">
                        <h4 style={{ color: 'white' }}><i className="fa fa-chart-pie"></i>Marketing</h4>
                        <h3 className="SEO-title-tb"><strong>El SEO también es <span style={{ color: '#3b5998', fontWeight: 700 }} >Marketing</span></strong></h3>
                        <p className="SEO-text-tb">Deja que tus clientes te encuentren al aparecer de primero en los buscadores más famosas del mundo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home;