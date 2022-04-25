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


    return (
        <>
            <Seo
                title={homeSeo.title_tag}
                description={homeSeo.meta_description}
            />


            <div className="uk-modal-full uk-open splash-video" data-uk-modal style={{ display: 'block', overflow: 'hidden' }}>
                <div>
                    <div>
                        <div>
                            <video src={data.markdownRemark.frontmatter.video} autoplay muted playsinline data-uk-cover></video>
                        </div>
                        <div className="enter">
                            <Link className="uk-button uk-button-primary" to="/building">Enter Site</Link>
                        </div>
                    </div>
                </div>
            </div>
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