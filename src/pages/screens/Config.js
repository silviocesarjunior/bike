import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Config() {
  return (
    <View>
      <Text style={styles.header}>Configurações</Text>
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