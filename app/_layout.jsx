import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'


const RootLayout = () => {
  const colorScheme = useColorScheme()


  return (

    <Stack screenOptions={{
        headerStyle: {backgroundColor:'#ddd'},
        headerTintColor: '#333'
    }}>
        <Stack.Screen name='index' options={{title: 'Home'}}/>
        <Stack.Screen name='logging' options={{title: 'Workout'}}/>
        <Stack.Screen name='macros' options={{title: 'Macros'}}/>
        <Stack.Screen name='sleep' options={{title: 'Sleep'}}/>
        <Stack.Screen name='profile' options={{title: 'Profile'}}/>
    </Stack>

  )
}

export default RootLayout

const styles = StyleSheet.create({})




