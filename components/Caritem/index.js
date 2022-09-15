import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from './styles';
const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
        <ImageBackground
        source={require('../..//assets/images/ModelX.jpeg')}
        style={styles.image}
        />
        <View style={style.titles}>
          <Text style={style.title}>Model S</Text>
          <Text style={style.subtitle}>Starting at $69,000</Text>
        </View>
      </View>
  )
}

export default CarItem;