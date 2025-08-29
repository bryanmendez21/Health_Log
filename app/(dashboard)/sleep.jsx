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
import ThemedCard from '../../components/ThemedCard'
import ThemedHeader from '../../components/ThemedHeader'

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
        <ThemedHeader>
          <View style={styles.headerRow}>   
            <ThemedText style={styles.title} title ={true} >Sleep Log</ThemedText>
          </View>
        </ThemedHeader>
        <Spacer height = {10}/>
          {/* Grey Box for Inputs */}
          <ThemedCard style={styles.card}>

            <Spacer height={10} />
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

            {/* Hours Slept Input */}
            <ThemedTextInput
              style={styles.input}
              placeholder="Hours Slept"
              keyboardType="numeric"
              value={hoursSlept}
              onChangeText={setHoursSlept}
            />
            <Spacer/>

            {/* Submit Button */}
            <ThemedButton onPress={handleSubmit} disabled={loading}>
              <Text style={{color: '#fff'}}>
                {loading ? "saving..." : "Log Sleep"}
              </Text>
            </ThemedButton>
          </ThemedCard>  

          <Spacer height = {5}/>

          {/* Graph Placeholder */}
          <ThemedCard>
            <View style={styles.graph}>
              <ThemedText>[Weekly sleep graph placeholder]</ThemedText>
            </View>
        </ThemedCard>

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
    headerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
  },
})
