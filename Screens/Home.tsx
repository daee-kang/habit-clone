import React, { createRef, useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, Button, Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CreateHabit from './CreateHabit'
import ActionSheet from 'react-native-actions-sheet'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Context } from '../context/SheetContext'

const fetchFonts = () => {
    return Font.loadAsync({
        'san-francisco': require('../assets/font/SF-UI-Display-Regular.otf'),
        'san-francisco-bold': require('../assets/font/SF-UI-Display-Bold.otf')
    })
}

const Home = () => {
    const { actionSheetRef } = useContext(Context)
    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err: any) => console.log(err)} />
    }

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>
                <Ionicons
                    name="add"
                    size={50}
                    onPress={() => actionSheetRef?.current?.setModalVisible()} />
            </View>

            <View style={styles.body}>
                <View style={styles.header2}>
                    <View>
                        <Text style={styles.title}>Habit</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* todo: weekly calendar component */}
                        <Text style={styles.calendar}>some shit here</Text>
                    </View>
                </View>


                <CreateHabit />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? 50 : 0,
        fontFamily: 'san-francisco'
    },
    header: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    header2: {
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    body: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        alignItems: 'flex-end',
        height: '100%'
    },
    calendar: {
        height: '100%',
    },
})

export default Home
