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
      <Spacer height={5}/>

      <ThemedCard>
        <ThemedText style={styles.cardTitle}>Today's Macros</ThemedText>
        <ThemedText>Protein: 120g | Carbs: 180g | Fat: 70g | Calories: 2100</ThemedText>
      </ThemedCard>
      <Spacer height={5}/>

      <ThemedCard>
        <ThemedText style={styles.cardTitle}>Today's Sleep</ThemedText>
        <ThemedText>7 hrs 30 min 😴</ThemedText>
      </ThemedCard>
      <Spacer height={5}/>

      <View style={styles.calendarBox}>
        <Calendar
          style={styles.calendar}
          theme={calendarTheme}
          enableSwipeMonths={true}
          hideExtraDays={false} // keep extra days visible, but dimmed
        />
      </View>


      <ScrollView contentContainerStyle={styles.scrollView}>

      </ScrollView>
    </ThemedView> 
  )
}

export default Home


const calendarTheme = {
  backgroundColor: "#121212",
  calendarBackground: "#121212",
  textSectionTitleColor: "#B0BEC5",
  selectedDayBackgroundColor: "#00b4d8", // cyan highlight
  selectedDayTextColor: "#000",
  todayTextColor: "#FF5252",
  monthTextColor: "#E0E0E0",
  arrowColor: "#00b4d8", // cyan arrows
 
  'stylesheet.day.basic': {
    text: {
      color: '#fcf5f5ff',
      fontWeight: 'bold', 
    },
  },
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

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
  calendar: {
    borderRadius: 10,
  },
}) 
