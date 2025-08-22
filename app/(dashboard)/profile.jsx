import { StyleSheet,Text,View, Image, TouchableOpacity,TextInput,Button} from 'react-native'
import { useUser } from '../../hooks/useUser'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';


// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'


// Conversion functions
const convertCmToFeetInches = (cm) => {
  const inches = cm / 2.54
  const feet = Math.floor(inches / 12)
  const remainingInches = Math.round(inches % 12)
  return `${feet} ft ${remainingInches} in`
}

const convertKgToLbs = (kg) => {
  const lbs = kg * 2.20462
  return `${Math.round(lbs)} lbs`
}


const profile = () => {
  const { logout, user, authChecked} = useUser()

  // Simulated values (replace with real user data later)
  const [useMetric, setUseMetric] = useState(true)
  const weightKg = 85
  const heightCm = 183
  const age = 26
 

  if (!authChecked) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText>Loading user...</ThemedText>
      </ThemedView>
    )
  }


  return (
    <ThemedView style={styles.container} safe={true}>
       {/* Header */}
    <ThemedText style={styles.title} title ={true} >Profile </ThemedText>


      {/* Avatar + Name Row */}
      <View style={styles.profileRow}>
        <TouchableOpacity style={styles.avatarContainer}>
          {user?.photoURL ? (
            <Image
              source={{ uri: user.photoURL }}
              style={styles.avatar}
            />
          ) : (
            <Ionicons
              name="person"
              size={80}
              color='#aba594ff'
            />
          )}
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <ThemedText style={styles.username}>
            {user?.username || user?.email || 'Anonymous'}
          </ThemedText>
        </View>
      </View>

      <Spacer/>


      {/* User Stats */}
      <View style={styles.statsContainer}>
        <StatItem
          label="Weight"
          value={useMetric ? `${weightKg} kg` : convertKgToLbs(weightKg)}
        />
        <StatItem
          label="Height"
          value={useMetric ? `${heightCm} cm` : convertCmToFeetInches(heightCm)}
        />
        <StatItem label="Age" value={age.toString()} />
      </View>

    <Spacer height={20}/>

      {/* Unit Toggle */}
      <TouchableOpacity
        onPress={() => setUseMetric(prev => !prev)}
        style={styles.unitToggleButton}
      >
        <Text style={styles.unitToggleText}>
          Switch to {useMetric ? 'US Units' : 'Metric'}
        </Text>
      </TouchableOpacity>

      {/* logout */}
      <View style={styles.logoutContainer}>
        <ThemedButton onPress={logout} style= {{ backgroundColor: Colors.warning }}>
          <Text style={{color: '#f2f2f2'}}>Logout</Text>
        </ThemedButton>
      </View>
    </ThemedView>
  )
}

const StatItem = ({ label, value }) => (
  <View style={styles.statBox}>
    <ThemedText style={styles.statValue}>{value}</ThemedText>
    <ThemedText style={styles.statLabel}>{label}</ThemedText>
  </View>
)

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 24,
    textAlign: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statBox: {
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 12,
    borderColor: '#ccc',
    alignItems: 'center',
    width: 120,
    marginHorizontal: 8,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  unitToggleButton: {
  paddingVertical: 6,
  paddingHorizontal: 12,
  backgroundColor: 'transparent',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#ccc',
  alignSelf: 'center',
  },

  unitToggleText: {
    color: '#fff',
    fontSize: 14,
  },
  logoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 16,
    alignItems: 'center',
  },
})
