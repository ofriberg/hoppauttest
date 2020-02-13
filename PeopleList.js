//import React and PureComponent to have the ability to have a shallow comparison of props and state
import React, { Component } from "react";
//impo rt your UI from react-native
import { View, Text, StyleSheet, Button } from "react-native";
//import your action creator from store for getting assynchronous operations.
import { getPerson } from "./redux/store";
//import connect method connecting your component to have access to redux state and dispatchers
import { connect } from "react-redux";

class PeopleList extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.getPerson();
  };
  render() {
    const { user, loading } = this.props;

    console.log("user");
    console.log(user);
    console.log("useruser", user.user);

    if (!loading) {
      return (
        <View style={styles.container}>
          <Button onPress={() => this.handlePress()} title='Bank' />
          {user.user && user.user.name ? (
            <Text>{user.user.name}</Text>
          ) : (
            <Text>No bank person</Text>
          )}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button onPress={() => this.handlePress()} title='Bank' />
          {user.user && user.user.name ? (
            <Text>{user.user.name}</Text>
          ) : (
            <Text>No bank person</Text>
          )}
        </View>
      );
    }
  }
}

//Define your styles by using StyleSHeet from react-native to cerate a css abstraction
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

//Map the redux state to your props.
const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading
});

//Map your action creators to your props.
const mapDispatchToProps = {
  getPerson
};

//export your list as a default export
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
