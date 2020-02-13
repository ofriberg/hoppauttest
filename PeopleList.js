import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getPerson } from "./redux/store";
import { connect } from "react-redux";

const Login = ({ getPerson, user, loading }) => {
  const handlePress = ({ personalNumber = "198906010056" } = {}) => {
    // const viktor = "198511044656";
    getPerson({ personalNumber });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <>
          <Button onPress={() => handlePress()} title='Bank' />
          {user.user && user.user.name ? (
            <Text>{user.user.name}</Text>
          ) : (
            <Text>No bank person</Text>
          )}
        </>
      )}
    </View>
  );
};

//Define your styles by using StyleSHeet from react-native to cerate a css abstraction
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading
});

//Map your action creators to props.
const mapDispatchToProps = { getPerson };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
