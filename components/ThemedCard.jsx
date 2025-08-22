import { View, useColorScheme, StyleSheet,  Dimensions } from 'react-native'
import {Colors} from "../constants/Colors"

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark
    
    return (
        <View 
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style]} 
            {...props}
        />   
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
    width: "97%", 
    borderRadius: 8,
    paddingVertical: 35,  // your vertical padding
    paddingHorizontal: 30, 
    alignSelf: "center",  // centers the card horizontally
    }

})
