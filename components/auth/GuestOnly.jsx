import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({children}) => {
    const {user, authChecked} = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/home')
        }
    }, [user, authChecked])


    if (!authChecked) {
        return (
            <ThemedLoader/>
        )
    }

    if (user) {
        return null; 
    }
    return children
}

export default GuestOnly