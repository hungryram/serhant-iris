import * as React from "react"
import { graphql, Link } from "gatsby"
import Hero from "../images/park-place-hero.jpg"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import homeSeo from "../../data/seo.json"

export default function Building({ data }) {

    const background = {
        backgroundImage: 'url(' + Hero + ')'
    };

    const script = require("../scripts/script")

    return (
        <Layout>
            <Seo
                title={homeSeo.title_tag}
                description={homeSeo.meta_description}
            />


{data.markdownRemark.frontmatter.video &&
    <div className="uk-modal-full uk-open splash-video" data-uk-modal style={{ display: 'block', overflow: 'hidden' }}>
    <div>
        <div>
            <div>
              <video src={data.markdownRemark.frontmatter.video} autoplay muted playsinline data-uk-cover></video>
            </div>
            <div className="enter">
              <button class="uk-button uk-button-primary uk-modal-close" type="button">Enter Site</button>
            </div>
        </div>
    </div>
  </div>
}


            <div className="uk-position-relative">
                <StaticImage
                    src="../images/park-place-hero.jpg"
                    className="bg uk-width-1-1"
                />
                <div className="uk-section uk-section-large uk-position-relative hero-section">
                    <div className="uk-container uk-container-large uk-animation-slide-bottom-small">
                        <div className="uk-flex uk-flex-left">
                            <div className="uk-width-2xlarge uk-text-center">
                                <p className="uk-text-uppercase editable">Welcome to</p>
                                <h1 className="uk-heading-medium uk-margin-remove editable">Tribecas Newest<br />Luxury Tower</h1>
                                <p className="editable">STUDIO - 3 BEDROOMS STARTING AT $1,150,000</p>
                                <Link to="/contact" className="uk-button uk-button-primary">Schedule a Showing</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-large uk-position-relative" style={{ backgroundColor: "rgb(255 255 255 / 87%)" }}>
                    <div className="uk-container uk-container-large">
                        <div className="uk-flex uk-flex-center">
                            <div className="uk-width-2xlarge uk-text-center">
                                <p className="editable">SCULPTED CURVES AND DAZZLING LOWER MANHATTAN VIEWS COALESCE AT IRIS TRIBECA, A SOARING RESIDENTIAL TOWER WHERE LIGHT AND FRESH AIR SUFFUSE TWENTY-FOUR STUNNING HALF AND FULL-FLOOR HOMES</p>
                                <p className="editable">Brought to life by renowned architect Ismael Leyva Architects, IRIS TriBeCa offers every resident private outdoor space in one of the city's trendiest neighborhoods.</p>
                                <Link to="/availability" className="uk-button uk-button-secondary">Explore the residences</Link>
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

export const query = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "/index/"}) {
      frontmatter {
        title
        video
      }
    }
  }
  
`