import { StyleSheet, View,Text, ScrollView} from 'react-native';
import { Link } from 'expo-router';
// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
   
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Weekly Progress</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workout Volume</Text>
        <Text>12,350 lbs lifted this week 💪</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Macros</Text>
        <Text>Protein: 120g | Carbs: 180g | Fat: 70g | Calories: 2100</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Sleep</Text>
        <Text>7 hrs 30 min 😴</Text>
      </View>

      <View style={styles.calendar}>
        <Text style={styles.cardTitle}>Workout Calendar</Text>
        <Text>[Calendar Placeholder Here]</Text>
      </View>
    </ScrollView>

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
    fontSize: 22

  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  calendar: {
    backgroundColor: '#e8f0ff',
    padding: 16,
    borderRadius: 12,
  },
}) 
