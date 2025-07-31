import { StyleSheet, View,Text, ScrollView} from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'


const logging = () => {
  return (
    <ThemedView style={styles.container}  safe={true}>

      <ThemedText style={styles.title} title ={true} >Log </ThemedText>
      <ThemedText> log your workouts here </ThemedText>
    <View style={styles.container}>
      <Text style={styles.header}>Log Workout</Text>
      <Text>[Workout logging UI here]</Text>
    </View>
  
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
    fontSize: 22

  },
})
