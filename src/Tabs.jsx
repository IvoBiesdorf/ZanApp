
import * as React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Apps from './Apps';
import Sites from './Sites';
import { StyleSheet, Appearance} from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    // const colorScheme = "dark"; //usado para testes
    const colorScheme = Appearance.getColorScheme();
    return (
        <Tab.Navigator 
            initialRouteName="Apps"
            screenOptions={{
                tabBarActiveTintColor: colorScheme === 'dark' ? "tomato": "blue",
                tabBarInactiveTintColor: colorScheme === 'dark' ? "#EEE": "#000",
                tabBarStyle:{backgroundColor:colorScheme === 'dark' ? "#FFF":"#CCC", height: 55, paddingBottom: 5},
                tabBarLabelStyle:{fontSize: 14},
                headerStyle: {
                    backgroundColor: colorScheme === 'dark' ? "#FFF":"#CCC" ,
                },
                headerTintColor: colorScheme === 'dark' ? "#FFF":"#000",
            }}
        >
            <Tab.Screen
                name="Aplicativos úteis"
                component={Apps}
                options={{
                    tabBarLabel: 'Apps',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons name={'apps-sharp'} size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Sites úteis"
                component={Sites}
                options={{
                    tabBarLabel: 'Sites',
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialCommunityIcons name="web" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator> 
    );
}
const styles = StyleSheet.create({
    profile:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    home:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})