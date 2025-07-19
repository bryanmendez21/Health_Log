import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'

const login = () => {
  const[email, setEmail] = useState ('')
  const[password, setPassword] = useState ('')

  const handleSubmit = () => (
    console.log('login form submitted', email, password)
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} >


        <Spacer/>
        <ThemedText title={true} style={styles.title}>
            Login to your account
        </ThemedText>
        <Spacer/>

        <ThemedTextInput 
          style={{ width: '80%', marginBottom: 20}}
          placeholder='Email' 
          keyboardType= 'email-address'
          onChangeText ={setEmail}
          value= {email}
        />
        <ThemedTextInput 
          style={{ width: '80%', marginBottom: 20}}
          placeholder='Password' 
          onChangeText ={setPassword}
          value= {password}
          secureTextEntry
        />

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
    </TouchableWithoutFeedback>
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