import { StyleSheet, } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const sleep = () => {
  return (
    <ThemedView style={styles.container} >
      <ThemedText style={styles.title} title ={true} >sleep </ThemedText>

      <Link href='/' >
        <ThemedText>Home</ThemedText>
      </Link>
      <Spacer height={20} />
      <Link href='/logging' >
        <ThemedText>Log</ThemedText>
      </Link>
      <Spacer height={20} /> 
      <Link href='/marcos' >
      <ThemedText>Macros</ThemedText>
      </Link>
      <Spacer height={20} />
      <Link href='/profile' >
      <ThemedText>Profile</ThemedText>
      </Link>

    </ThemedView>
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