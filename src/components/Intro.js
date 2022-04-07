import * as React from "react"

export default props => (
    <div className="uk-section">
        <div className="uk-container uk-container-small uk-text-center">
            <div>
                <h1 class="accent uk-heading-medium">{props.heading}</h1>
                <p>{props.body}</p>
            </div>
        </div>
    </div>
)