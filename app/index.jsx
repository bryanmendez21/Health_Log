import { StyleSheet, Text, } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/hp.png'
// themed components
import ThemedView from '../components/ThemedView'
//import ThemedLogo from '../components/ThemedLogo'
// <ThemedLogo style={styles.img} />
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
   

      <ThemedText style={styles.title} title ={true}>
        Home
      </ThemedText>

      <ThemedText style={{marginTop: 10, marginBottom:30 }}>
        tracking 
      </ThemedText>

      <Link href='/logging' >
        <ThemedText>Log</ThemedText>
      </Link>
      <Spacer height={20} />
      <Link href='/macros' >
        <ThemedText>Macros</ThemedText>
      </Link>
      <Spacer height={20} /> 
      <Link href='/sleep' >
      <ThemedText>Sleep</ThemedText>
      </Link>
      <Spacer height={20} />
      <Link href='/profile' >
      <ThemedText>Profile</ThemedText>
      </Link>

      <Spacer height={100} />
      <Link href="/login"> 
          <ThemedText> 
              Login 
          </ThemedText>    
      </Link>
    </ThemedView>
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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})