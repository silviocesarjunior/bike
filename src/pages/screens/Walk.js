import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Walk() {
  return (
    <View>
     <Text style={styles.header}>Walk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  header: {
    color: '#000',
    fontSize: 30,
    borderColor: '#000',
  },
});