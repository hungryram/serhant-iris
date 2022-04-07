import * as React from "react"
import { Link } from "gatsby"
import Hero from "../images/park-place-hero.jpg"
import Layout from "../components/Layout";

export default function Building() {

    const background = {
        backgroundImage: 'url(' + Hero + ')'
    };

    return (
        <Layout>
            <div style={background}>
                <div className="uk-section uk-section-large uk-position-relative hero-section">
                    <div className="uk-container uk-container-large">
                        <div className="uk-flex uk-flex-left">
                            <div className="uk-width-2xlarge uk-text-center">
                                <p className="uk-text-uppercase">Welcome to</p>
                                <h1 className="uk-heading-medium uk-margin-remove">Tribecas Newest<br />Luxury Tower</h1>
                                <p>STUDIO - 3 BEDROOMS STARTING AT $1.325M</p>
                                <Link to="/" className="uk-button uk-button-primary">Schedule a Showing</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-large uk-position-relative" style={{ backgroundColor: "rgb(255 255 255 / 87%)" }}>
                    <div className="uk-container uk-container-large">
                        <div className="uk-flex uk-flex-center">
                            <div className="uk-width-2xlarge uk-text-center">
                                <p className="uk-text-large editable">SCULPTED CURVES AND DAZZLING LOWER MANHATTAN VIEWS COALESCE AT IRIS TRIBECA, A SOARING RESIDENTIAL TOWER WHERE LIGHT AND FRESH AIR SUFFUSE TWENTY-FOUR STUNNING HALF AND FULL-FLOOR HOMES</p>
                                <p className="editable">Brought to life by renowned architect Ismael Leyva Architects, IRIS TriBeCa offers every resident private outdoor space in one of the city's trendiest neighborhoods.</p>
                                <Link to="/" className="uk-button uk-button-secondary">Explore the residences</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "300px 0" }}>

                </div>
            </div>
        </Layout>
    )
}