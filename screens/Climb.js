import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Climb() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.iconback}>
          <Image source={require('../img/Vector.png')}></Image>
        </View>
        <View>
          <Text style={styles.nameheader}>Pedalada</Text>
        </View>
        <View style={styles.iconconfig}>
          <Image source={require('../img/config.png')}></Image>
        </View>
      </View>
      <View style={styles.imagemaps}>
        <Image source={require('../img/map.png')} style={styles.imagemap}></Image>
      </View>
      <View>
        <View style={styles.rodape}>
          <View style={styles.imagesrodape}>
            <Image source={require('../img/Vector-1.png')} style={styles.iconrodape}></Image>
            <Image source={require('../img/Vector-2.png')} style={styles.iconrodape}></Image>
            <Image source={require('../img/Vector-3.png')} style={styles.iconrodape}></Image>
            <Image source={require('../img/Vector-4.png')} style={styles.iconrodape}></Image>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 5,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderWidth: 2,
  },
  iconback: {
    paddingHorizontal: 20,
  },
  nameheader: {
    fontSize: 20,
    textAlign: 'center',
    width: 263,
    height: 28,
    paddingHorizontal: 56,
    borderWidth: 2,
  },
  iconconfig: {
    paddingRight: 20,
    paddingLeft: 9.47,
  },
  imagemap: {
    width: '100%',
    height: 400,
  },
  imagemaps: {
    borderWidth: 2,
  },
  rodape: {
    width: '100%',
    height: 136,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
  },
  iconrodape: {
    paddingLeft: 12.5,
    paddingTop: 12.5,
    paddingBottom: 12.5,
    paddingRight: 12.5,
    resizeMode: 'contain',
  },
  imagesrodape: {
    borderWidth: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 36,
    paddingLeft: 35,
  }

});