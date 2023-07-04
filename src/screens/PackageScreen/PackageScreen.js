import React from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { AntDesign, MaterialIcons,Feather } from "@expo/vector-icons";
import * as Linking from "expo-linking";
const phoneNumber = "+8801907104796";
const data1 = [
  {
    id: "1",
    packageType: "Starter Pack",
    packageSize: "5 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },
  {
    id: "2",
    packageType: "Medium Pack",
    packageSize: "10 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },
  {
    id: "3",
    packageType: "Bronze Pack",
    packageSize: "15 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },
  {
    id: "4",
    packageType: "Silver Pack",
    packageSize: "20 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },

  // Add more package data as needed
];
const data2 = [
  {
    id: "1",
    packageType: "Gold Pack",
    packageSize: "25 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },
  {
    id: "2",
    packageType: "Platinum Pack",
    packageSize: "30 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },
  {
    id: "3",
    packageType: "Premium Pack",
    packageSize: "35 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },
  {
    id: "4",
    packageType: "Real-IP Pack",
    packageSize: "40 MBPS",
    youtube: "Unlimited YouTube",
    facebook: "Unlimited Facebook",
    bdix: "BDIX Connected",
    support: "Support 24/7"
  },

  // Add more package data as needed
];
const PackageScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.packageType}>{item.packageType}</Text>
      <Text style={styles.packageSize}>{item.packageSize}</Text>
      <View style={styles.iconsContainer}>
        <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
        <AntDesign name="youtube" size={24} color="black" />
        <Text style={styles.iconText}>{item.youtube}</Text>
        </View> 
        <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
        <MaterialIcons name="facebook" size={24} color="black" />
        <Text style={styles.iconText}>{item.facebook}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
        <Feather name="server" size={24} color="black" />
        <Text style={styles.iconText}>{item.bdix}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
        <MaterialIcons name="support-agent" size={24} color="black" />
        <Text style={styles.iconText}>{item.support}</Text>
        </View>
      </View>
      <TouchableOpacity        onPress={() =>
            Linking.openURL(`tel:${phoneNumber}`)
              .then((supported) => {
                if (supported) {
                  return Linking.openURL(`tel:${phoneNumber}`);
                }
              })
              .catch(() => null)
          } style={styles.callButton}>
        <AntDesign name="phone" size={24} color="white" />
        <Text style={styles.callButtonText}>Call Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign:'center',padding:20,fontWeight:'bold'}}>Discover Our Best Value Plans</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={data1}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
       <Text style={{textAlign:'center',padding:20,fontWeight:'bold'}}>Discover Our More Value Plans</Text>
        <FlatList
        data={data2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  flatListContent: {
    paddingBottom: 10,
  },
  cardContainer: {
    width: 250,
    height: 320,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 20,

    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  packageType: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  packageSize: {
    fontSize: 16,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  iconText: {
    marginLeft: 5,
  },
  callButton: {
    flexDirection: "row",
    backgroundColor: "rgb(230,141,43)",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  callButtonText: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default PackageScreen;
