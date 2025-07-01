import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const login = () => {

  const handleSubmit = () => (
    console.log('login form submitted')
  )

  return (
    <ThemedView style={styles.container} >


        <Spacer/>
        <ThemedText title={true} style={styles.title}>
            Login to your account
        </ThemedText>

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2 '}}> Login </Text>
        </ThemedButton>

        <Spacer height={100}/>
        <Link href="/register"> 
            <ThemedText style={{textAlign: 'center'}}> 
                Register instead
            </ThemedText>    
        </Link>
        <Spacer height={100}/>
        <Link href="/"> 
            <ThemedText style={{textAlign: 'center'}}> 
                Home
            </ThemedText>    
        </Link>

    </ThemedView>
  )
}

export default login

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
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  }
})