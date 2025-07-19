import { StyleSheet, } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'


const logging = () => {
  return (
    <ThemedView style={styles.container} >

      <ThemedText style={styles.title} title ={true} >log </ThemedText>
      <ThemedText> log your workouts here </ThemedText>

    </ThemedView>

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
