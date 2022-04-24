import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"
import { graphql } from "gatsby"


export default function Neighborhood({ data }) {
    const seo = data.markdownRemark.frontmatter.search_engine_optimization

    return (
        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <div className="uk-animation-slide-bottom-small">
                <StaticImage
                    src="../images/Dorothy-Hong_Tribeca_12-2013_180-high-res.jpg"
                    className="uk-width-1-1"
                    alt="19 Park Place neighborhood"
                />
            </div>


            <div className="uk-section">
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Tribeca</h1>
                        <p className="editable">TriBeCa is an upscale residential neighborhood known for its cobblestone streets, post-industrial
                            vibe, and easy access to the Financial District and Lower Manhattan. Iris is situated around the
                            corner from City Hall Park and is moments from high-end dining and shopping options. One
                            World Trade Center, Brookfield Place, Rockefeller Park, and the Hudson River Greenway are all
                            close by. Nearby subway lines include the 1/2/3/4/5/A/C/E/R/W. </p>
                    </div>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container">
                    <div style={{ height: '500px', overflow: 'hidden' }}>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1nbOckeQVVLt4Pt1BpFGinktyDJMKvP0d&ehbc=2E312F" title="Google Map Iris Tribeca Neighborhood" frameBorder={0} height="480" style={{ width: '100%', border: '0', marginTop: '-70px', filter: 'hue-rotate(35deg)' }}></iframe>
                    </div>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-child-width-1-2@s uk-text-center uk-flex-middle" data-uk-grid>
                        <div>
                            <h2 className="accent uk-heading-small editable">Art & Culture</h2>
                            <p className="editable">Tribeca has quickly turned into a luxury
                                destination and encompasses districts of
                                historical significance that has transformed into
                                sophisticated and creative communities. This
                                neighborhood is near many attractions including
                                The One World Observatory, The Woolworth
                                Building, The Oculus and Brookfield Place, to
                                name a few.</p>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/art-and-culture.png"
                                alt="Iris Tribeca Art and Culture"
                            />
                        </div>
                    </div>
                    <div className="uk-child-width-1-2@s uk-text-center uk-flex-middle uk-flex-row-reverse" data-uk-grid>
                        <div>
                            <h2 className="accent uk-heading-small editable">Dining</h2>
                            <p className="editable">There is no shortage of incredible dining options
                                in Tribeca. There are local staples, relaxed bistros,
                                lively bars, and everything in-between – all just a
                                short distance away from Iris. Serafina, Gran
                                Morsi, CUT by Wolfgang Puck, and The Odeon are
                                just a handful of neighborhood favorites. </p>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/Dining.png"
                                alt="Iris Tribeca nearby restaurants"
                            />
                        </div>
                    </div>
                    <div className="uk-child-width-1-2@s uk-text-center uk-flex-middle" data-uk-grid>
                        <div>
                            <h2 className="accent uk-heading-small editable">Health & Wellness</h2>
                            <p className="editable">Tribeca is perfected situated Hudson River Park
                                offering easy access to greenspace. Equinox and
                                Orangetheory and a host of unique studios from
                                pilates to yoga to strength training are a fitness
                                lover’s dream.</p>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/health-and-fitness.png"
                                alt="Hudson River Park"
                            />
                        </div>
                    </div>
                    <div className="uk-child-width-1-2@s uk-text-center uk-flex-middle uk-flex-row-reverse" data-uk-grid>
                        <div>
                            <h2 className="accent uk-heading-small editable">Education</h2>
                            <p className="editable">While Pace University, Avenues, and FIT attract students
                                from around the world, Tribeca is close to some of the
                                most sought-after schools for all ages. Blue School,
                                Downtown Little School, and Hawthorne Country Day
                                School offer a multitude of opportunities for children and
                                are within a short distance for an ideal morning commute.</p>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/Education-Pace-University.png"
                                alt="Education Pace University"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark (fileAbsolutePath: {regex: "/neighborhood/"}) {
        frontmatter {
            search_engine_optimization {
                title_tag
                meta_description
            }
        }
    }
}
`