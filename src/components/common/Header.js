// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={{flex:0.8, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={textStyle}>{props.children}</Text>
      </View>
      <View style={{flex: 0.1,justifyContent: 'center', alignItems: 'center'}}>
        <Image style={imageStyle}
        source={require('../../images/Cart.png')}/>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    paddingLeft: 15,
    height: 30,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  imageStyle: {
    height: 20,
    width: 20
  }
};

// Make the component available to other parts of the app
export { Header };
