//import libraries and files
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AvatarList from "./AvatarList";
import DataResult from "../utils/DataResult";
//Component
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataResult: DataResult.DataList,
      showData: []
    };
  }

  componentDidMount() {
    let dataArray = [];
    let tempData = this.state.dataResult;
    Object.keys(tempData).forEach(function(value, index) {
      dataArray.push({
        name: tempData[index].name,
        image: tempData[index].image
      });
    });

    this.setState({
      showData: dataArray
    });
    console.log("dataArray", dataArray);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 50
          }}
        >
          Example
        </Text>
        <AvatarList
          dataResult={this.state.showData}
          avatarSize={30}
          strokeColor={"#cccccc"}
          strokeWidth={1}
          labelTextColor={"#ffffff"}
          labelTextFontSize={15}
          maxAvatarShow={4}
          maxTextShow={"more users"}
          maxTextShowColor={"#ffffff"}
          maxTextShowSize={15}
        />
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  }
});

export default Example;
