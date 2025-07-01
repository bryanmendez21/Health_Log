import { Image, useColorScheme } from 'react-native'

//Image
//import Darklogo from '../assets/img/logo_dark.png'
//import larklogo from '../assets/img/logo_lark.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'light' ? LightLogo : DarkLogo

    return (
        <Image source={logo} {...props} />
        
    )
}

export default ThemedLogo