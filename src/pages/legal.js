import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

export default function Legal({ data }) {
    const seo = data.markdownRemark.frontmatter.search_engine_optimization

    return (
        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <div className="uk-section uk-section-large">
                <div className="uk-container">
                    <h1>Legal</h1>
                    <p>All measurements are approximate and subject to normal construction variances and tolerances. The complete offering terms are in an offering plan available from Sponsor. Sponsor reserves the right to make changes in accordance with the terms of the offering plan. File No: CD13-02841. Sponsor: ABN Realty LLC, 420 Madison Avenue, 8th Fl., New York, NY 10017. Exclusive Sales and Marketing by SERHANT. New Development. Equal Housing Opportunity.</p>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark (fileAbsolutePath: {regex: "/legal/"}) {
        frontmatter {
            search_engine_optimization {
                title_tag
                meta_description
            }
        }
    }
}
`