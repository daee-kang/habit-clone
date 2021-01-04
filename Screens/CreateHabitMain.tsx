import React, { useState, createRef, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface Props {

}

const divider = <View
    style={{
        borderBottomColor: '#A9A9A9',
        marginHorizontal: -10,
        borderBottomWidth: 1,
    }}
/>

const CreateHabitMain = (props: Props) => {
    const [habitName, setHabitName] = useState("")
    const nameInputRef: React.RefObject<TextInput> = createRef()

    useEffect(() => {
        setTimeout(() => {
            nameInputRef.current?.focus()
        }, 800)
    }, [])

    return (
        <View>
            <View style={styles.nameForm}>
                <Text style={{ fontSize: 12 }}>NAME</Text>
                <TextInput
                    ref={nameInputRef}
                    style={styles.nameInput}
                    onChangeText={(text: string) => setHabitName(text)}
                    value={habitName}
                    placeholder={'Read a book, Meditate etc.'}
                />
            </View>
            <View style={styles.body}>
                <Text style={{ fontSize: 12 }}>MOTIVATE YOURSELF</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text: string) => setHabitName(text)}
                    value={habitName}
                    placeholder={`Let's do this!`}
                />
                {divider}
                <Text style={{ fontSize: 16, marginVertical: 15 }}>Repeat</Text>
                {divider}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameForm: {
        padding: 20,
        backgroundColor: 'orange'
    },
    nameInput: {
        height: 50,
        width: '100%',
        fontSize: 22,
    },
    body: {
        padding: 20,
        marginTop: 2
    },
    input: {
        height: 40,
        width: '100%',
        fontSize: 18,
        marginVertical: 5,
    }
})

export default CreateHabitMain
