import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../../Screens/Home";
import MenuPage from "../../Screens/Menu";
import CartPage from "../../Screens/Cart";
import AccountPage from "../../Screens/Account";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{tabBarStyle:{background:"whitesmoke",height:"10%", overflow:"hidden"}}}>

            <Tab.Screen name={"Home"} component={HomePage} options={{tabBarIcon: ({color,size}) => (
                    <AntDesign name="home" size={size} color={color} />),headerShown:false }}/>

            <Tab.Screen name={"Menu"} component={MenuPage} options={{tabBarIcon: ({color,size}) => (
                    <Ionicons name="menu-outline" size={size} color={color} />),headerShown:false }}/>

            <Tab.Screen name={"Cart"} component={CartPage} options={{tabBarIcon: ({color,size}) => (
                    <SimpleLineIcons name="handbag" size={size} color={color} />),headerShown:false }}/>

            <Tab.Screen name={"Account"} component={AccountPage} options={{tabBarIcon: ({color,size}) => (
                    <Ionicons name="person-circle-sharp" size={size} color={color} />),headerShown:false }}/>
        </Tab.Navigator>
    )
};

export default MainTabNavigator;