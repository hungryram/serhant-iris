import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as Styles from "../styles/team.module.css"
import showdown from "showdown"
import Seo from "../components/Seo"

export default function Team({ data }) {
    const content = data.markdownRemark.frontmatter
    const converter = new showdown.Converter();
    const seo = data.markdownRemark.frontmatter.search_engine_optimization

    return (
        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <div className="uk-section uk-animation-slide-bottom-small">
                <div className="uk-container">
                    <h1 className="accent uk-heading-medium uk-text-center">The Team</h1>
                    <div className="uk-margin-large-top">
                        <div className="uk-child-width-1-1" data-uk-grid>
                            {content.team.map((node) => {
                                return (
                                    <div>
                                        <div className={`uk-card uk-card-body uk-text-center ${Styles.cardDefault}`}>
                                            <h2 className="uk-h1 accent">{node.heading}</h2>
                                            <p className="uk-text-uppercase">{node.subheading}</p>
                                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(node.body) }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const TeamData = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "/team/"}) {
      frontmatter {
        team {
          body
          heading
          subheading
        }
        search_engine_optimization {
            title_tag
            meta_description
        }
      }
    }
  }
`