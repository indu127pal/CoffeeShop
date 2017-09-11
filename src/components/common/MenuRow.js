import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

class MenuRow extends Component {
  constructor() {
    super();

  }
  render() {
    return(
      <View style={styles.columnView}>
        <Image
          style={styles.imageStyle}
          source={require('../../images/imgmenu1.png')}
          resizeMode="stretch"
        />
        <Text style={styles.title}>Tuffles Ice & Spice</Text>
        <Text style={styles.type}>American Cafe</Text>
        <View style={styles.rowView}>
          <Text style={styles.text}>Open now</Text>
          <Text style={[styles.text, {marginLeft: 220}]}>4.7</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  columnView: {
    flex: 1,
    flexDirection: 'column',
    borderColor:'#e6e6e6',
    borderWidth: 1,
    padding: 10
  },
  rowView: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    marginTop: 8
  },
  type: {
    fontSize: 15,
    fontWeight: '300',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 10
  },

  imageStyle: {
    width: undefined,
  },
});

export { MenuRow };
