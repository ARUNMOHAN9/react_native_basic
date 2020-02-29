import React, { Component, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

const CounterScreen = () => {

    let [count, setCounter] = useState(24);

    return (
        <View>
            <Button title='Increment' onPress={() => setCounter(count + 1)} />
            <Button title='Decrement' onPress={() => setCounter(count - 1)} />
            <Text>{count}</Text>
        </View>
    );
};

// class CounterScreen extends Component {

//     state = {
//         count: 0
//     }

//     increment = () => {
//         let count = this.state.count;
//         this.setState({count: ++count})
//     };

//     decrement = () => {
//         let count = this.state.count;
//         this.setState({count: --count})
//     };

//     render() {
//         return(
//             <View>
//                 <Button title='Increment' onPress={ () => this.increment()}/>
//                 <Button title='Decrement' onPress={ () => this.decrement()}/>
//                 <Text>{this.state.count}</Text>
//             </View>
//         );
//     };
// };

export default CounterScreen;