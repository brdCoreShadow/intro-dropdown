import { useState } from "react"

export const useToggleFeatures = () => {
    const [isFeatures, setIsFeatures] = useState<boolean>()

    const openShare = ():void => setIsFeatures(true)
    const closeShare = ():void => setIsFeatures(false)
    const toggleFeatures = ():void => setIsFeatures(!isFeatures)

    return {openShare, closeShare, isFeatures, toggleFeatures}
}