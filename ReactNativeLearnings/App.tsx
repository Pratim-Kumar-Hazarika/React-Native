/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {  KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-4qqq6c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-ww-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bdqqq96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0wwf-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-47dd1f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3qqda1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1w-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-w471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bdd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3dsa1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0fd-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694da0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694ca0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96w-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0ddf-3da1-471f-bd96w-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0eewwf-3da1-471f-bd96w-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bwwwd96w-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-wwww-bd96w-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96wwwwq3-145571e29d72',
    title: 'Third Item',
  },
];
const data1 = [{
  id: '58694a0f-3dddda1-wwwww-bd96w-145571e29d72',
  title: 'Third Itdddem',
},
{
  id: '58694a0f-ddd-471f-bd9d6wwwwq3-145571e29d72',
  title: 'Third Item',
}];
const w = Dimensions.get('window');
const image = { uri: "https://reactjs.org/logo-og.png" };
const Item = ({title}: any) => {
  //  const [url,setUrl] = useState<any>()
  const [onLoadImage, setLoadImage] = useState(false);
 
  const imageLoading = () => {
    setLoadImage(true);
  }
  function pictureLoading(){
    console.log("picture loadingg")
  }
  function pictureLoaded(){
    imageLoading()
    console.log("picture loadded")
  }

 return  <View style={styles.item} >
    <Text style={styles.title}>{title}</Text>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Something</Text>
    </ImageBackground>
  </View>;
};
function emptyComponentMessage(){
  return  <View style={styles.item}>
  <Text style={styles.title}>Nothing to display</Text>
</View>;
}
const App = () => {

 
  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
        <ScrollView>
          <Text style={styles.header}>Login</Text>
          <TextInput placeholderTextColor={"gray"} placeholder="email" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />

          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />

          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          /><TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />

          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
          <TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          /><TextInput placeholderTextColor={"gray"} placeholder="Password" style={styles.textInput} 
          />
            </ScrollView>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() => null}>
          <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        
        </View>
      </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor:"white"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "black",
    borderBottomWidth: 1,
    marginBottom: 36,
    color:"black",
  
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
    color:"red"
  },
  appButtonContainer: {
 
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
  
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;
