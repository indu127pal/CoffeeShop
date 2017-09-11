import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet
} from 'react-native';
import {
  Header,
  MenuRow,
} from './common';
import ImageSlider from 'react-native-image-slider';

class Menu extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['','','','','','']),
        position: 1,
        interval: null
      };
    }
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
      return(
        <View style={{backgroundColor: '#f2f2f2'}}>
          <Header>
            Menu
          </Header>
          <ImageSlider
            images={[
                require('../images/Head_Image.png'),
                require('../images/Head_Image.png'),
                require('../images/Head_Image.png'),
                require('../images/Head_Image.png'),
                require('../images/Head_Image.png'),
            ]}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}
            />
            <View
            style={styles.container}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={() => <MenuRow />}
            />
            </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    marginHorizontal: 15
  }
});

export default Menu;
