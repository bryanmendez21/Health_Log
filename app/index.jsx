import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/hp.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Home</Text>

      <Text style={{marginTop: 10, marginBottom:30 }}>
        tracking 
      </Text>

      <Link href='/logging' >log</Link>
      <Link href='/macros' >macros</Link>
      <Link href='/sleep' >sleep</Link>
      <Link href='/profile' >profile</Link>
    </View>
  )
}

export default Home

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
  img: {
    marginVertical: 10,
  },
})