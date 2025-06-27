import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const sleep = () => {
  return (
    <View>
      <Text style={styles.title} >sleep </Text>

      <Link href='/' >home</Link>
      <Link href='/macros' >macros</Link>
      <Link href='/logging' >log</Link>
      <Link href='/profile' >profile</Link>
    </View>
  )
}

export default sleep

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