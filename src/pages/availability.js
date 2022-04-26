import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf"
import { StaticImage } from "gatsby-plugin-image"
import { IconContext } from "@react-icons/all-files"
import * as Styles from "../styles/avail.module.css"
import Seo from "../components/Seo"

export default function Availability({ data }) {
    const studios = data.markdownRemark.frontmatter.studio
    const oneBed = data.markdownRemark.frontmatter.one_bedroom
    const twoBed = data.markdownRemark.frontmatter.two_bedroom
    const threeBed = data.markdownRemark.frontmatter.three_bedroom
    const seo = data.markdownRemark.frontmatter.search_engine_optimization
    return (

        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <div className="uk-position-relative">
                <StaticImage
                    src="../images/availability-19-park-place.jpg"
                    className="bg uk-width-1-1"
                    alt="Iris Tribeca"
                />
                <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                    <div className="uk-section uk-animation-slide-bottom-small" style={{ backgroundColor: "rgb(255 255 255 / 90%)" }}>
                        <div className="uk-section uk-text-center">
                            <div className="uk-container">
                                <h1 className="accent uk-heading-large">Availability</h1>
                                <a href="/images/IRIS-availability.pdf" target="_blank" rel="noopener noreferrer" className="uk-h3 accent text-underline">Download PDF</a>
                            </div>
                        </div>
                        <div className="uk-container">
                            <div className="uk-overflow-auto uk-visible@m">
                                <table className={`uk-table uk-table-large uk-table-middle uk-text-center ${Styles.tableContainer}`}>
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

                                    {studios.hide_category !== true &&
                                        <>
                                            <thead className={Styles.availHead}>
                                                <tr>
                                                    <th colSpan={10}>
                                                        <h2 className="uk-h3">Studio</h2>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {studios.availability.map((node) => {
                                                    return (
                                                        <>
                                                            <tr>

                                                                {node.name ? <td>{node.name}</td> : <td>—</td>}

                                                                {node.bedbath ? <td>{node.bedbath}</td> : <td>—</td>}

                                                                {node.int_ext_sq ? <td>{node.int_ext_sq}</td> : <td>—</td>}

                                                                {node.exposure ? <td>{node.exposure}</td> : <td>—</td>}

                                                                {node.price ? <td>{node.price}</td> : <td>—</td>}

                                                                {node.common_charges_est_ ? <td>{node.common_charges_est_}</td> : <td>—</td>}

                                                                {node.real_estate_taxes_est_ ? <td>{node.real_estate_taxes_est_}</td> : <td>—</td>}

                                                                {node.status ? <td>{node.status}</td> : <td>—</td>}

                                                                {node.listing ? <td><a href={node.listing} className="uk-link-reset" target="_blank" rel="noopener">VIEW</a></td> : <td>—</td>}

                                                                {node.floor_plan ? <td><a href={node.floor_plan} className="uk-link-reset" target="_blank" rel="noopener">
                                                                    <IconContext.Provider value={{ size: '20px' }}>
                                                                        <AiOutlineFilePdf />
                                                                    </IconContext.Provider>
                                                                </a></td> : <td>—</td>}
                                                            </tr>

                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </>
                                    }


                                    {oneBed.hide_category !== true &&
                                        <>
                                            <thead className={Styles.availHead}>
                                                <tr>
                                                    <th colSpan={10}>
                                                        <h2 className="uk-h3">1 Bedroom</h2>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {oneBed.availability.map((node) => {
                                                    return (
                                                        <>
                                                            <tr>

                                                                {node.name ? <td>{node.name}</td> : <td>—</td>}

                                                                {node.bedbath ? <td>{node.bedbath}</td> : <td>—</td>}

                                                                {node.int_ext_sq ? <td>{node.int_ext_sq}</td> : <td>—</td>}

                                                                {node.exposure ? <td>{node.exposure}</td> : <td>—</td>}

                                                                {node.price ? <td>{node.price}</td> : <td>—</td>}

                                                                {node.common_charges_est_ ? <td>{node.common_charges_est_}</td> : <td>—</td>}

                                                                {node.real_estate_taxes_est_ ? <td>{node.real_estate_taxes_est_}</td> : <td>—</td>}

                                                                {node.status ? <td>{node.status}</td> : <td>—</td>}

                                                                {node.listing ? <td><a href={node.listing} className="uk-link-reset" target="_blank" rel="noopener">VIEW</a></td> : <td>—</td>}

                                                                {node.floor_plan ? <td><a href={node.floor_plan} className="uk-link-reset" target="_blank" rel="noopener">
                                                                    <IconContext.Provider value={{ size: '20px' }}>
                                                                        <AiOutlineFilePdf />
                                                                    </IconContext.Provider>
                                                                </a></td> : <td>—</td>}
                                                            </tr>

                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </>
                                    }
                                    {twoBed.hide_category !== true &&
                                        <>
                                            <thead className={Styles.availHead}>
                                                <tr>
                                                    <th colSpan={10}>
                                                        <h2 className="uk-h3">2 Bedrooms</h2>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {twoBed.availability.map((node) => {
                                                    return (
                                                        <>
                                                            <tr>

                                                                {node.name ? <td>{node.name}</td> : <td>—</td>}

                                                                {node.bedbath ? <td>{node.bedbath}</td> : <td>—</td>}

                                                                {node.int_ext_sq ? <td>{node.int_ext_sq}</td> : <td>—</td>}

                                                                {node.exposure ? <td>{node.exposure}</td> : <td>—</td>}

                                                                {node.price ? <td>{node.price}</td> : <td>—</td>}

                                                                {node.common_charges_est_ ? <td>{node.common_charges_est_}</td> : <td>—</td>}

                                                                {node.real_estate_taxes_est_ ? <td>{node.real_estate_taxes_est_}</td> : <td>—</td>}

                                                                {node.status ? <td>{node.status}</td> : <td>—</td>}

                                                                {node.listing ? <td><a href={node.listing} className="uk-link-reset" target="_blank" rel="noopener">VIEW</a></td> : <td>—</td>}

                                                                {node.floor_plan ? <td><a href={node.floor_plan} className="uk-link-reset" target="_blank" rel="noopener">
                                                                    <IconContext.Provider value={{ size: '20px' }}>
                                                                        <AiOutlineFilePdf />
                                                                    </IconContext.Provider>
                                                                </a></td> : <td>—</td>}
                                                            </tr>

                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </>
                                    }
                                    {threeBed.hide_category !== true &&
                                        <>
                                            <thead className={Styles.availHead}>
                                                <tr>
                                                    <th colSpan={10}>
                                                        <h2 className="uk-h3">3 Bedrooms</h2>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {threeBed.availability.map((node) => {
                                                    return (
                                                        <>
                                                            <tr>

                                                                {node.name ? <td>{node.name}</td> : <td>—</td>}

                                                                {node.bedbath ? <td>{node.bedbath}</td> : <td>—</td>}

                                                                {node.int_ext_sq ? <td>{node.int_ext_sq}</td> : <td>—</td>}

                                                                {node.exposure ? <td>{node.exposure}</td> : <td>—</td>}

                                                                {node.price ? <td>{node.price}</td> : <td>—</td>}

                                                                {node.common_charges_est_ ? <td>{node.common_charges_est_}</td> : <td>—</td>}

                                                                {node.real_estate_taxes_est_ ? <td>{node.real_estate_taxes_est_}</td> : <td>—</td>}

                                                                {node.status ? <td>{node.status}</td> : <td>—</td>}

                                                                {node.listing ? <td><a href={node.listing} className="uk-link-reset" target="_blank" rel="noopener">VIEW</a></td> : <td>—</td>}

                                                                {node.floor_plan ? <td><a href={node.floor_plan} className="uk-link-reset" target="_blank" rel="noopener">
                                                                    <IconContext.Provider value={{ size: '20px' }}>
                                                                        <AiOutlineFilePdf />
                                                                    </IconContext.Provider>
                                                                </a></td> : <td>—</td>}
                                                            </tr>

                                                        </>

                                                    )
                                                })}
                                            </tbody>
                                        </>
                                    }
                                </table>
                            </div>
                            <div className="uk-hidden@m">
                                {studios.hide_category !== true &&
                                    <>
                                        {studios.availability.map((node) => {
                                            return (
                                                <>
                                                    <div className="uk-child-width-1-1@s" data-uk-grid>
                                                        <div>
                                                            <div className="uk-card uk-card-default uk-width-1-2@m">
                                                                <div className="uk-card-header">
                                                                    <div className="data-uk-grid-small uk-flex-middle" data-uk-grid>
                                                                        <div className="uk-width-expand">
                                                                            {node.name ? <h3 className="uk-card-title uk-margin-remove-bottom accent">{node.name}</h3> : <p>—</p>}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-card-body">
                                                                    <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">BED / BATH</h6>
                                                                            {node.bedbath ? <p className="uk-margin-small-top">{node.bedbath}</p> : <p>—</p>}
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">INT / EXT SF</h6>
                                                                            {node.int_ext_sq ? <p className="uk-margin-small-top">{node.int_ext_sq}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Exposure</h6>
                                                                            {node.exposure ? <p className="uk-margin-small-top">{node.exposure}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Price</h6>
                                                                            {node.price ? <p className="uk-margin-small-top">{node.price}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">CC</h6>
                                                                            {node.common_charges_est_ ? <p className="uk-margin-small-top">{node.common_charges_est_}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">RE TAX</h6>
                                                                            {node.real_estate_taxes_est_ ? <p className="uk-margin-small-top">{node.real_estate_taxes_est_}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Status</h6>
                                                                            {node.status ? <p className="uk-margin-small-top">{node.status}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Floor plan</h6>
                                                                            {node.bedbath ? <a href={node.floor_plan} target="_blank" rel="noopener" className="uk-margin-small-top accent">VIEW</a> : <p>—</p>}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-card-footer">
                                                                    {node.listing ? <a href={node.listing} target="_blank" rel="noopener" className="uk-margin-small-top accent">VIEW</a> : <p>—</p>}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </>
                                }

                                {oneBed.hide_category !== true &&
                                    <>
                                        {oneBed.availability.map((node) => {
                                            return (
                                                <>
                                                    <div className="uk-width-child-1-1 uk-margin" data-uk-grid>
                                                        <div>
                                                            <div className="uk-card uk-card-default uk-width-1-2@m">
                                                                <div className="uk-card-header">
                                                                    <div className="data-uk-grid-small uk-flex-middle" data-uk-grid>
                                                                        <div className="uk-width-expand">

                                                                            {node.name ? <h3 className="uk-card-title uk-margin-remove-bottom accent">{node.name}</h3> : <p>—</p>}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-card-body">
                                                                    <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">BED / BATH</h6>
                                                                            {node.bedbath ? <p className="uk-margin-small-top">{node.bedbath}</p> : <p>—</p>}
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">INT / EXT SF</h6>
                                                                            {node.int_ext_sq ? <p className="uk-margin-small-top">{node.int_ext_sq}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Exposure</h6>
                                                                            {node.exposure ? <p className="uk-margin-small-top">{node.exposure}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Price</h6>
                                                                            {node.price ? <p className="uk-margin-small-top">{node.price}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">CC</h6>
                                                                            {node.common_charges_est_ ? <p className="uk-margin-small-top">{node.common_charges_est_}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">RE TAX</h6>
                                                                            {node.real_estate_taxes_est_ ? <p className="uk-margin-small-top">{node.real_estate_taxes_est_}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Status</h6>
                                                                            {node.status ? <p className="uk-margin-small-top">{node.status}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Floor plan</h6>
                                                                            {node.bedbath ? <a href={node.floor_plan} target="_blank" rel="noopener" className="uk-margin-small-top accent">VIEW</a> : <p>—</p>}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-card-footer">
                                                                    {node.listing ? <a href={node.listing} target="_blank" rel="noopener" className="uk-margin-small-top accent">VIEW</a> : <p>—</p>}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </>
                                }
                                {twoBed.hide_category !== true &&
                                    <>
                                        {twoBed.availability.map((node) => {
                                            return (
                                                <>
                                                    <div className="uk-child-width-1-1 uk-margin" data-uk-grid>
                                                        <div>
                                                            <div className="uk-card uk-card-default uk-width-1-2@m">
                                                                <div className="uk-card-header">
                                                                    <div className="data-uk-grid-small uk-flex-middle" data-uk-grid>
                                                                        <div className="uk-width-expand">
                                                                            {node.name ? <h3 className="uk-card-title uk-margin-remove-bottom accent">{node.name}</h3> : <p>—</p>}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-card-body">
                                                                    <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">BED / BATH</h6>
                                                                            {node.bedbath ? <p className="uk-margin-small-top">{node.bedbath}</p> : <p>—</p>}
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">INT / EXT SF</h6>
                                                                            {node.int_ext_sq ? <p className="uk-margin-small-top">{node.int_ext_sq}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Exposure</h6>
                                                                            {node.exposure ? <p className="uk-margin-small-top">{node.exposure}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Price</h6>
                                                                            {node.price ? <p className="uk-margin-small-top">{node.price}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">CC</h6>
                                                                            {node.common_charges_est_ ? <p className="uk-margin-small-top">{node.common_charges_est_}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">RE TAX</h6>
                                                                            {node.real_estate_taxes_est_ ? <p className="uk-margin-small-top">{node.real_estate_taxes_est_}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Status</h6>
                                                                            {node.status ? <p className="uk-margin-small-top">{node.status}</p> : <p>—</p>}

                                                                        </div>
                                                                        <div>
                                                                            <h6 className="uk-text-uppercase uk-margin-remove">Floor plan</h6>
                                                                            {node.bedbath ? <a href={node.floor_plan} target="_blank" rel="noopener" className="uk-margin-small-top accent">VIEW</a> : <p>—</p>}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-card-footer">
                                                                    {node.listing ? <a href={node.listing} target="_blank" rel="noopener" className="uk-margin-small-top accent">VIEW</a> : <p>—</p>}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </>
                                }
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
        search_engine_optimization {
          title_tag
          meta_description
        }
        studio {
          availability {
            bedbath
            exposure
            common_charges_est_
            floor_plan
            int_ext_sq
            listing
            name
            real_estate_taxes_est_
            price
            status
          }
          hide_category
        }
        one_bedroom {
          hide_category
          availability {
            bedbath
            exposure
            common_charges_est_
            floor_plan
            int_ext_sq
            listing
            name
            real_estate_taxes_est_
            price
            status
          }
        }
        three_bedroom {
          availability {
            bedbath
            common_charges_est_
            exposure
            floor_plan
            int_ext_sq
            listing
            name
            price
            real_estate_taxes_est_
            status
          }
          hide_category
        }
        two_bedroom {
          availability {
            bedbath
            common_charges_est_
            exposure
            floor_plan
            int_ext_sq
            listing
            price
            name
            real_estate_taxes_est_
            status
          }
          hide_category
        }
      }
    }
  }
  
`