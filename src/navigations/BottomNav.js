import { View, Text, Center, Pressable } from 'native-base'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../global/styles';
import { StyleSheet } from 'react-native';
import { Entypo, AntDesign , FontAwesome, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons"
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import StackNav from './StackNav';



const Tab = createBottomTabNavigator();
const  CustomTab = ({ children, onPress}) => (
    <Pressable
        onPress={onPress}
        h={70}
        w={70}
        rounded="full"
        bg={colors.main}
        top={-30}
        shadow={2}
    >
        {children}
    </Pressable>
)

const BottomNav = () => {
  return (
    <Tab.Navigator
        backBehavior='Main'
        initialRouteName='Main'
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown:false,
            tabBarHideOnKeyboard:true,
        }}
    >
        <Tab.Screen
            name='Main'
            component={StackNav}
            options={{
                tabBarIcon:({focused}) =>(
                    <Center>
                        {focused ? (
                            <Entypo name="home" size={24} color={colors.main}/>
                        ) : (
                            <AntDesign name="home" size={24} color={colors.black}/>
                        )}
                    </Center>
                )
            }}
        />
        {/**Cart screen bottom nav */}
        <Tab.Screen
            name='Cart'
            component={CartScreen}
            options={{
                tabBarButton: (props) => <CustomTab {...props}/>,
                tabBarIcon:({focused}) =>(
                    <Center>
                        {focused ? (
                            <FontAwesome5 name="shopping-basket" size={24} color={colors.white}/>
                        ) : (
                            <MaterialCommunityIcons name="shopping-outline" size={24} color={colors.white}/>
                        )}
                    </Center>
                )
            }}
        />
        {/** Profile bottom nav */}
        <Tab.Screen
            name='Profil'
            component={ProfileScreen}
            options={{
                tabBarIcon:({focused}) =>(
                    <Center>
                        {focused ? (
                            <FontAwesome name="user" size={24} color={colors.main} />
                        ) : (
                            <AntDesign name="user" size={24} color={colors.black}/>
                        )}
                    </Center>
                )
            }}
        />
    </Tab.Navigator>
  )
};


const styles = StyleSheet.create({
    tab:{
        elevation:0,
        backgroundColor:colors.white,
        height:60,
    },
})

export default BottomNav