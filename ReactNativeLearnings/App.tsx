/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

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

const Item = ({title}: any) => {
 return  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={{ height: 300, width: 300 }}
      source={{uri:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }} //using uri property for images from web
      resizeMode="contain"
    />
  </View>;
};
function emptyComponentMessage(){
  return  <View style={styles.item}>
  <Text style={styles.title}>Nothing to display</Text>
</View>;
}
const App = () => {

  const [data,setData] = useState(DATA);
  //@ts-ignore
  function renderItem({index}) {
    return <Item title={index} />;
  }
 function listEndTriggerHandler(){
   setTimeout(()=>{
       setData((prev)=>[...prev,...data1]);
   },2000);

 }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponentMessage}
        keyExtractor={item => item.id}
        onEndReached={listEndTriggerHandler}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
