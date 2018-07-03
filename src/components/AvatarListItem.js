//import libraries and files
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//Component
class AvatarListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>filename</Text>
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//To make this component available to the app
export default AvatarListItem;
