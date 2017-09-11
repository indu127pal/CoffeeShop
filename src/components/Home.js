import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {
  CardView,
  CardSection
} from './common';

class Home extends Component {
    constructor() {
      super();

    }
    render() {
      return(
          <Image
           style={styles.imageStyle}
            source={require('../images/landing-page.png')}>
            <View style={styles.container}>
              <Text style={styles.text1}>HOT</Text>
              <Text style={styles.text2}>COFFEE</Text>
              <Text style={styles.text3}>Start You Day</Text>
              <Text />
              <Text style={styles.text4}>CoffeeShop, in HSR Layout</Text>
            </View>
          </Image>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
    backgroundColor: 'transparent',
    marginLeft: 20
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  text2: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'
  },
  text3: {
    fontSize: 15,
    color: 'white'
  },
  text4: {
    fontSize: 10,
    color: 'white'
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
});
export default Home;
