import * as React from "react"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
import Slide from "../images/image.jpg"

export default function Residences() {
    return (
        <Layout>
            <div>
                <img src={Slide} alt="" />
            </div>


            <div className="uk-section">
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 class="accent uk-heading-medium">Tribeca</h1>
                        <p>TriBeCa is an upscale residential neighborhood known for its cobblestone streets, post-industrial
                            vibe, and easy access to the Financial District and Lower Manhattan. Iris is situated around the
                            corner from City Hall Park and is moments from high-end dining and shopping options. One
                            World Trade Center, Brookfield Place, Rockefeller Park, and the Hudson River Greenway are all
                            close by. Nearby subway lines include the 1/2/3/4/5/A/C/E/R/W</p>
                    </div>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow>

                        <ul className="uk-slideshow-items">
                            <li>
                                <img src={Slide} alt="" data-uk-cover />
                            </li>
                            <li>
                                <img src={Slide} alt="" data-uk-cover />
                            </li>
                            <li>
                                <img src={Slide} alt="" data-uk-cover />
                            </li>
                        </ul>

                        <a className="uk-position-center-left uk-position-small uk-slidenav-large" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-slidenav-large" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>

                    </div>
                </div>
            </div>
        </Layout>
    )
}