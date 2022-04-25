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

    const [ fade, setFade ] = React.useState(false)
    const [ renderVideo, setRenderVideo ] = React.useState(true)
    const [ renderPage, setRenderPage ] = React.useState(false)

    const enterSite = () => {
        setFade(true)
        setRenderPage(true)
        setTimeout(function(){
            setRenderVideo(false)       
        }, 1800);
    }

    React.useEffect(() => {
        setTimeout(function(){
            enterSite()
        }, 8000);
    }, [])




    return (
        <>
            <Seo
                title={homeSeo.title_tag}
                description={homeSeo.meta_description}
            />

            {renderVideo ?
                <div className={`videoOverlay ${fade ? 'fadeOut' : ''}`}>
                    <div>
                        <div>
                            <video src={data.markdownRemark.frontmatter.video} autoPlay muted playsInline data-uk-cover></video>
                        </div>
                        <div className="enter">
                            <button className="uk-button uk-button-primary" onClick={() => enterSite()}>Enter Site</button>
                        </div>
                    </div>
                </div>
            : null }
            { renderPage ?
                <Layout>
                    <div className="uk-position-relative">
                        <StaticImage
                            src="../images/hero-19-place-place-ny.jpg"
                            className="bg uk-width-1-1"
                        />
                        <div className="uk-section uk-section-large uk-position-relative hero-section">
                            <div className="uk-container uk-container-large uk-animation-slide-bottom-small">
                                <div className="uk-flex uk-flex-left">
                                    <div className="uk-width-2xlarge uk-text-center" uk-parallax="start: 0%; end: 10%; y: -200; easing: 0;opacity: 1,0; y: -100">
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
            : null }
        </>
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