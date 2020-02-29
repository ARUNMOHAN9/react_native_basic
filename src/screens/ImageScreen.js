import React from 'react';
import { View, Text, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Mountain' imgSource={require('../../assets/mountain.jpg')} />
            <ImageDetail title='Forest' imgSource={require('../../assets/forest.jpg')} />
            <ImageDetail title='Beach' imgSource={require('../../assets/beach.jpg')} />
        </View>
    );
};

export default ImageScreen;