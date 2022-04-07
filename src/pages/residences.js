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
                heading="The Residences"
                body="Available in spacious half and full-floor studio to 3-bedroom layouts, each of IRIS' twenty-four homes offers ample natural light, privacy, and quiet solitude. Integrated technology like smart-home ready pre-wiring, sound-dampending floor-to-ceiling curtain wall windows and flooring, and direct keycard elevator access blend seamlessly with organic surfaces and tones. High-efficiency central heating and cooling and Miele washers/dryers come standard."
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

            <Intro
                heading="Living Spaces"
                body="Wide plank European white oak floors shine in steady streams in northern and southern light. Open-concept entertaining is enhanced by open city views and private frameless glass balconies perfect for sunset drinks, urban gardening, and easy warm-weather lounging."
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

            <Intro
                heading="Kitchens"
                body="Accessible and luxurious, kitchens are equipped with custom white oak cabinets, polished statuary marble slab countertops and backsplashes, built-in Miele oven hoods, and a suite of fully-integrated high-end appliances from Wolf, Viking, and Sub-Zero."
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

            <Intro
                heading="Primary Bedrooms"
                body="Quiet, spacious, and situated away from living areas, primary bedrooms at Iris offer residents a sanctuary-like space to unwind, rest, and recharge. Ample walk-in closets offer plenty of storage and keep all your wardrobe options and your fingertips."
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