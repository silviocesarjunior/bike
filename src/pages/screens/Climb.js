import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Climb() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.iconback}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../img/Vector.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../img/Vector.png')} style={styles.iconrodape}></Image>
          </TouchableOpacity>
          <Text style={styles.nameheader}>Pedalada</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Config')}>
            <Image source={require('../../../img/Config.png')} style={styles.iconrodape}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imagemaps}>
        <Image source={require('../../../img/map.png')} style={styles.imagemap}></Image>
      </View>
      <View>
        <View style={styles.rodape}>
          <View style={styles.imagesrodape}>
            <Image source={require('../../../img/Vector-1.png')} style={styles.iconrodape}></Image>
            <Image source={require('../../../img/Vector-2.png')} style={styles.iconrodape}></Image>
            <Image source={require('../../../img/Vector-3.png')} style={styles.iconrodape}></Image>
            <Image source={require('../../../img/Vector-4.png')} style={styles.iconrodape}></Image>
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
  },
  cabecalho: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
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
    borderWidth: 3,
  },
  rodape: {
    width: '100%',
    height: 136,
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
    padding: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 36,
    paddingLeft: 35,
  }

});