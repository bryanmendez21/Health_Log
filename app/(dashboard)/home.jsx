import { StyleSheet, View,Text, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import { Calendar } from 'react-native-calendars';
// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard';

const Home = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
    <ThemedText style={styles.title} title ={true} >My Goals</ThemedText>
      <Spacer height={20}/>

      <ThemedCard>
        <ThemedText style={styles.cardTitle}>Workout Volume</ThemedText>
        <ThemedText>12,350 lbs lifted this week 💪</ThemedText>
      </ThemedCard>
      <Spacer height={10}/>

      <ThemedCard>
        <ThemedText style={styles.cardTitle}>Today's Macros</ThemedText>
        <ThemedText>Protein: 120g | Carbs: 180g | Fat: 70g | Calories: 2100</ThemedText>
      </ThemedCard>
      <Spacer height={10}/>

      <ThemedCard>
        <ThemedText style={styles.cardTitle}>Today's Sleep</ThemedText>
        <ThemedText>7 hrs 30 min 😴</ThemedText>
      </ThemedCard>
      <Spacer height={10}/>

        <View style={styles.calendarBox}>
          <Calendar />
        </View>


      <ScrollView contentContainerStyle={styles.scrollView}>

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
   calendarBox: {
    borderRadius: 10,
    overflow: 'hidden',
    width: "97%"
  },
}) 
