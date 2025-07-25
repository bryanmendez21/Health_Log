import { StyleSheet,Text } from 'react-native'
import { Link } from 'expo-router'
import { useUser } from '../../hooks/useUser'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'


const profile = () => {
  const { logout, user, authChecked} = useUser()

  return (
    <ThemedView style={styles.container} >
      <ThemedText style={styles.title} title ={true} >profile </ThemedText>

      {authChecked && user ? (
        <ThemedText>{user.email}</ThemedText>
      ) : (
        <ThemedText>Loading user...</ThemedText>
      )}


      <ThemedText>age,height,weight</ThemedText>

      <Spacer/>
      <ThemedButton onPress={logout}>
        <Text style={{color: '#f2f2f2'}}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontWeight: 'bold', 
    fontSize: 18

  },
})
