import { useState } from "react"

export const useToggleCompany = () => {
    const [isCompany, setIsCompany] = useState<boolean>()

    const openShare = ():void => setIsCompany(true)
    const closeShare = ():void => setIsCompany(false)
    const toggleCompany = ():void => setIsCompany(!isCompany)

    return {openShare, closeShare, isCompany, toggleCompany}
}