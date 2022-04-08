import * as React from "react"
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
                        <h1 className="accent uk-heading-medium editable">The Residences</h1>
                        <p className="editable">Available in spacious half and full-floor studio to 3-bedroom layouts, each of
                            Iris’ twenty-four homes offers ample natural light, privacy, and quiet
                            tranquility. Integrated technology like smart-home ready pre-wiring, sound-
                            dampening floor-to-ceiling curtain wall windows and flooring, and direct
                            keycard elevator access blend seamlessly with organic surfaces and tones.
                            High-efficiency central heating and cooling and Miele washers/dryers come
                            standard.</p>
                            <a href="" className="uk-h3 accent text-underline">Download Fact Sheet</a>
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
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Living Spaces</h1>
                        <p className="editable">Wide plank European red oak floors shine in steady streams in northern and
                            southern light. Open-concept entertaining is enhanced by open city views
                            and private frameless glass balconies perfect for sunset drinks, urban
                            gardening, and easy warm-weather lounging.</p>
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
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Kitchens</h1>
                        <p className="editable">Accessible and luxurious, kitchens are equipped with custom desert oak
                            cabinets, polished Italy-imported Statuary marble slab countertops and
                            backsplashes, built-in Miele or Zephyr oven hoods, and a suite of fully-
                            integrated and seamlessly paneled high-end appliances from Wolf, Viking,
                            and Sub-Zero.</p>
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
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Primary Bedrooms</h1>
                        <p className="editable">Quiet, spacious, and situated away from living areas, primary bedrooms at
                            Iris offer residents a sanctuary-like space to unwind, rest, and recharge.
                            Ample walk-in closets offer plenty of storage and keep all your wardrobe
                            options at your fingertips. Master bedrooms have their own additional private balcony</p>
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
                <div className="uk-container uk-container-small uk-text-center">
                    <div>
                        <h1 className="accent uk-heading-medium editable">Primary Bathrooms</h1>
                        <p className="editable">Polished Onyx porcelain slab walls imported from Italy and radiant heated
                            Walnut Brown Haisa marble floors set the tone for spa-like primary
                            bathrooms that are elegant, warm, and refined. Huge custom vanities and
                            hydronic towel warmers are the ideal accents to glass-enclosed centerpiece wet rooms with slatted teak floors, a rain showerhead with handheld shower wand, and a freestanding Wetstyle soaking tub.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}