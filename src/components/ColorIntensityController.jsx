import React from 'react';

import  {View, Text, Button} from 'react-native';

const ColorIntensityController = (props) => {
    return(
        <View>
            <Text>{props.title}</Text>
            <Button title="Increment Intensity" onPress={() => {props.increment(props.title)}} />
            <Button title="Decrement Intensity" onPress={() => {props.decrement(props.title)}} />
        </View>
    );
}

export default ColorIntensityController;