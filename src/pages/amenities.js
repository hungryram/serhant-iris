import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Slide from "../images/19_Park_place_garden_0523_opt.jpg"
import { StaticImage } from "gatsby-plugin-image"

export default function Amenities({ data }) {
    const content = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className="uk-animation-slide-bottom-small">
                <StaticImage
                    src="../images/19_Park_place_garden_0523_opt.jpg"
                    alt="19 Park Place Garden"
                    className="uk-width-1-1"
                />
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Amenities</h1>
                        <p className="editable">Iris Tribeca greets residents with heated sidewalks and an atrium-style lobby
                            that dazzles and soothes with a 19’ vein-cut limestone waterfall, hand-
                            crafted blown glass chandelier that dangles from soaring double-height
                            ceilings, custom corten steel sculptures, rich oak-paneled walls, and poured
                            terrazzo flooring. Thoughtful lifestyle amenities like a fitness center, private
                            lounge, children’s area, and lush courtyard escape offer residents flexible
                            spaces to work, play, and entertain. Private storage is available for purchase.</p>
                    </div>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow>

                        <ul className="uk-slideshow-items" data-uk-lightbox>
                        {content.gallery.map((node) => {
                                return (
                                    <li>
                                        <Link to={node.photo}>
                                            <img src= {node.photo} alt="" data-uk-cover />
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <a className="uk-position-center-left uk-position-small uk-slidenav-large" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-slidenav-large" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "/amenities/"}) {
      frontmatter {
        gallery {
			photo
        }
      }
    }
  }
`