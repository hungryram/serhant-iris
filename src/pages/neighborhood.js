import * as React from "react"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
import Slide from "../images/image.jpg"

export default function Residences() {
    return (
        <Layout>
            <div className="uk-animation-slide-bottom-small">
                <img src={Slide} alt="" />
            </div>


            <div className="uk-section">
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Tribeca</h1>
                        <p className="editable">TriBeCa is an upscale residential neighborhood known for its cobblestone
                            streets, post-industrial vibe, and easy access to the Financial District and
                            Lower Manhattan.
                            Situated on the same block as the new Four Seasons Hotel and Woolworth
                            building, Iris Tribeca is just around the corner from City Hall Park and is
                            moments from high-end dining and shopping options. Whole Foods, One
                            World Trade Center, Brookfield Place, Rockefeller Park, and the Hudson River
                            Greenway are all close by. Transportation could not be any more convenient,
                            as it is literally steps away from the subway lines 2/3/A/C/E/R/W and within 1-
                            2 blocks from lines 1/4/5/6. Pets are welcome. </p>
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

            <div className="uk-section">
                <div className="uk-container">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1S8y99ab_daQQHKAZ-gPp6-Qqb9erhELT&ehbc=2E312F" height="480" style={{ width: '100%' }}></iframe>
                </div>
            </div>
        </Layout>
    )
}