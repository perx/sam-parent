import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    SectionList,
    ToolbarAndroid,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {LoginScreen} from "./Login";

class BCToolBar extends React.Component{
    render() {
    return (
            <ToolbarAndroid style={styles.toolbar}
            title="AwesomeApp"
            />
        );
    }
}

class BCNavBar extends React.Component{
    render(){
        return (
            <FlatList style={styles.navbar}
               data={[{key: 'a'}, {key: 'b'}]}
               renderItem={({item}) => <Text>{item.key}</Text>}
            />
        );
    }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
        title: 'SAM Parent',
  };
  render() {
    return (
      <View style={styles.container}>
        <BCNavBar />
      </View>
    );
  }
};

const RootStack = StackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen }
},{
    initialRouteName: 'Login',
});

export default class App extends React.Component {
    render() {
        return (<RootStack />);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //  alignItems: 'center',
    //justifyContent: 'center',
  },
  toolbar:{
      backgroundColor:'#2196f3',
      minHeight:80,
      height:80,
      alignItems: 'stretch'
  },
  navbar:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      //alignItems:'center',
      zIndex:9999,
      flex:1,
      flexDirection:'row',
      backgroundColor:'#2196f3'
  }
});
