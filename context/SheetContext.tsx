import React, { ReactNode, useRef } from 'react'
import ActionSheet from 'react-native-actions-sheet'

type SheetContextType = {
    actionSheetRef: React.RefObject<ActionSheet> | null
}

type propType = {
    children: React.ReactNode
}

const Context = React.createContext<SheetContextType>({
    actionSheetRef: null
})
const Provider = ({ children }: propType) => {
    const actionSheetRef = useRef<ActionSheet>(null)

    return (
        <Context.Provider value={{
            actionSheetRef
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }
