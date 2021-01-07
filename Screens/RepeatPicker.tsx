import React, { ReactNode, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const divider = <View
    style={{
        borderBottomColor: '#A9A9A9',
        marginHorizontal: -10,
        borderBottomWidth: 1,
    }}
/>

//i really don't know how to pass navigation in ts convention so unfortunately passing these props as any
const RepeatPicker = ({ route, navigation }: any) => {
    const { timesPerWeek, setTimesPerWeek, getRegularityDisplayText } = route.params;
    const [selected, setSelected] = useState(timesPerWeek)

    let data: String[] = []
    for (let i = 0; i < 7; i++) {
        data.push(getRegularityDisplayText(i + 1))
    }

    const renderItem = (item: String, index: number) => {
        return <View>
            <TouchableOpacity onPress={() => {
                setSelected(index + 1);
                setTimesPerWeek(index + 1);
            }}>
                <View style={[styles.listItem, selected == index + 1 ? styles.selectedItem : null]}>
                    <Text style={{ flex: 1 }}>{item}</Text>
                    {selected == index + 1 ? <Ionicons name="checkmark" size={16} color="black" /> : null}
                </View>
            </TouchableOpacity>
            {divider}
        </View >
    }

    return (
        <View>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.backButton} activeOpacity={1} onPress={() => {
                    navigation.goBack()
                }} >
                    <Ionicons name="chevron-back-outline" size={40} />
                </TouchableOpacity>
                <Text style={styles.title}>Choose regularity</Text>
                <View style={{ flex: 1 }} />
            </View>
            <View style={styles.list}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    extraData={selected}
                    keyExtractor={(_, index) => String(index)}
                />
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
    },
    list: {
        paddingHorizontal: 20
    },
    listItem: {
        paddingVertical: 13,
        paddingHorizontal: 8,
        marginHorizontal: -10,
        flexDirection: 'row'
    },
    selectedItem: {
        backgroundColor: '#DCDCDC'
    }
})

export default RepeatPicker
