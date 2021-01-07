import React, { useState, createRef, useEffect, useContext, useRef } from 'react'
import { View, Text, TextInput, StyleSheet, Switch, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Context } from '../context/SheetContext'
import { StackNavigationProp } from '@react-navigation/stack'
import ColorPicker from './ColorPicker'
import COLORS from '../consts/colors'


const divider = <View
    style={{
        borderBottomColor: '#A9A9A9',
        marginHorizontal: -10,
        borderBottomWidth: 1,
    }}
/>

//i really don't wanna deal with this navigation prop type bruh
const CreateHabitMain = ({ navigation }: any) => {
    const { actionSheetRef } = useContext(Context)
    const nameInputRef: React.RefObject<TextInput> = createRef()

    const [habitName, setHabitName] = useState("")
    const [motivateQuote, setMotivateQuote] = useState("")
    const [remindMe, setRemindMe] = useState(false)
    const [timesPerWeek, setTimesPerWeek] = useState(1);
    const [color, setColor] = useState<string>(COLORS.blue)

    const [colorEditorOpen, setColorEditorOpen] = useState(false)

    useEffect(() => {
        const item = Object.values(COLORS)
        setColor(item[Math.floor(Math.random() * item.length)])

        setTimeout(() => {
            nameInputRef.current?.focus()
        }, 800)
    }, [])

    const getRegularityDisplayText = (num: Number) => {
        switch (num) {
            case 1: {
                return 'Once per week'
            }
            case 2: {
                return 'Twice per week'
            }
            case 3: {
                return '3 times per week'
            }
            case 4: {
                return '4 times per week'
            }
            case 5: {
                return '5 times per week'
            }
            case 6: {
                return '6 times per week'
            }
            case 7: {
                return 'Everyday'
            }
            default: {
                `how'd you get here`
            }
        }
    }

    return (
        <View style={{ height: '100%' }}>
            <View style={[styles.navigation, { backgroundColor: color }]}>
                <Text
                    style={styles.buttons}
                    onPress={() => actionSheetRef?.current?.hide()}>
                    Cancel
                </Text>
                <Text style={styles.title}>Create a Habit</Text>
                <Text style={styles.buttons}>Save</Text>
            </View>

            <View style={[styles.nameForm, { backgroundColor: color }]}>
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
                    onChangeText={(text: string) => setMotivateQuote(text)}
                    value={motivateQuote}
                    placeholder={`Let's do this!`}
                />
                {divider}
                <TouchableOpacity style={styles.tab} activeOpacity={1}
                    onPress={() => navigation.navigate("repeat", {
                        timesPerWeek,
                        setTimesPerWeek,
                        getRegularityDisplayText
                    })}>
                    <Text style={{ fontSize: 16, flex: 1 }}>Repeat</Text>
                    <Text style={{ fontSize: 16 }}>{getRegularityDisplayText(timesPerWeek)}</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color={"gray"} />
                </TouchableOpacity>
                {divider}
                <TouchableOpacity style={styles.tab} activeOpacity={1}
                    onPress={() => setColorEditorOpen(true)}>
                    <Text style={{ fontSize: 16, flex: 1 }}>Choose Color</Text>
                    <View style={[styles.colorCircle, { backgroundColor: color }]} />
                </TouchableOpacity>
                {divider}
                <TouchableOpacity style={styles.tab} activeOpacity={1}
                    onPress={() => console.log("repeat pressed")}>
                    <Text style={{ fontSize: 16, flex: 1 }}>Remind Me</Text>
                    <Switch
                        value={remindMe}
                        onValueChange={(val: boolean) => setRemindMe(val)}
                    />
                </TouchableOpacity>
                <Text style={{ width: '85%', color: 'gray', paddingBottom: 10 }}>
                    Extended notifications enabled. Mark habit as done, postpone reminder for 5 minutes,
                    1 or 4 hours straightly from the notification.
                </Text>
                {divider}
            </View>
            {colorEditorOpen ? <ColorPicker color={color} setColor={setColor} exit={setColorEditorOpen} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
        height: 80,
        flexDirection: 'row',
        padding: 20,
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
    nameForm: {
        padding: 20,
        paddingBottom: 5,
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
    },
    tab: {
        height: 50,
        paddingHorizontal: 10,
        marginHorizontal: -10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    colorCircle: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    fadingContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    }
})

export default CreateHabitMain
