import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/screens/Home";
import Climb from "../pages/screens/Climb";
import Competition from "../pages/screens/Competition";
import Config from "../pages/screens/Config";
import Instagram from "../pages/screens/Instagram";
import Speed from "../pages/screens/Speed";
import Walk from "../pages/screens/Walk";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Climb"
                component={Climb}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Competition"
                component={Competition}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Config"
                component={Config}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Instagram"
                component={Instagram}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Speed"
                component={Speed}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Walk"
                component={Walk}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}