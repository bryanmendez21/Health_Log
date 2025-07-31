import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import UserOnly from '../../components/auth/UserOnly';

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark

    return ( 
        <UserOnly>
            <Tabs
                screenOptions={{
                    headerShown: false, 
                    tabBarStyle: {
                        backgroundColor: theme.navBackground,
                        paddingTop: 10,
                        height: 90
                    },
                    tabBarActiveTintColor: theme.iconColorFocused,
                    tabBarInactiveTintColor: theme.iconColor
                }}

            >
                <Tabs.Screen
                name='home'
                options={{title: 'Home', tabBarIcon: ({focused}) =>(
                    <Ionicons
                        size={24}
                        name={focused ? "home" : "home-outline"}
                        color={focused ? theme.iconColorFocused : theme. iconColor}
                    />
                )}}
                />
                <Tabs.Screen
                name='logging'
                options={{title: 'Log', tabBarIcon: ({focused}) =>(
                    <Ionicons
                        size={24}
                        name={focused ? "log-in" : 'log-in-outline'}
                        color={focused ? theme.iconColorFocused : theme. iconColor}
                    />
                )}}
                />
                <Tabs.Screen
                name='macros'
                options={{title: 'Macros', tabBarIcon: ({focused}) =>(
                    <Ionicons
                        size={24}
                        name={focused ? "nutrition" : "nutrition-outline"}
                        color={focused ? theme.iconColorFocused : theme. iconColor}
                    />
                )}}
                />
                <Tabs.Screen
                name='sleep'
                options={{title: 'Sleep', tabBarIcon: ({focused}) =>(
                    <Ionicons
                        size={24}
                        name={focused ? "moon" : "moon-outline"}
                        color={focused ? theme.iconColorFocused : theme. iconColor}
                    />
                )}}
                />
                <Tabs.Screen
                name='profile'
                options={{title: 'Profile', tabBarIcon: ({focused}) =>(
                    <Ionicons
                        size={24}
                        name={focused ? "person" : "person-outline"}
                        color={focused ? theme.iconColorFocused : theme. iconColor}
                    />
                )}}
                />

            </Tabs>
        </UserOnly>
    )

}
export default DashboardLayout 
