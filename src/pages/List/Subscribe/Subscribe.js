import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Subscribe.style'

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.headerText}>You haven’t created or subscribed to any Lists</Text>
      </View>

      <View style={styles.textContainer}>
      <Text style={styles.footerText}>When you do, it’ll show up here.</Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity >
          <Text style={styles.buttonText}>Create a List</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Subscribe