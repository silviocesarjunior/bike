import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, TouchableOpacity } from 'react-native';
import MenuItem from '../components/MenuItem';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();
   
    return (
      <ImageBackground
        source={require('../img/bg.jpg')}
        style={styles.container}>

        <View style={styles.overlayContainer}>

          <View style={styles.top}>
            <Text style={styles.header}>H O M E</Text>
          </View>
          <Button style={styles.title} title="Menu Principal" onPress={() =>navigation.navigate('Climb')} />
          <View style={styles.menuContainer}>
            <MenuItem itemImage={require('../img/pedal1.jpg')} name="Climb" onPress={() => navigation.navigate('Climb') } />
            <MenuItem itemImage={require('../img/pedal2.jpg')} name="Walk" onPress={() => navigation.navigate('Walk')} />
            <MenuItem itemImage={require('../img/pedal3.jpg')} name="Competition" onPress={() => navigation.navigate('Competition')} />
            <MenuItem itemImage={require('../img/pedal4.jpg')} name="Speed" onPress={() => navigation.navigate('Speed')} />
            <MenuItem itemImage={require('../img/pedal5.jpg')} name="Instagram" onPress={() => navigation.navigate('Instagram')} />
            <MenuItem itemImage={require('../img/pedal6.jpg')} name="Config" onPress={() => navigation.navigate('Config')} />
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
  header:{
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  menuContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 40,
    justifyContent: 'center',
  }
});