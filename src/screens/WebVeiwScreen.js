import React from "react";
import { View, StyleSheet,Text,Button, TouchableOpacity, SafeAreaView } from "react-native";

import { WebView } from "react-native-webview";
const phoneNumber = "8801907104796";
const WebViewScreen = ({ route, navigation }) => {
  const { url } = route.params;

  return (
    <SafeAreaView style={styles.container}>

      <WebView source={{ uri: url }} />
            


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default WebViewScreen;
