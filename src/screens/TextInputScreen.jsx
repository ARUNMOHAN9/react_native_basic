import React, { useState } from 'react';

import { View, TextInput, Text } from 'react-native';


const TextInputScreen = () => {
    let [value, onChangeText] = useState('');

    return (
        <View>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                autoCapitalize="none"
                autoCorrect={false}
                value={value} />
            <Text>{value}</Text>
        </View>
    );
}

export default TextInputScreen;