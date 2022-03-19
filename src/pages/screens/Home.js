import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuItem from '../../../components/MenuItem';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../img/bg.jpg')}
      style={styles.container}>

      <View style={styles.overlayContainer}>

        <View style={styles.top}>
          <Text style={styles.header}>H O M E</Text>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Climb')}>
            <MenuItem itemImage={require('../../../img/pedal1.jpg')} name="Climb" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Walk')}>
            <MenuItem itemImage={require('../../../img/pedal2.jpg')} name="Walk" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Competition')}>
            <MenuItem itemImage={require('../../../img/pedal3.jpg')} name="Competition" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Speed')}>
            <MenuItem itemImage={require('../../../img/pedal4.jpg')} name="Speed" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Instagram')}>
            <MenuItem itemImage={require('../../../img/pedal5.jpg')} name="Instagram" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Config')}>
            <MenuItem itemImage={require('../../../img/pedal6.jpg')} name="Config" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)',
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 40,
    justifyContent: 'center',
  }
});