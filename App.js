import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
//import the list component that will fetch the data.
import PeopleList from "./PeopleList";
//import provider to connect component to redux store.
import { Provider } from "react-redux";
//import your store to connect your component.
import store from "./redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PeopleList />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
