import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

const CardView = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    elevation: 1,
    marginTop: 15,
  }
};

export { CardView };
