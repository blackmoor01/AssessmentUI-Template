import {View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const CartPage = () => {
    {/*Definition of the navigation */}
    const navigation = useNavigation();

    {/*A function definition that displays an already coded cart content. This should've been rendered with a state management tool like redux.*/}
    const CartContent = () => {
        const Lists = [
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt:"Moi Moi"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt:"Moi Moi"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt:"Moi Moi"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt:"Moi Moi"
            },
        ]
        return(
            <View style={tw `mt-5`}>

                {/*A flatlist that dynamically displays the hard coded data in the above.*/}
                <FlatList data={Lists} renderItem={({item}) => (
                    <View style={tw `my-8 flex-row`}>

                        {/*Rendering the images*/}
                        <Image source={item.Img} resizeMode={"contain"} style={tw `h-30 w-30 rounded-lg ml-[-10]`} />

                        {/*Rendering the other components associated with the design of this page*/}
                        <View style={tw `flex-row justify-between`}>

                            <View style={tw `my-4`}>
                                <Text style={tw `text-sm font-semibold`}>{item.Txt}</Text>
                                <Text style={tw `text-orange-500 my-4 font-semibold`}>$30</Text>
                                <TouchableOpacity>
                                    <AntDesign name="delete" size={25} color="black" />
                                </TouchableOpacity>
                            </View>

                            <View style={tw ` justify-between items-center ml-35`}>
                                <TouchableOpacity style={[tw `h-10 w-10 rounded-lg border border`, styles.wrapper]}>
                                    <Text style={tw `text-2xl text-center`}>-</Text>
                                </TouchableOpacity>

                                <Text style={tw `text-lg mx-2`}>1</Text>

                                <TouchableOpacity style={[tw `h-10 w-10 rounded-lg border border`, styles.wrapper]}>
                                    <Text style={tw `text-2xl text-center`}>+</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                )}/>
            </View>

        )
    };


    return(
        <ScrollView style={tw `mx-2`} showsVerticalScrollIndicator={false} >
            <View style={tw `mt-10 items-center`}>

                {/*The topmost view of the cart page, consisting of the back-arrow image and the Cart text.*/}
                <TouchableOpacity onPress={()=>navigation.goBack()} style={[tw `h-10 w-10 bg-white border border rounded-lg absolute bottom-5 right-0 left-0`,styles.wrapper]}>
                    <View style={tw `items-center mt-1.8`}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <Text style={tw `text-lg mb-1 font-extrabold`}>Cart</Text>
                <View style={[tw `h-0.5 w-full bg-gray-300 mt-5 `,styles.wrapper]}/>
            </View>

            {/*A function call to dynamically render the content of the Cart content function above*/}
            <CartContent/>

            {/*Displays the Total items dynamically after tapping on the add feature*/}
            <View style={tw `flex-row justify-between mt-10 mx-4`}>
                <Text style={tw `font-semibold text-sm`}>Total (4 items)</Text>
                <Text style={tw `font-semibold text-orange-500`}>$120</Text>
            </View>

            {/*Checkout button*/}
            <View style={tw `mt-10 items-center`}>
                <TouchableOpacity style={[tw `h-10 w-11/12 rounded-full bg-orange-500`,styles.wrapper]}>
                    <Text style={tw `font-bold text-lg text-white text-center mt-1`}>Checkout - $120</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
};


{/*Extra styling feature that adds shadow to the various components*/}
const styles = StyleSheet.create({
    wrapper:{
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.3,
        shadowRadius:2,

    }
})

export default CartPage;