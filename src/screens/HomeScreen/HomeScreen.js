import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const phoneNumber = "+8801907104796";
const width = Dimensions.get('window').width;


const data = [
  { id: "1", title: "Talukder Net", icon: require("../../../assets/talukder.png"), url: "https://talukdernet.com/" },
  { id: "2", title: "Customer Portal", icon: require("../../../assets/customer.png"), url: "https://billing.talukdernet.com/customer_login" },
  { id: "3", title: "bKash", icon: require("../../../assets/bkash.png"), url: "https://shop.bkash.com/miftahul-broadband-connection0/paymentlink" },
  { id: "4", title: "CircleFTP", icon: require("../../../assets/circle.png"), url: "http://circleftp.net/" },
  { id: "5", title: "Live TV", icon: require("../../../assets/tv.png"), url: "http://bciptv.net/" },
  { id: "6", title: "Talukder FTP", icon: require("../../../assets/talukderftp.png"), url: "https://ftp.talukdernet.com/" },
  { id: "7", title: "Facebook Page", icon: require("../../../assets/facebook.png"), url: "https://www.facebook.com/taslimtalukder21?mibextid=ZbWKwL" },
  { id: "8", title: "Service", icon: require("../../../assets//service.png"), url: "https://talukdernet.com/service/" },
  { id: "9", title: "Team", icon: require("../../../assets/team.png"), url: "https://talukdernet.com/team/" },
  { id: "10", title: "Support", icon: require("../../../assets/support.png"), url: "https://talukdernet.com/elementor-1626/?fbclid=IwAR0VChdxoea6adO0tvtGh9yEMQa2pc-fzsr8l0a2bQ5mxcykGT68us84kqs" },
  // Add more items as needed
];
;

const ListItem = ({ item }) => {
  const navigation = useNavigation()
  const handlePress = () => {
    console.log(item.url)
    return (
      navigation.navigate("WebViewScreen", {
        url: item.url,
        title: item.title,
      }) )
  };

  return (
      <>
        {
          item.id%2==0?
          (<TouchableOpacity style={styles.itemContainer1} onPress={handlePress}>
            <View style={styles.imageContainer}>
            <Image source={item.icon} 
              style={{width: 100, height: 100, resizeMode: "contain", borderRadius: 30,}}
            />
            </View>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>):
          <TouchableOpacity style={styles.itemContainer2} onPress={handlePress}>
          <View style={styles.imageContainer}>
          <Image source={item.icon} 
            style={{width: 100, height: 100, resizeMode: "contain", borderRadius: 30,}}
          />
          </View>
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
        }
      </>
  );
};

const ListScreen = () => {
  const renderLeftItems = () => {
    const leftData = data.slice(0, Math.ceil(data.length / 2));

    return (
      <View style={styles.leftContainer}>
        {leftData.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </View>
    );
  };

  const renderRightItems = () => {
    const rightData = data.slice(Math.ceil(data.length / 2));

    return (
      <View style={styles.rightContainer}>
        {rightData.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.listContainer}>
      {renderLeftItems()}
      {renderRightItems()}
    </View>
  );
};





export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 100, height: 40 }}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
        <ListScreen/>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.call}
          onPress={() =>
            Linking.openURL(`tel:${phoneNumber}`)
              .then((supported) => {
                if (supported) {
                  return Linking.openURL(`tel:${phoneNumber}`);
                }
              })
              .catch(() => null)
          }
        >
          <AntDesign name="phone" size={24} color="white" />
          <Text
            style={{
              color: "#FFFFFF",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Call Now!!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    position:'sticky',
    padding: 5,
    marginLeft: 5,
    justifyContent: "center",
  },
  body: {
    flex: 10,
  },
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  call: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(230,141,43)",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  info: {
    flexDirection: "column",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  itemContainer1: {
    width: width / 2 - 5,
    height: 190,
    backgroundColor: '#FFFFFF'  ,
    borderRadius: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, 
  },
  itemContainer2: {
    width: width / 2 - 5,
    height: 190,
    backgroundColor: '#FFF6F4'  ,
    borderRadius: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, 
  },
  imageContainer: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
  },

});
