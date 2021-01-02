import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Button, Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface Props {

}

const Home = (props: Props) => {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>
                <Ionicons name="add" size={50} onPress={() => console.log('dab')} />
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


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? 50 : 0,
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
