import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Header,
  CardSection,
  YellowButton
} from './common';

class Cart extends Component {
    constructor() {
      super();
      this.state = {
        value: 1,
        modalVisible: false,
        addCart: false,
        items: 1
      };
    }

    // onMinus() {
    //   if (this.state.value > 0) {
    //     this.setState({ value: this.state.value - 1 });
    //   }
    // }
    // onPlus() {
    //   this.setState({ value: this.state.value + 1 });
    // }

    OnAddCart() {
      this.setModalVisible(true)
      this.setState({ addCart: !this.state.addCart })
    }
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    OnClose() {
      this.setModalVisible(false)
      this.setState({ addCart: false,
        items: this.state.items + 1});
    }

    renderView() {
      return (
        <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',}}>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{ marginTop: 20, backgroundColor: '#f2f2f2', flex: 1}}>
           <Header>
             Your Cart Prepare
           </Header>

          <View style={{marginTop: 50, justifyContent: 'center',
          alignItems: 'center',}}>
            <Text>Your {this.state.items} Item is added</Text>
          </View>

          <View>
            <TouchableHighlight onPress={() => this.OnClose()}>
              <View style={{marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',}}>
                <Text>CheckOut</Text>
              </View>
            </TouchableHighlight>
          </View>

         </View>
        </Modal>
      </View>
      );
    }

    renderCard() {
      return(
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={require('../images/imgmenu1.png')}
            resizeMode="stretch"
          />
          <View
            style={{flexDirection: 'column', paddingLeft: 10}}>
            <Text style={{fontSize: 14}}>Noodle Soup</Text>
            <Text style={{fontSize: 12}}>Boilded noodle served in</Text>
            <Text style={{fontSize: 12}}>a pot with broth</Text>
          </View>
          <View
            style={{paddingLeft: 20}}>
            <Text style={{fontSize: 12}}>$2.99</Text>
            <TouchableWithoutFeedback onPress={() => this.OnAddCart()}>
              <Text>AddToCart</Text>
            </TouchableWithoutFeedback>
          </View>
        </CardSection>
      );
    }
    render() {
      if (this.state.addCart) {
        return(
          <View>
            {this.renderView()}
          </View>
        );
      } else if (!this.state.addCart){
        return(
          <View style={{backgroundColor: '#f2f2f2', flex: 1}}>
            <Header>
              Cart
            </Header>
              <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 12}}>MOETS CURRY LEAF</Text>
              {this.renderCard()}
              <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 12}}>CAFE BY THE KITCHEN</Text>
              {this.renderCard()}
              {this.renderCard()}
              <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 12}}>CAFE BY THE KITCHEN</Text>
              {this.renderCard()}
              {this.renderCard()}
          </View>
        );
    }
}
}
const styles = StyleSheet.create({
  imageStyle: {
       width: 50,
       height: 50
  }
});
export default Cart;
