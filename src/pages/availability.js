import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
import Slide from "../images/image.jpg"
import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf"
import Hero from "../images/park-place-background.jpg"

export default function Residences({ data }) {
    const content = data.markdownRemark.frontmatter

    const background = {
        backgroundImage: 'url(' + Hero + ')',
        backgroundPosition: 'top',
    };

    return (

        <Layout>
            <div style={background}>
                <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <div className="uk-section uk-animation-slide-bottom-small" style={{ backgroundColor: "rgb(255 255 255 / 90%)" }}>
                <div className="uk-section uk-text-center">
                    <div className="uk-container">
                        <h1 className="accent uk-heading-large">Availability</h1>
                        <a href="" className="uk-h3 accent text-underline">Download PDF</a>
                    </div>
                </div>
                <div className="uk-container">
                    <div className="uk-overflow-auto uk-visible@m">
                        <table className="uk-table uk-table-large uk-table-middle uk-text-center">
                            <thead>
                                <tr>
                                    <th>Residence</th>
                                    <th>BED / BATH</th>
                                    <th>INT / EXT SF</th>
                                    <th>Exposure</th>
                                    <th>Price</th>
                                    <th>CC</th>
                                    <th>RE TAX</th>
                                    <th>Status</th>
                                    <th>Listing</th>
                                    <th>Floor plan</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    {content.availability.map((node) => {
                                        return (
                                            <>
                                                {node.name ? <td>{node.name}</td> : <td>—</td>}

                                                {node.bedbath ? <td>{node.bedbath}</td> : <td>—</td>}

                                                {node.int_ext_sq ? <td>{node.int_ext_sq}</td> : <td>—</td>}

                                                {node.exposure ? <td>{node.exposure}</td> : <td>—</td>}

                                                {node.price ? <td>{node.price}</td> : <td>—</td>}

                                                {node.common_charges_est_ ? <td>{node.common_charges_est_}</td> : <td>—</td>}

                                                {node.real_estate_taxes_est_ ? <td>{node.real_estate_taxes_est_}</td> : <td>—</td>}

                                                {node.status ? <td>{node.status}</td> : <td>—</td>}

                                                {node.listing ? <td><a href={node.listing} className="uk-link-reset" target="_blank" rel="noopener">VIEW</a></td> : <td>—</td>}

                                                {node.floor_plan ? <td><a href={node.floor_plan} className="uk-link-reset" target="_blank" rel="noopener"><AiOutlineFilePdf /></a></td> : <td>—</td>}
                                            </>
                                        )
                                    })}
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className="uk-hidden@m">
                        <div className="uk-child-width-1-1" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-default uk-width-1-2@m">
                                    <div className="uk-card-header">
                                        <div className="data-uk-grid-small uk-flex-middle" data-uk-grid>
                                            <div className="uk-width-expand">
                                                <h3 className="uk-card-title uk-margin-remove-bottom"></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-card-body">
                                        <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">BED / BATH</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.bedbath ? <p className="uk-margin-small-top">{node.bedbath}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">INT / EXT SF</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.int_ext_sq ? <p className="uk-margin-small-top">{node.int_ext_sq}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">Exposure</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.exposure ? <p className="uk-margin-small-top">{node.exposure}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">Price</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.price ? <p className="uk-margin-small-top">{node.price}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">CC</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.common_charges_est_ ? <p className="uk-margin-small-top">{node.common_charges_est_}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">RE TAX</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.real_estate_taxes_est_ ? <p className="uk-margin-small-top">{node.real_estate_taxes_est_}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">Status</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.status ? <p className="uk-margin-small-top">{node.status}</p> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <h6 className="uk-text-uppercase uk-margin-remove">Floor plan</h6>
                                                {content.availability.map((node) => {
                                                    return (
                                                        <>
                                                            {node.bedbath ? <a href={node.floor_plan} target="_blank" rel="noopener" className="uk-margin-small-top">VIEW</a> : <p>—</p>}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-card-footer">
                                        {content.availability.map((node) => {
                                            return (
                                                <>
                                                    {node.listing ? <a href={node.listing} target="_blank" rel="noopener" className="uk-margin-small-top">VIEW</a> : <p>—</p>}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </Layout>
    )
}

export const Avail = graphql`
query MyQuery {
    markdownRemark(fileAbsolutePath: {regex: "/availability/"}) {
      frontmatter {
        title
        availability {
          bedbath
          common_charges_est_
          floor_plan
          exposure
          int_ext_sq
          listing
          name
          price
          real_estate_taxes_est_
          status
        }
        search_engine_optimization {
            title_tag
            meta_description
        }
      }
    }
  }
  
  
`