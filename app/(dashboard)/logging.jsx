import { StyleSheet, FlatList, View,Text, ScrollView,TextInput,TouchableOpacity,Modal,TouchableWithoutFeedback} from 'react-native'
import { Link } from 'expo-router'
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { useHealth } from "../../hooks/useHealth"


// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedHeader from '../../components/ThemedHeader';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';

// ---------------- Header Menu Component ----------------

const HeaderMenuModal = ({ onSelect }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Ionicons name="menu" size={35} color="cyan" />
      </TouchableOpacity>

      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() =>  setMenuVisible(false) }>  
          <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalBox}>

              <TouchableOpacity
                onPress={() => { setMenuVisible(false); onSelect("log"); }}
              >
                <Text style={styles.modalText}>Log</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { setMenuVisible(false); onSelect("history"); }}
              >
                <Text style={styles.modalText}>History</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { setMenuVisible(false); onSelect("graph"); }}
              >
                <Text style={styles.modalText}>Graph</Text>
              </TouchableOpacity>

            </View>
          </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};


// ---------------- Logging Page ----------------
const logging = () => {
  const { user, workoutDays, createWorkoutDay, fetchWorkoutDays } = useHealth();
  const [view, setView] = useState("log");
  const [day, setDay] = useState(""); 

  const [modalVisible, setModalVisible] = useState(false);
  const [newDayName, setNewDayName] = useState("");

  // Fetch workout days when component mounts or user changes
  useEffect(() => {
    if (!user) return;

    const loadDays = async () => {
      try {
        await fetchWorkoutDays();
      } catch (e) {
        console.error(e);
      }
    };

    loadDays();
  }, [user]);

  const handleAddDay = async () => {
    if (!newDayName) return;

    try {
      const newDay = await createWorkoutDay(newDayName); // no user.$id needed
      setDay(newDay.name);
      setNewDayName("");
      setModalVisible(false);
    } catch (error) {
      console.error("Failed to create workout day:", error);
    }
  };

  return (
    <ThemedView style={styles.container}  safe={true}>
      
      {/*Header*/}
      <ThemedHeader>
        <View style={styles.headerRow}>             
                                
          <HeaderMenuModal onSelect={setView} />

          <ThemedText style={styles.title} title={true}>
            Workout Log
          </ThemedText>

           
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="add-circle-outline" size={35} color="cyan"/>
          </TouchableOpacity>
        
        </View>
      </ThemedHeader>

      {/* Modal for adding new day */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor:'#1e1e1e', padding:20, borderRadius:10, width:300 }}>
            <Text style={{ color:'cyan', marginBottom:10 }}>Enter Day Name:</Text>
            <TextInput
              style={{ backgroundColor:'#2a2a2a', color:'white', padding:10, borderRadius:5 }}
              value={newDayName}
              onChangeText={setNewDayName}
              placeholder="Add Day"
              placeholderTextColor="#888"
            />
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:10 }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color:'red' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAddDay}>
                <Text style={{ color:'cyan' }}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Spacer height={10}/>
      
      {/* View */}
      <ScrollView contentContainerStyle={styles.scrollView}>
          {view === "log" && (
          <>
            {/* Workout Days Buttons */}
            <ThemedCard>
              <FlatList
                data={workoutDays}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id || item.$id || item.name}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item }) => (
                  <ThemedButton
                    style={styles.smallButton}
                    onPress={() => setDay(item.name)}
                  >
                    <ThemedText style={styles.sBText}>{item.name}</ThemedText>
                  </ThemedButton>
                )}
              />
            </ThemedCard>

            <Spacer height={5}/>

            {/* Workout Day Cards */}
            {workoutDays
              .filter(d => d.name === day)  // only the selected day
              .map(d => (
                <ThemedCard key={d.id || d.$id || d.name}>
                  <ThemedText style={styles.cardTitle}>{d.name} Day</ThemedText>
                  <ThemedText>Add {d.name} Workouts...</ThemedText>
                </ThemedCard>
            ))}


          </>
        )}
      </ScrollView>
    </ThemedView>

  )
}

export default logging

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
    cardTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1f1f22',
    paddingHorizontal: 20, // overrides big padding
    paddingVertical: 10,
    marginHorizontal: 10,   // spacing between buttons
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#141414ff", 
  },
  sBText:{
    fontSize: 22,
    fontWeight: "bold",
  },
  modalBackground: { flex:1,
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'rgba(0,0,0,0.5)' 
  },

  modalBox: {
    backgroundColor:'#1e1e1e', 
    padding:20, 
    borderRadius:10, 
    minWidth:150 
  },

  modalText: { 
    color:'cyan', 
    paddingVertical:5 
  },
})
