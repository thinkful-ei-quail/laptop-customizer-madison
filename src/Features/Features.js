import React, { Component } from 'react';
import Feature from "./Feature"

class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            return (
                <Feature
                    key={idx}
                    features={this.props.features}
                    feature={feature}
                    idx={idx}
                    state={this.props.state}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    updateFeature={this.props.updateFeature}
                />
            )
        })
        return features
    }
}

export default Features