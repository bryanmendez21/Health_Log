import { StyleSheet, } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const sleep = () => {
  return (
    <ThemedView style={styles.container} safe={true} >
      <ThemedText style={styles.title} title ={true} >sleep </ThemedText>
      <ThemedText>sleep 7-9 hrs</ThemedText>

    </ThemedView>
  )
}

export default sleep

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',

  },
  title: {
    fontWeight: 'bold', 
    fontSize: 18

  },
})
