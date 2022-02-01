import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Climb from './screens/Climb';
import Competition from './screens/Competition';
import Config from './screens/Config';
import Instagram from './screens/Instagram';
import Speed from './screens/Speed';
import Walk from './screens/Walk';

const Stack = createStackNavigator();
function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Climb" component={Climb} />
                <Stack.Screen name="Competition" component={Competition} />
                <Stack.Screen name="Config" component={Config} />
                <Stack.Screen name="Instagram" component={Instagram} />
                <Stack.Screen name="Speed" component={Speed} />
                <Stack.Screen name="Walk" component={Walk} />
            </Stack.Navigator>        
        </NavigationContainer>
    );
}

export default Routes;
