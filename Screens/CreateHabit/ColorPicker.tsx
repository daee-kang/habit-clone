import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import COLORS from '../../consts/colors'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'


interface Props {
  color: string,
  setColor: React.Dispatch<React.SetStateAction<string>>
  exit: React.Dispatch<React.SetStateAction<boolean>>
}

interface CircleProps {
  color: string,
  current: string,
  setColor: (color: string) => void
}

const Circle = ({ color, current, setColor }: CircleProps) => {
  return (
    <TouchableOpacity style={{ width: 120, padding: 10 }} onPress={() => setColor(color)}>
      <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: color, margin: 'auto', justifyContent: 'center', alignItems: 'center' }} >
        {current == color ? <Ionicons name="checkmark" size={25} /> : null}
      </View>
    </TouchableOpacity>
  )
}

const ColorPicker = ({ color, setColor, exit }: Props) => {
  const [current, setCurrent] = useState(color)
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial 
  const scaleAnim = useRef(new Animated.Value(0.05)).current  // Initial 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  useEffect(() => {
    Animated.timing(
      scaleAnim,
      {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }
    ).start()
  }, [scaleAnim])


  const updateColor = (color: string) => {
    fadeOut()
    setCurrent(color)
    setColor(color)
    setTimeout(() => exit(false), 200) //setting state to false here
  }

  const fadeOut = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }
    ).start();
  }

  const scale = [
    {
      translateX: scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 120]
      })
    },
    {
      translateY: scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 25]
      })
    },
    {
      scaleX: scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 15]
      })
    },
    {
      scaleY: scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 12.5]
      })
    }
  ]


  return (
    <Animated.View
      style={[
        styles.fadingContainer, { opacity: fadeAnim, transform: scale }
      ]}>
      <View style={styles.row}>
        <Circle color={COLORS.yellow} current={current} setColor={updateColor} />
        <Circle color={COLORS.purple} current={current} setColor={updateColor} />
        <Circle color={COLORS.lightBlue} current={current} setColor={updateColor} />
      </View>
      <View style={styles.row}>
        <Circle color={COLORS.pink} current={current} setColor={updateColor} />
        <Circle color={COLORS.red} current={current} setColor={updateColor} />
        <Circle color={COLORS.orange} current={current} setColor={updateColor} />
      </View>
      <View style={styles.row}>
        <Circle color={COLORS.lime} current={current} setColor={updateColor} />
        <Circle color={COLORS.green} current={current} setColor={updateColor} />
        <Circle color={COLORS.blue} current={current} setColor={updateColor} />
      </View>
    </Animated.View>
  )

}

const styles = StyleSheet.create({
  fadingContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default ColorPicker
