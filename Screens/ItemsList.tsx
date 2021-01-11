import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, ListRenderItem, StyleSheet } from 'react-native'
import { habitItem, completedItem } from '../consts/types'

interface Props {

}

type displayHabitType = {
    item: habitItem,
    name: string
}

const ItemsList = (props: Props) => {
    const [items, setItems] = useState<displayHabitType[]>([])

    useEffect(() => {
        const getItems = async () => {
            let tempItems: displayHabitType[] = []
            const retrievedItems = await AsyncStorage.getAllKeys()
            for (let i = 0; i < retrievedItems.length; i++) {
                let retrievedItem = await AsyncStorage.getItem(retrievedItems[i])
                if (retrievedItem === null) continue
                let parsed: habitItem = JSON.parse(retrievedItem)
                tempItems.push({
                    item: parsed,
                    name: retrievedItems[i]
                })
            }
            setItems(tempItems)
        }

        getItems()
    }, [])

    const renderItem = (item: displayHabitType) => {
        let habit = item.item

        return <View style={styles.item}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.progress} />
                <Text style={{ flex: 1 }}>5%</Text>
                <Text>o o o o o</Text>
            </View>
            <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return renderItem(item)
                }}
                keyExtractor={(item, index) => `${item.name}_listItem`}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        padding: 20
    },
    item: {
        height: 100,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#F0F0F0',
        padding: 20,
        marginBottom: 20,
        overflow: 'hidden',
        position: 'relative'
    },
    itemTitle: {
        flex: 1,
        fontSize: 19
    },
    progress: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        position: 'absolute',
        left: -12.5,
        top: -12.5
    }
})

export default ItemsList
