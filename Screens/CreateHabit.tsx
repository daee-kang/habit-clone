import React, { createRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native'
import ActionSheet from 'react-native-actions-sheet'

interface Props {
    asRef: React.RefObject<ActionSheet>
}

const CreateHabit = ({ asRef }: Props) => {
    const [habitName, setHabitName] = useState("")
    const nameInputRef: React.RefObject<TextInput> = createRef()

    const focusOnOpen = () => {
        setTimeout(() => {
            nameInputRef.current?.focus()
        }, 500)
    }

    let divider = <View
        style={{
            borderBottomColor: '#A9A9A9',
            marginHorizontal: -10,
            borderBottomWidth: 1,
        }}
    />

    return (
        <ActionSheet ref={asRef} onOpen={focusOnOpen} keyboardShouldPersistTaps={'always'}>
            <View style={styles.sheet}>
                <View style={styles.header}>
                    <View style={styles.navigation}>
                        <Text
                            style={styles.buttons}
                            onPress={() => asRef.current?.hide()}
                        >
                            Cancel
                        </Text>
                        <Text style={styles.title}>Create a Habit</Text>
                        <Text style={styles.buttons}>Save</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 12 }}>NAME</Text>
                        <TextInput
                            ref={nameInputRef}
                            style={styles.nameInput}
                            onChangeText={(text: string) => setHabitName(text)}
                            value={habitName}
                            placeholder={'Read a book, Meditate etc.'}
                        />
                    </View>
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
        </ActionSheet>
    )
}

const styles = StyleSheet.create({
    sheet: {
        height: Platform.OS === 'android' ? '95%' : '98%',
    },
    header: {
        height: 175,
        backgroundColor: 'orange',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20
    },
    navigation: {
        height: 80,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'san-francisco-bold',
        fontSize: 18
    },
    buttons: {
        marginTop: 2,
        fontSize: 16
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

export default CreateHabit
