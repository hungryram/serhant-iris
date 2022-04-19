import * as React from "react"
import data from "../../data/appearance.json"
import menu from "../../data/menu.json"
import { Link } from "gatsby"
import * as Styles from "../styles/navbar.module.css"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { IconContext } from "@react-icons/all-files"
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO"
import { GrClose } from "@react-icons/all-files/gr/GrClose"
import contact from "../../data/profile.json"

export default function Navbar() {
    return (
        <>
            <div className="uk-padding uk-visible@l">
                <div className="uk-navbar-container uk-navbar-transparent">
                    <div className="uk-container uk-container-large">
                        <div data-uk-navbar>
                            <div className="uk-navbar-left">
                                <Link to="/" className="uk-navbar-item uk-logo">
                                    {data.branding.logo ?
                                        <img src={data.branding.logo} alt="Iris Tribeca" width="120" /> : <h1 className="uk-heading-large accent">Iris</h1>
                                    }
                                </Link>
                            </div>
                            <div className="uk-navbar-right">
                                <ul className={`uk-navbar-nav ${Styles.navbarLinks}`}>
                                    {menu.menu.map((node) => {
                                        return (
                                            <li>
                                                <Link to={node.link}>{node.name}</Link>
                                            </li>
                                        )
                                    })}
                                    <li className="uk-navbar-item">
                                        <a href="" target="_blank" rel="noopener">
                                            <IconContext.Provider value={{ size: '25px' }}>
                                                <AiOutlineInstagram />
                                            </IconContext.Provider>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <nav className="uk-navbar uk-container uk-hidden@l uk-box-shadow-small uk-padding-small">
                    <div className="uk-navbar-left">
                        <Link to="/" className="uk-navbar-item uk-logo">
                            {data.branding.logo ?
                                <img src={data.branding.logo} alt="Iris Tribeca" width="80" /> : <h1 className="uk-heading-large accent">Iris</h1>
                            }
                        </Link>
                    </div>
                    <div className="uk-navbar-right">
                        <a className="uk-navbar-toggle" data-uk-toggle="target: #offcanvas-flip">
                            <IconContext.Provider value={{ size: '30px' }}>
                                <CgMenuGridO />
                            </IconContext.Provider>
                        </a>
                    </div>
                </nav>
            </div>


            <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">

                    <IconContext.Provider 
                        value={{ size: '40px' }}
                    >
                        <GrClose className="uk-offcanvas-close"/>
                    </IconContext.Provider>

                    <Link to="/" className="uk-navbar-item uk-logo">
                        {data.branding.logo ?
                            <img src={data.branding.logo} alt="Iris Tribeca" width={110} data-uk-scrollspy="uk-animation-slide-bottom-small;repeat:true" /> : <h1 className="uk-heading-large accent">Iris</h1>
                        }
                    </Link>

                    <ul className="uk-nav uk-margin-auto-vertical uk-dark" data-uk-scrollspy="target: > li; cls: uk-animation-slide-left-small; delay: 100;repeat:true">
                        {menu.menu.map((node) => {
                            return (
                                <li>
                                    <Link to={node.link} className={`uk-h2 ${Styles.menuLink}`}>{node.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="uk-dark uk-padding-remove uk-list" data-uk-scrollspy="uk-animation-slide-bottom-small;repeat:true">
                        <li className={Styles.listContact}>
                            <a href={`mailto: ${contact.contact_information.email}`} className={Styles.menuContact}>{contact.contact_information.email}</a>
                        </li>
                        <li className={Styles.listContact}>
                            <a href={`tel: ${contact.contact_information.phone}`} className={Styles.menuContact}>{contact.contact_information.phone}</a>
                        </li>
                        <li className={Styles.listContact}></li>
                        <li>
                        <a href="" className={Styles.menuContact}>{contact.contact_information.address} {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}