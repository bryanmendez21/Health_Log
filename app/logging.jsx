import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'


const logging = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >logging </Text>

      <Link href='/' >home</Link>
      <Link href='/macros' >macros</Link>
      <Link href='/sleep' >sleep</Link>
      <Link href='/profile' >profile</Link>
    </View>

  )
}

export default logging

const styles = StyleSheet.create({
      container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontWeight: 'bold', 
    fontSize: 18

  },
})
