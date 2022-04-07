import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as Styles from "../styles/team.module.css"

export default function Team({ data }) {
    const content = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className="uk-section">
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
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere architecto, atque voluptate alias, velit est autem voluptates adipisci error neque nesciunt culpa aut. Aspernatur ut nam dicta quis vero facilis.</p>
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
      }
    }
  }
`