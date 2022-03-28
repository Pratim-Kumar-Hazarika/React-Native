/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function LogoTitle({props}:any) {
  // console.log("yo props",{props})
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./img.png')}
    />
  );
}
function HomeScreen({navigation}) {
  console.log({navigation});
    return (
        <View
            style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Home Screen</Text>
            <Button
        title="Go to Products"
        onPress={() => navigation.push('Product',{id:"pratim"})}
      />
        </View>
    );
}
function DetailsScreen({navigation}) {
    return (
        <View
            style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Details Screen</Text>

        </View>
    );
}
function ProductScreen({route,navigation}) {
  const params = route.params;
  console.log({params});
  return (
      <View
          style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          <Text>Product Screen</Text>
          <Button
        title="Go to Products from Product Screen"
        onPress={() => navigation.push('Product')}
      />
         <Button
        title="Go to First Screen  navigation.popToTop(`Home`)"
        onPress={() => navigation.popToTop('Home')}
      />
      </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'pink',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerTitle: (props) => <LogoTitle {...props} />,
                    headerRight: () => (
                      <Button
                        onPress={() => console.log('This is a button!')}
                        title="Info"
                        color="#fff"
                      />
                    ),
          
                    }}
/>
                <Stack.Screen name="Product" options={{
                    title: 'Products',
                }} component={ProductScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
