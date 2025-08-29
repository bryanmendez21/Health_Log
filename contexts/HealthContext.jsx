import { createContext, useEffect, useState } from "react"
import { databases,client, } from "../lib/appwrite"
import { ID, Permission, Role, Query } from "appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = "689145430002b69de288"
const Sleep_COLLECTION_ID = "689145cd0021349a8b41"
//const MACRO_COLLECTION_ID = "689145ee001f8471dd77"
const WORKOUT_DAY_COLLECTION_ID = "68abca840033e5d679de";
const WORKOUT_COLLECTION_ID = "68abc98e00133f8cc13f";
const WORKOUT_LOG_COLLECTION_ID = "68abc9cc0009484534dd";

export const HealthContext = createContext()

export function HealthProvider({children}) {
    const [sleepLogs, setSleepLogs] = useState([])
    //const [foodLogs, setFoodLogs] = useState([])
    const [workoutDays, setWorkoutDays] = useState([]);
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
  async function fetchWorkoutDays() {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          WORKOUT_DAY_COLLECTION_ID,
          [
            Query.equal('userId', user.$id)
          ]
        )

        setWorkoutDays(response.documents)
        console.log(response.documents)
      } catch (error) {
        console.error("Error fetching workout days:", error.message);
      }
    }

  async function createWorkoutDay(name) {
    if (!user) throw new Error("User not loaded"); // optional safety check

    try {
      const newDay = await databases.createDocument(
        DATABASE_ID,
        WORKOUT_DAY_COLLECTION_ID,
        ID.unique(),
        { userId: user.$id, name },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );

      setWorkoutDays((prev) => [...prev, newDay]);
      return newDay;
    } catch (error) {
      console.error("Error creating workout day:", error.message);
      throw error;
    }
  }

    async function updateWorkoutDay(id, newName) {
      try {
      // const response = await databases.getDocument(...);
      // return response;
      } catch (error) {
        console.error("Error updating workout day:", error.message);
      }
    }

    async function deleteWorkoutDay(id) {
      try {
      // const response = await databases.getDocument(...);
      // return response;
      } catch (error) {
        console.error("Error deleting workout day:", error.message);
      }
    }

    useEffect(() => {
      if (user) {
        fetchWorkoutDays()
      } else {
        setWorkoutDays([])
      }
    }, [user])

    return(
      <HealthContext.Provider
        value={{
            //sleep
            sleepLogs, fetchSleepLogs, fetchSleepLogById, logSleep, deleteSleepLog,
            //workout
            workoutDays, fetchWorkoutDays, createWorkoutDay, updateWorkoutDay, deleteWorkoutDay,
          }}      
        >
          {children}
      </HealthContext.Provider>
    );
}