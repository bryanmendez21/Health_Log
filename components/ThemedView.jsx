import {  View, useColorScheme } from 'react-native'
import {Colors} from "../constants/Colors"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe = false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark
    
    if (!safe) return (
        <View
            style={[{ backgroundColor: theme.background }, style]} 
            {...props}
        />
    )

    const inserts = useSafeAreaInsets()

    return (
        <View
            style={[{ 
                backgroundColor: theme.background,
                paddingTop:inserts.top,
                paddingBottom: inserts.bottom
            },
                style
            ]} 
            {...props}
        />
    )
}

export default ThemedView