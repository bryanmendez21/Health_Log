import { StyleSheet, View,Text, ScrollView} from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const sleep = () => {
  return (
    <ThemedView style={styles.container} safe={true} >
      <ThemedText style={styles.title} title ={true} >Sleep </ThemedText>

      <ThemedText style={styles.header}>Sleep Tracker</ThemedText>

      <View style={styles.inputSection}>
        <ThemedText>Sleep Time: 11:00 PM</ThemedText>
        <ThemedText>Wake Time: 6:30 AM</ThemedText>
      </View>

      <ThemedText style={styles.duration}>You slept: 7 hrs 30 min</ThemedText>

      <View style={styles.graph}>
        <ThemedText>[Weekly sleep graph placeholder]</ThemedText>
      </View>
    
    </ThemedView>
  )
}

export default sleep

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },
    title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 60,
    textAlign: 'center',
  },
  inputSection: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  duration: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  graph: {
    backgroundColor: '#e0f7ff',
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
