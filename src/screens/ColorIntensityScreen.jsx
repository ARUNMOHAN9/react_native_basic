import React from 'react';

import {View, Text} from 'react-native';

import ColorIntensityController from '../components/ColorIntensityController';

class ColorIntensityScreen extends React.Component {
    state = {
        red: 0,
        green: 0,
        blue: 0
    }

    incrementIntensity = (color) => {
        if (this.state[color] + 10 <= 255) {
            this.setState({
                [color]: this.state[color] + 10
            });
        }
    }

    decrementIntensity = (color) => {
        if (this.state[color] - 10 > 0) {
            this.setState({
                [color]: this.state[color] - 10
            });
        }
    }

    render() {
        return(
            <View>
                <ColorIntensityController title="red"  increment={this.incrementIntensity} decrement={this.decrementIntensity}/>
                <ColorIntensityController title="blue"  increment={this.incrementIntensity} decrement={this.decrementIntensity}/>
                <ColorIntensityController title="green"  increment={this.incrementIntensity} decrement={this.decrementIntensity}/>
                <View style={{ height: 100, width: 100, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})` }}></View>
                <Text>`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`</Text>
            </View>
        );
    }
}

export default ColorIntensityScreen;