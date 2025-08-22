import { createContext, useState } from "react"
import { databases } from "../lib/appwrite"
import { ID, Permission, Role } from "appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = "689145430002b69de288"
const Sleep_COLLECTION_ID = "689145cd0021349a8b41"
//const MACRO_COLLECTION_ID = "your_macro_collection_id"
//const WORKOUT_COLLECTION_ID = "your_workout_collection_id"

export const HealthContext = createContext()

export function HealthProvider({children}) {
    const [sleepLogs, setSleepLogs] = useState([])
    //const [foodLogs, setFoodLogs] = useState([])
    //const [workoutLogs, setWorkoutLogs] = useState([])
    const { user } = useUser()

  // Fetch all sleep logs
  async function fetchSleepLogs() {
    try {
      // Example Appwrite call
      // const response = await databases.listDocuments(...);
      // setSleepLogs(response.documents);
    } catch (error) {
      console.error("Error fetching sleep logs:", error.message);
    }
  }

  // Fetch a single sleep log by ID
  async function fetchSleepLogById(id) {
    try {
      // const response = await databases.getDocument(...);
      // return response;
    } catch (error) {
      console.error("Error fetching sleep log by ID:", error.message);
    }
  }

  // Create a new sleep log
  async function logSleep(data) {
    try {
      const newSleep = await databases.createDocument(
        DATABASE_ID,
        Sleep_COLLECTION_ID,
        ID.unique(),
        {...data, userId: user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
      // Update local state so your app reflects the new entry
      setSleepLogs((prev) => [...prev, newSleep]);

      // Return the new sleep log in case the UI needs it
      return newSleep;

    } catch (error) {
      console.error("Error creating sleep log:", error.message);
      throw error; // Rethrow to be caught by handleSubmit
    }
  }

  // Delete a sleep log
  async function deleteSleepLog(id) {
    try {
      // await databases.deleteDocument(...);
      // setSleepLogs(sleepLogs.filter(log => log.$id !== id));
    } catch (error) {
      console.error("Error deleting sleep log:", error.message);
    }
  }

    // Food Functions
  //const getFoodLogs = async () => { /* ... */ };
  //const createFoodLog = async () => { /* ... */ };
  // etc.

  // Workout Functions
  //const getWorkoutLogs = async () => { /* ... */ };
  //const createWorkoutLog = async () => { /* ... */ };
  // etc.

    return(
        <HealthContext.Provider
            value={{sleepLogs, fetchSleepLogs, fetchSleepLogById, logSleep, deleteSleepLog,}}
        >
            {children}
        </HealthContext.Provider>
    );
}