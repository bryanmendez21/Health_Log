import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark

    return ( 
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
            options={{title: 'Home'}}
            />
            <Tabs.Screen
            name='logging'
            options={{title: 'Log'}}
            />
            <Tabs.Screen
            name='macros'
            options={{title: 'Macros'}}
            />
            <Tabs.Screen
            name='sleep'
            options={{title: 'Sleep'}}
            />
            <Tabs.Screen
            name='profile'
            options={{title: 'Profile'}}
            />

        </Tabs>
    )

}
export default DashboardLayout
