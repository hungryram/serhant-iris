import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"


export default function Thanks() {
    return (
        <Layout>
            <Seo
                title="Thank you"
                description="Our team will review your inquiry and reach out as soon as possible"
            />
                <StaticImage
                    src="../../static/images/lviing-room-iris-tribeca.jpg"
                    alt="19 Park Place living room"
                    className="uk-width-1-1"
                />
            <div className="uk-section uk-section-large uk-text-center">
                <div className="uk-container">
                    <div className="editable">
                        <h1>Thank you for your request</h1>
                        <p>Our team will review your inquiry and reach out as soon as possible</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}