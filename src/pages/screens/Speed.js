import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Speed() {
  return (
    <View style={styles.header}>
      <View style={styles.imagesrodape}>
      <Image source={require('../../../img/fundoheader.png')} />
      <Image source={require('../../../img/retangulo.png')} />
      <Text style={styles.text}>Silvio Cesar Junior</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  imagesrodape: {
    flex: 1,
  }
  
});