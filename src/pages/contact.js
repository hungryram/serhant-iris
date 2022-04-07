import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../images/park-place-hero.jpg"
import * as Styles from "../styles/contact.module.css"
import contact from "../../data/profile.json"

export default function Contact() {

    const background = {
        backgroundImage: 'url(' + Hero + ')',
        backgroundPosition: 'top'
    };

    return (
        <Layout>
            <div style={background}>
                <div style={{ paddingTop: "40px", paddingBottom: "50px" }}>
                    <div className="uk-child-width-1-2@m uk-flex-middle" data-uk-grid>
                        <div>
                            <div className={`uk-card uk-card-default uk-card-body ${Styles.radius}`}>
                                <div className="uk-child-width-1-2@s" data-uk-grid>
                                    <div>
                                    <h1 className="uk-heading-small accent uk-text-uppercase editable">Contact us</h1>
                                    </div>
                                    <div>
                                        <a href={`mailto: ${contact.contact_information.email}`} className="uk-link-reset uk-text-uppercase">{contact.contact_information.email}</a> | <a href={`tel: ${contact.contact_information.phone}`} className="uk-link-reset uk-text-uppercase">{contact.contact_information.phone}</a><br/>
                                        <a href="" className="uk-link-reset uk-text-uppercase">{contact.contact_information.address} {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code}</a>
                                    </div>
                                </div>
                                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small inquire__form" data-uk-grid action="/thank-you">
                                    <input name="bot-field" type="hidden" />
                                    <input type="hidden" name="Subject" value="The Westly Inquiry Form" />
                                    <div className="uk-width-1-1">
                                        <p className="uk-margin-remove">NAME</p>
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="First Name" id="uk-input-fname" required />
                                        <label for="uk-input-fname" className="uk-text-default">First name</label>
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Last Name" id="uk-input-lname" />
                                        <label for="uk-input-lname" className="uk-text-default">Last name</label>

                                    </div>
                                    <div className="uk-width-1-1">
                                        <p>EMAIL*</p>
                                    </div>
                                    <div className="uk-width-1-1@s">
                                        <input className="uk-input" type="email" id="input-email" name="Email" required />
                                    </div>
                                    <div className="uk-width-1-3@s uk-margin-medium-top">
                                        <div className="uk-margin">
                                            <div><p>Are you a broker?</p></div>
                                            <div className="uk-form-controls">
                                                <label><input className="uk-radio" type="radio" value="Yes" name="Are you a broker" /> Yes</label><br />
                                                <label><input className="uk-radio" type="radio" value="No" name="Are you a broker" /> No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-3@s uk-margin-medium-top">
                                        <div className="uk-margin">
                                            <div><p>I am interested in*</p></div>
                                            <div className="uk-form-controls">
                                                <label><input className="uk-radio" type="radio" value="2 Bedrooms" name="Interested in" /> 2 Bedrooms</label><br />
                                                <label><input className="uk-radio" type="radio" value="3 Bedrooms" name="Interested in" /> 3 Bedrooms</label><br />
                                                <label><input className="uk-radio" type="radio" value="4 Bedrooms" name="Interested in" /> 4 Bedrooms</label><br />
                                                <label><input className="uk-radio" type="radio" value="5 Bedrooms" name="Interested in" /> 5 Bedrooms</label><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-3@s uk-margin-medium-top">
                                        <div className="uk-margin">
                                            <div><p>Price Range*</p></div>
                                            <div className="uk-form-controls">
                                                <label><input className="uk-radio" type="radio" value="$2M to $3M" name="Price Range" /> $2M to $3M</label><br />
                                                <label><input className="uk-radio" type="radio" value="$2M to $3M" name="Price Range" /> $2M to $3M</label><br />
                                                <label><input className="uk-radio" type="radio" value="$5M to $7M" name="Price Range" /> $5M to $7M</label><br />
                                                <label><input className="uk-radio" type="radio" value="$7M+" name="Price Range" /> $7M+</label><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <textarea name="message" id="" cols="30" rows="3" className="uk-textarea" placeholder="Message"></textarea>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <button className="uk-button uk-button-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}