import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View>
      <Text style={styles.title} >profile </Text>

      <Link href='/' >home</Link>
      <Link href='/macros' >macros</Link>
      <Link href='/sleep' >sleep</Link>
      <Link href='/logging' >log</Link>
    </View>
  )
}

export default profile

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