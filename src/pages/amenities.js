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
            <Intro
                heading="Amenities"
                body="Iris Tribeca greets residents with heated sidewalks and an atrium-style lobby that dazzles and
                soothes with poured terrazzo flooring, rich oak-paneled walls, a 19-ft waterfall, and a custom
                glass chandelier that dangles from soaring double-height ceilings. Thoughtful lifestyle
                amenities like a fitness center, private lounge, and lush courtyard escape offer residents flexible
                spaces to work, play, and entertain. Private storage is available for purchase."
            />

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