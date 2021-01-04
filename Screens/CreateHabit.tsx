import React, { createRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import { createStackNavigator } from '@react-navigation/stack';
import CreateHabitMain from './CreateHabitMain';


interface Props {
    asRef: React.RefObject<ActionSheet>
}

const Stack = createStackNavigator()

const CreateHabit = ({ asRef }: Props) => {
    return (
        <ActionSheet ref={asRef} keyboardShouldPersistTaps={'always'}>
            <View style={styles.sheet}>
                <View style={styles.navigation}>
                    <Text
                        style={styles.buttons}
                        onPress={() => asRef.current?.hide()}>
                        Cancel
                        </Text>
                    <Text style={styles.title}>Create a Habit</Text>
                    <Text style={styles.buttons}>Save</Text>
                </View>

                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="main" component={CreateHabitMain} />
                </Stack.Navigator>
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
        flexDirection: 'row',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'orange',
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

})

export default CreateHabit
