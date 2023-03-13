import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../src/pages/Home';
import BemVindo from '../src/pages/BemVindo';
import EscolherApp from '../src/pages/EscolherApp';


import {Ionicons} from '@expo/vector-icons'


const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: '#FFC963',
                drawerActiveTintColor: '#000', 
                drawerStyle:{
                    backgroundColor: '#E5E5E5'},
                drawerLabelStyle:{
                    fontSize: 19,
                
                }
                
            }}
        >
            <Drawer.Screen
                name = "Home"
                component = {Home}
                options={{
                title: 'Home',
                headerTintColor: '#fff',
                headerTransparent: true,
                headerTitle: (''),
                

                drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'beer' : 'beer-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name = "BemVindo"
                component = {BemVindo}
                options={{
                    title: 'BemVindo',
                    headerTintColor: '#fff',
                    headerTransparent: true,
                    headerTitle: (''),
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'beer' : 'beer-outline'}
                            color={color}
                            size={size}
                        />
                
            
                    )
                }}
            />
            <Drawer.Screen
                name = "EscolherApp"
                component = {EscolherApp}
                options={{
                title: 'EscolherApp',
                headerTintColor: '#fff',
                headerTransparent: true,
                headerTitle: (''),
                

                drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'beer' : 'beer-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}

                
            />
            
            
        </Drawer.Navigator>
    )
}
