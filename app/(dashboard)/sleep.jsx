import { StyleSheet,Keyboard, View, Text, TextInput, Button, ScrollView, TouchableWithoutFeedback, Platform} from 'react-native'
import { Link } from 'expo-router'
import { useHealth } from "../../hooks/useHealth"
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'


// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Sleep = () => {

  const [sleepTime, setSleepTime] = useState(null);
  const [wakeTime, setWakeTime] = useState(null);
  const [hoursSlept, setHoursSlept] = useState("");
  const [loading, setLoading] = useState(false)

  const [showSleepPicker, setShowSleepPicker] = useState(false);
  const [showWakePicker, setShowWakePicker] = useState(false);

  const { logSleep } = useHealth();

  const handleSubmit = async () => {
    if (!sleepTime || !wakeTime || !hoursSlept) {
       alert("Please fill out all fields");
     return; 
    }

    setLoading(true)
    try{
      await logSleep ({ sleepTime: sleepTime.toISOString(), wakeTime: wakeTime.toISOString(), hoursSlept: parseFloat(hoursSlept)})

      // reset fields
      setSleepTime(null)
      setWakeTime(null)
      setHoursSlept("")

    } catch (error) {
      console.error("Error logging sleep:", error);
      alert("Failed to log sleep.");
    } finally {
      setLoading(false); // stop loading 
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safe={true} >
        <ThemedText style={styles.title} title ={true} >Sleep Log</ThemedText>

          {/* Sleep Time Picker */}
          <Button
            title={sleepTime ? sleepTime.toLocaleString() : "Select Sleep Time"}
            onPress={() => setShowSleepPicker(true)}
          />
          {showSleepPicker && (
            <DateTimePicker
              value={sleepTime || new Date()}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                setShowSleepPicker(Platform.OS === 'ios'); // keep open on iOS
                if (selectedDate) setSleepTime(selectedDate);
              }}
            />
          )}
          <Spacer/>


          {/* Wake Time Picker */}
          <Button
            title={wakeTime ? wakeTime.toLocaleString() : "Select Wake Time"}
            onPress={() => setShowWakePicker(true)}
          />
          {showWakePicker && (
            <DateTimePicker
              value={wakeTime || new Date()}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                setShowWakePicker(Platform.OS === 'ios');
                if (selectedDate) setWakeTime(selectedDate);
              }}
            />
          )}
          <Spacer/>


          <ThemedTextInput
            style={styles.input}
            placeholder="Hours Slept"
            keyboardType="numeric"
            value={hoursSlept}
            onChangeText={setHoursSlept}
          />
          <Spacer/>


          <ThemedButton onPress={handleSubmit} disabled={loading}>
            <Text style={{color: '#fff'}}>
              {loading ? "saving..." : "Log Sleep"}
            </Text>
          </ThemedButton>
          <Spacer/>


        <View style={styles.graph}>
          <ThemedText>[Weekly sleep graph placeholder]</ThemedText>
        </View>
      
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Sleep

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
  input: {
    padding: 20,
    borderRadius: 6,
    borderWidth: 1,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  graph: {
    backgroundColor: '#e0f7ff',
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
