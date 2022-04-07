import * as React from "react"
import data from "../../data/appearance.json"
import menu from "../../data/menu.json"
import { Link } from "gatsby"
import * as Styles from "../styles/navbar.module.css"

export default function Navbar() {
    return (
        <div>
            <div className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-container uk-container-large">
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <Link to="/" className="uk-navbar-item uk-logo">
                                {data.branding.logo ?
                                    <img src={data.branding.logo} alt="Iris Tribeca" width="100" /> : <h1 className="uk-heading-large accent">Iris</h1>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}