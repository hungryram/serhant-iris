import { Link } from "gatsby"
import * as React from "react"
import contact from "../../data/profile.json"

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="uk-section uk-section-small">
                    <div className="uk-container uk-text-center">
                    <a href={`mailto: ${contact.contact_information.email}`} className="uk-h3 accent">{contact.contact_information.email}</a> <span className="uk-h3 accent">|</span> <a href={`tel: ${contact.contact_information.phone}`} className="uk-h3 accent">{contact.contact_information.phone}</a>
                        <p className="uk-text-uppercase editable"><small>
                        Exclusive sales & marketing by SERHANT. New Development.<br /> Equal Housing Opportunity. <Link to="/legal/" className="uk-link-reset">Legal</Link>
                        </small></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}