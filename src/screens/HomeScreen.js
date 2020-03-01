import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button onPress={ () => props.navigation.navigate('ComponentView')} title="Go to the components demo"/>
      <Button onPress={ () => props.navigation.navigate('ListView')} title="Go to list demo"/>
      <Button onPress={ () => props.navigation.navigate('image')} title="Go to image demo"/>
      <Button onPress={ () => props.navigation.navigate('counter')} title="Go to counter demo"/>
      <Button onPress={ () => props.navigation.navigate('color')} title="Go to color screen demo"/>
      <Button onPress={ () => props.navigation.navigate('colorIntensity')} title="Go to color intensity demo"/>
      {/* <TouchableOpacity>
        <Text  onPress={ () => props.navigation.navigate('ListView')}>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
