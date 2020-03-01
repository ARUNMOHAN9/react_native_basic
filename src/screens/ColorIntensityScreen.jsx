import React, { useReducer } from 'react';

import { View, Text } from 'react-native';

import ColorIntensityController from '../components/ColorIntensityController';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return (state.red + action.payload > 255) || (state.red + action.payload < 0)
                ? state : { ...state, red: state.red + action.payload };
        case 'change_green':
            return (state.green + action.payload > 255) || (state.green + action.payload < 0)
                ? state : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return (state.blue + action.payload > 255) || (state.blue + action.payload < 0)
                ? state : { ...state, blue: state.blue + action.payload };

        default: return state;
    }
}

const ColorIntensityScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <ColorIntensityController title="red"
                increment={() => dispatch({ type: 'change_red', payload: 10 })}
                decrement={() => dispatch({ type: 'change_red', payload: -10 })} />

            <ColorIntensityController title="green"
                increment={() => dispatch({ type: 'change_green', payload: 10 })}
                decrement={() => dispatch({ type: 'change_green', payload: -10 })} />

            <ColorIntensityController title="blue"
                increment={() => dispatch({ type: 'change_blue', payload: 10 })}
                decrement={() => dispatch({ type: 'change_blue', payload: -10 })} />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}></View>
            <Text>`rgb(${state.red}, ${state.green}, ${state.blue})`</Text>
        </View>
    );

}

// class ColorIntensityScreen extends React.Component {
//     state = {
//         red: 0,
//         green: 0,
//         blue: 0
//     }

//     incrementIntensity = (color) => {
//         if (this.state[color] + 10 <= 255) {
//             this.setState({
//                 [color]: this.state[color] + 10
//             });
//         }
//     }

//     decrementIntensity = (color) => {
//         if (this.state[color] - 10 > 0) {
//             this.setState({
//                 [color]: this.state[color] - 10
//             });
//         }
//     }

//     render() {
//         return(
//             <View>
//                 <ColorIntensityController title="red"  increment={this.incrementIntensity} decrement={this.decrementIntensity}/>
//                 <ColorIntensityController title="blue"  increment={this.incrementIntensity} decrement={this.decrementIntensity}/>
//                 <ColorIntensityController title="green"  increment={this.incrementIntensity} decrement={this.decrementIntensity}/>
//                 <View style={{ height: 100, width: 100, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})` }}></View>
//                 <Text>`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`</Text>
//             </View>
//         );
//     }
// }

export default ColorIntensityScreen;