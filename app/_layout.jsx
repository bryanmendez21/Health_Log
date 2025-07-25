import { Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'


const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <UserProvider>
      <StatusBar value='auto' />
      <Stack screenOptions={{
          headerStyle: {backgroundColor:theme.navBackground},
          headerTintColor: theme.title,
      }}>
          <Stack.Screen name='(auth)' options={{ headerShown: false }}/>
          <Stack.Screen name='(dashboard)' options={{ headerShown: false }}/>
        {/*  <Stack.Screen name='index' options={{title: 'Home'}}/>
          <Stack.Screen name='logging' options={{title: 'Workout'}}/>
          <Stack.Screen name='macros' options={{title: 'Macros'}}/>
          <Stack.Screen name='sleep' options={{title: 'Sleep'}}/>
          <Stack.Screen name='profile' options={{title: 'Profile'}}/> */}
      </Stack>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})




