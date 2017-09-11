'use strict';
import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View, PixelRatio } from 'react-native';


const YellowButton = ({ onPress, children, style, source, buttonTextStyle }) => {
  const { buttonStyle, textStyle } = localStyle;

  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={[buttonStyle, style]}>
        <Text style={[ textStyle, buttonTextStyle]}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const localStyle = {
  textStyle: {
    alignSelf: 'center',
    textAlign: 'auto',
    color: '#fff',
    // fontSize: 16,
    // fontWeight: 'bold',
  // paddingTop: 20,
  // paddingBottom: 20,
  },
  buttonStyle: {
    flex: 1,
    height: 30, //*PixelRatio.get(),
    width: 100, //*PixelRatio.get(),
  //  alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#f7a500',
    //borderWidth: 1,
    //borderColor: '#90918F',
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: 'red',
    // shadowOpacity: 0.8,
    // shadowOffset: { width: 0, height: 3 },
    // marginLeft: 5,
    // marginRight: 5
  }
};

export { YellowButton };
