import { StyleSheet, } from 'react-native';
import { Link } from 'expo-router';
// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
   

      <ThemedText style={styles.title} title ={true}>
        Home
      </ThemedText>

      <ThemedText style={{marginTop: 10, marginBottom:30 }}>
        track your workouts,marcos and sleep 
      </ThemedText>

      <Spacer height={100} />
      <Link href="/login"> 
          <ThemedText> 
              Login 
          </ThemedText>    
      </Link>
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
    fontSize: 18

  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
}) 
