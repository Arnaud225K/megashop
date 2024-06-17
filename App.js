import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import NotVerifyScreen from "./src/screens/NotVerifyScreen";
import SingleProductScreen from "./src/screens/SingleProductScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ShippingScreen from "./src/screens/ShippingScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import PlaceOrderScreen from "./src/screens/PlaceOrderScreen";
import OrderScreen from "./src/screens/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/navigations/BottomNav";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true}/>
          <Stack.Navigator
            initialRouteName="Login" 
            screenOptions={{
              headerShown:false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Order" component={OrderScreen}/>
            <Stack.Screen name="Bottom" component={BottomNav}/>
          </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

