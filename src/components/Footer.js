import * as React from "react"
import contact from "../../data/profile.json"

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="uk-section uk-section-small">
                    <div className="uk-container uk-text-center">
                    <a href={`mailto: ${contact.contact_information.email}`} className="uk-h1 accent">{contact.contact_information.email}</a> <span className="uk-h1 accent">|</span> <a href={`tel: ${contact.contact_information.phone}`} className="uk-h1 accent">{contact.contact_information.phone}</a>
                        <p className="uk-text-uppercase editable">Exclusive sales & marketing by SERHANT. Equal Housing Opportunity. Legal. Fair Housing Notice</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}