import { StyleSheet, View,Text, ScrollView} from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const macros = () => {
  return (
    <ThemedView style={styles.container}  safe={true}>
      <ThemedText style={styles.title} title ={true} >Macros </ThemedText>
      <ThemedText> Keep track of what you eat </ThemedText>
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.header}>Today's Macros</ThemedText>
      <ThemedView style={styles.row}>
        <ThemedText style={styles.label}>Protein</ThemedText>
        <ThemedText>130g</ThemedText>
      </ThemedView>
      <View style={styles.row}>
        <Text style={styles.label}>Carbs</Text>
        <Text>200g</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Fat</Text>
        <Text>80g</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Saturated Fat</Text>
        <Text>20g</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Calories</Text>
        <Text>2300 kcal</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Fiber</Text>
        <Text>30g</Text>
      </View>
    </ScrollView>
    </ThemedView>
  )
}

export default macros

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',


  },
  title: {
    fontWeight: 'bold', 
    fontSize: 22

  },
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 4,
  },
})
