import { StyleSheet,} from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const profile = () => {
  return (
    <ThemedView style={styles.container} >
      <ThemedText style={styles.title} title ={true} >profile </ThemedText>
      <ThemedText>age,height,weight</ThemedText>

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
