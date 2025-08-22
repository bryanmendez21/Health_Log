import { View, useColorScheme } from 'react-native'
import { Colors } from "../constants/Colors"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Children } from 'react'

const ThemedHeader = ({ style, safe = false, heightPercent = 10, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark
  const inserts = useSafeAreaInsets()

  // Calculate height based on percentage of screen height
  const headerStyle = {
    backgroundColor: theme.header,
    height: `${heightPercent}%`,
    width: '100',
    paddingTop:inserts.top,
    paddingBottom: inserts.bottom,
  }

  return (
    <View style={[headerStyle, style]} {...props}>
        {props.children}
    </View>
  )
}

export default ThemedHeader
