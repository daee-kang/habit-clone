import React, { createRef, useEffect, useState, useContext } from 'react'
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import { createStackNavigator } from '@react-navigation/stack';
import CreateHabitMain from './CreateHabitMain';
import { Context } from '../context/SheetContext'
import RepeatPicker from './RepeatPicker';

const Stack = createStackNavigator()

const CreateHabit = () => {
    const { actionSheetRef } = useContext(Context)

    return (
        <ActionSheet ref={actionSheetRef} keyboardShouldPersistTaps={'always'}>
            <View style={styles.sheet}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="main" component={CreateHabitMain} />
                    <Stack.Screen name="repeat" component={RepeatPicker} />
                </Stack.Navigator>
            </View>
        </ActionSheet>
    )
}

const styles = StyleSheet.create({
    sheet: {
        height: Platform.OS === 'android' ? '95%' : '98%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden' //need this for border radius for some reason
    }
})

export default CreateHabit
