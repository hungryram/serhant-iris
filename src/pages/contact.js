import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../images/park-place-hero.jpg"
import * as Styles from "../styles/contact.module.css"
import contact from "../../data/profile.json"
import Seo from "../components/Seo"
import { graphql } from "gatsby"


export default function Contact({ data }) {

    const background = {
        backgroundImage: 'url(' + Hero + ')',
        backgroundPosition: 'top'
    };

    const seo = data.markdownRemark.frontmatter.search_engine_optimization

    return (
        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <div style={background}>
                <div className="uk-section">
                    <div className="uk-container uk-container-large">
                        <div style={{ paddingTop: "40px", paddingBottom: "50px" }}>
                            <div className="uk-flex-middle uk-animation-slide-bottom-small" data-uk-grid>
                                <div className="uk-width-3-5@m">
                                    <div className={`uk-card uk-card-default uk-card-body ${Styles.radius}`}>
                                        <div className="uk-child-width-1-2@m uk-grid-small" data-uk-grid>
                                            <div>
                                                <h1 className="uk-heading-small accent uk-text-uppercase editable">Contact us</h1>
                                            </div>
                                            <div>
                                                <a href={`mailto: ${contact.contact_information.email}`} className="uk-link-reset uk-text-uppercase">{contact.contact_information.email}</a> | <a href={`tel: ${contact.contact_information.phone}`} className="uk-link-reset uk-text-uppercase">{contact.contact_information.phone}</a><br />
                                                <a href="" className="uk-link-reset uk-text-uppercase">{contact.contact_information.address} {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code}</a>
                                            </div>
                                        </div>
                                        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small inquire__form" data-uk-grid action="/thank-you">
                                            <input name="bot-field" type="hidden" />
                                            <input type="hidden" name="form-name" value="contact" />
                                            <input type="hidden" name="Subject" value="Iris Tribeca Inquiry Form" />
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
                                                        <label><input className="uk-radio" type="radio" value="Studio" name="Interested in" /> Studio</label><br />
                                                        <label><input className="uk-radio" type="radio" value="1 Bedroom" name="Interested in" /> 1 Bedroom</label><br />
                                                        <label><input className="uk-radio" type="radio" value="2 Bedrooms" name="Interested in" /> 2 Bedroom</label><br />
                                                        <label><input className="uk-radio" type="radio" value="3 Bedrooms" name="Interested in" /> 3 Bedrooms</label><br />
                                                        <label><input className="uk-radio" type="radio" value="Penthouse" name="Interested in" /> Penthouse</label><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="uk-width-1-3@s uk-margin-medium-top">
                                                <div className="uk-margin">
                                                    <div><p>Price Range*</p></div>
                                                    <div className="uk-form-controls">
                                                        <label><input className="uk-radio" type="radio" value="$1,150,000 - $1,500,000" name="Price Range" /> $1,150,000 - $1,500,000</label><br />
                                                        <label><input className="uk-radio" type="radio" value="$1,500,000 - $2,000,000" name="Price Range" /> $1,500,000 - $2,000,000</label><br />
                                                        <label><input className="uk-radio" type="radio" value="$2,000,000 - $2,500,000" name="Price Range" /> $2,000,000 - $2,500,000</label><br />
                                                        <label><input className="uk-radio" type="radio" value="$3,000,000 +" name="Price Range" /> $3,000,000 +</label><br />
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
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark (fileAbsolutePath: {regex: "/contact/"}) {
        frontmatter {
            search_engine_optimization {
                title_tag
                meta_description
            }
        }
    }
}
`