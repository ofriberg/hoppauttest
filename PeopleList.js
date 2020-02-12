//import React and PureComponent to have the ability to have a shallow comparison of props and state
import React, { Component } from "react";
//impo rt your UI from react-native
import { View, Text, StyleSheet, Button } from "react-native";
//import your action creator from store for getting assynchronous operations.
import { getBankPerson, getPerson } from "./redux/store";
//import connect method connecting your component to have access to redux state and dispatchers
import { connect } from "react-redux";

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hej"
    };
  }

  handlePress = () => {
    this.props.getBankPerson();
  };

  handlePressPerson = () => {
    this.props.getPerson();
  };
  render() {
    const { bankPerson, person, loading } = this.props;
    console.log("props");
    console.log("");
    console.log("");
    console.log("");
    console.log(this.props);
    if (!loading) {
      return (
        <View style={styles.container}>
          <Text>{this.state.name || ""}</Text>
          <Text>{this.state.timer || ""}</Text>
          <Button onPress={() => this.handlePress()} title='Bank' />
          {bankPerson && bankPerson.status && bankPerson.status.user ? (
            <Text>{bankPerson.status.user.name}</Text>
          ) : (
            <Text>No bank person</Text>
          )}

          <Button onPress={() => this.handlePressPerson()} title='Person' />
          {person && person.gender ? (
            <Text>{person.name.first + " " + person.name.last}</Text>
          ) : (
            <Text>No person</Text>
          )}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button onPress={() => this.handlePress()} title='Fetch stuff' />
          {bankPerson && bankPerson.status && bankPerson.status.user ? (
            <Text>{bankPerson.status.user.name}</Text>
          ) : (
            <Text>No bank person</Text>
          )}
          <Button onPress={() => this.handlePressPerson()} title='Person' />
          {person && person.gender ? (
            <Text>{person.name.first + " " + person.name.last}</Text>
          ) : (
            <Text>No person</Text>
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
  bankPerson: state.bankPerson,
  person: state.person,
  loading: state.loading
});

//Map your action creators to your props.
const mapDispatchToProps = {
  getBankPerson,
  getPerson
};

//export your list as a default export
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
