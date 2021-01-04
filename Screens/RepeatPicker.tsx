import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {

}

const RepeatPicker = ({ navigation }: any) => {
    return (
        <View>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.backButton} activeOpacity={1} onPress={() => navigation.goBack()} >
                    <Ionicons name="chevron-back-outline" size={40} />
                </TouchableOpacity>
                <Text style={styles.title}>Choose regularity</Text>
                <View style={{ flex: 1 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
        height: 60,
        flexDirection: 'row',
        padding: 10,
        paddingTop: 20,
        backgroundColor: 'orange',
    },
    title: {
        flex: 9,
        textAlign: 'center',
        fontFamily: 'san-francisco-bold',
        fontSize: 18,
    },
    backButton: {
        height: 40,
        marginTop: -10,
    }
})

export default RepeatPicker
