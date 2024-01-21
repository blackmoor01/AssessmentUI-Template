import {
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import tw from 'twrnc';
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";

{/*A function that houses the whole component on this page*/}
const MenuPage = () => {
    const navigation = useNavigation();

    {/*Navigation to the African Donut Page*/}
    const handleAfricaDonutDetailsPage = ()=> {
        navigation.navigate("AfricanDonutPage")
    }

    {/*A function that dynamically displays the various products available*/}
    const ImageCards = () => {
        const screenWidth = Dimensions.get('window').width;
        const optionsList = [
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30",
                onPress:handleAfricaDonutDetailsPage
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
            {
                Img:require("../../../assets/African-Donut-Mix.jpeg"),
                Txt1:"African Donut",
                Txt2:"$30"
            },
        ]
        return(
            <View style={tw `mt-5 items-center`}>
                <FlatList
                    data={optionsList}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    renderItem={({item}) => (
                        <View style={tw `items-center`}>
                            <View style={[tw `h-60 bg-white mx-2 my-4 rounded-lg justify-center items-center `, styles.wrapper, { width: screenWidth / 2.4 }]}>
                                <TouchableOpacity><EvilIcons name="heart" size={30} color="black" style={tw `aboslute left-15 top-2 right-0`}/></TouchableOpacity>
                                <Image source={item.Img} resizeMode={"contain"} style={[tw `h-25 rounded-lg overflow-hidden`, { width: screenWidth / 2.8 }]} />

                                {/*Texts that are rendered at the base of the Image Cards*/}
                                <View style={tw `flex-row justify-between mt-5`}>
                                    <Text style={tw `mx-5 ml-[-5] font-semibold`}>{item.Txt1}</Text>
                                    <Text style={tw `font-sm text-orange-500 font-bold`}>{item.Txt2}</Text>
                                </View>

                                {/*Add to cart UI at the base of the Image Cards*/}
                                <TouchableOpacity onPress={item.onPress} style={tw `h-9 w-34 mt-5 bg-orange-500 rounded-full`}>
                                    <View style={tw `items-center flex-row ml-3 mt-1.3`}>
                                        <SimpleLineIcons name="handbag" size={15} color={"white"} />
                                        <Text style={tw `text-white font-bold mt-1 mx-1`}>Add to cart</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>

        )
    };


    return(
        <ScrollView style={tw `mx-2`} showsVerticalScrollIndicator={false}>
            <View style={tw `mt-10 items-center`}>
                <Text style={tw `text-lg font-extrabold`}>Menu</Text>
                <View style={tw `h-0.5 w-full bg-gray-300 mt-5 `}/>

                {/*Search Box*/}
                <View style={[tw `h-10 w-11/12 bg-white rounded-lg mt-5 flex-1 border border-gray-400`,styles.wrapper]}>
                    <View style={tw `flex-row ml-10 mr-2`}>
                        <Octicons name="search" style={tw `mt-3.0`} size={20} color="gray" />
                        <TextInput style={tw `mx-2 text-lg`} placeholder={"search"}/>
                    </View>
                </View>
            </View>

            {/*Functional call to display the content of the ImageCards*/}
            <ImageCards/>

        </ScrollView>
    )
};

{/*Extra styling component that adds shadow effect ot the Image Cards*/}
const styles = StyleSheet.create({
    wrapper:{
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.1,
        shadowRadius:2,

    }
})


export default MenuPage;