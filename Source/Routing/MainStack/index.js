import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from "../MainTab";
import AfricanDonutPage from "../../Screens/Details/AfricanDonutPage";

const Stack = createNativeStackNavigator();

const MainStackRouter = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={"MainTabNavigator"} component={MainTabNavigator}/>
                <Stack.Screen name={"AfricanDonutPage"} component={AfricanDonutPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStackRouter;