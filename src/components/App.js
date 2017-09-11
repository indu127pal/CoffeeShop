import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {
  CardView
} from './common';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Home from './Home';
import Cart from './Cart';
import Menu from './Menu';

const FirstRoute = () => <Home />;
const SecondRoute = () => <Menu />;
const ThirdRoute = () => <Cart />

class App extends Component {
    constructor() {
      super();
    }
    state = {
      index: 0,
      routes: [
        { key: '1', title: 'Home' },
        { key: '2', title: 'Menu' },
        { key: '3', title: 'Cart' },
      ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderFooter = props => <TabBar {...props}
      style={{ height: 35, backgroundColor:'orange'}}
      indicatorStyle={{ height: 0, borderBottomWidth:2, borderBottomColor:'#f7a500' }}
      getLabelText={({route})=>route.title}
      tabStyle={{alignItems: 'center',  justifyContent: 'center', padding: 0}}
      labelStyle={{ color: 'black', fontSize:16 }}/>;

      _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
        '3': ThirdRoute,
      });

      render() {
        return(
          <CardView style={{ padding: 0, marginBottom: 0}}>
            <TabViewAnimated
              style={{ flex: 1, marginTop: 5 }}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderFooter={this._renderFooter}
              onIndexChange={this._handleIndexChange}
            />
          </CardView>
        );
      }
}

export default App;
