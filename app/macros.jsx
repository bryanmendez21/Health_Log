import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const macros = () => {
  return (
    <View>
      <Text style={styles.title} >macros </Text>

      <Link href='/' >home</Link>
      <Link href='/logging' >log</Link>
      <Link href='/sleep' >sleep</Link>
      <Link href='/profile' >profile</Link>
    </View>
  )
}

export default macros

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