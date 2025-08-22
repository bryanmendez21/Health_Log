import { Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
import { HealthProvider } from '../contexts/HealthContext'


const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <UserProvider>
      <HealthProvider>
        <StatusBar value='auto' />
        <Stack screenOptions={{
            headerStyle: {backgroundColor:theme.navBackground},
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name='(auth)' options={{ headerShown: false }}/>
            <Stack.Screen name='(dashboard)' options={{ headerShown: false }}/>
        </Stack>
      </HealthProvider>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})




