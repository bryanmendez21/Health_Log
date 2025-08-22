import { useContext } from "react";
import { HealthContext } from "../contexts/HealthContext";

export function useHealth() {
    const context = useContext(HealthContext)
    
    if (!context) {
        throw new Error ('useUser must be used within a HealthProvider')
    }

    return context
}
