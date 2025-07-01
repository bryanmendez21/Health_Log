import { StyleSheet,} from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const profile = () => {
  return (
    <ThemedView style={styles.container} >
      <ThemedText style={styles.title} title ={true} >profile </ThemedText>

      <Link href='/' >
        <ThemedText>Home</ThemedText>
      </Link>
      <Spacer height={20} />
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

    </ThemedView>
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