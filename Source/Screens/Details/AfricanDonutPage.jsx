import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    LayoutAnimation,
    UIManager,
    FlatList
} from 'react-native';
import tw from 'twrnc';
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {useState, useEffect} from "react";
import Entypo from "react-native-vector-icons/Entypo";

const AfricanDonutPage = () => {

    const navigation = useNavigation();
    {/*Incorporates minor Animations into animations into the UI*/}
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    {/*A function to display the various menu listing features*/}
    const ExpandableMenu = () => {
        const [expandedMenu, setExpandedMenu] = useState(null);

        const Lists = [
            {
                id: 1,
                title: "Ingredients",
                content: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
            },
            {
                id: 2,
                title: "Nutritional Information",
                content: ["Nutrient 1", "Nutrient 2", "Nutrient 3"],
            },
            {
                id:3,
                title:"How to Prepare",
                content:["Step 1","Step 2","Step3"]
            },
            {
                id:4,
                title:"Dietary Information",
                content:["Information 1","Information 2","Information 3"]
            },
            {
                id:5,
                title:"Storage Information",
                content:["Storage Info 1","Storage Info 2","Storage Info 3"]
            },
            {
                id:6,
                title:"Extra",
                content:["Extra 1","Extra 2","Extra 3"]
            },
        ];

        {/*Hadnles how the the animation works when toggles*/}
        const handlePress = (menuId) => {
            // Use LayoutAnimation to animate the expansion and collapse
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            // Toggle the expanded state for the pressed menu
            setExpandedMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
        };

        return (
            <View style={{ padding: 16 }}>
                <FlatList
                    data={Lists}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item.id)}>
                            <View style={tw `h-0.4 w-full bg-gray-300`}/>
                            <View style={tw `flex-row items-center justify-between`}>
                                <Text style={tw `font-semibold text-lg mr-8 my-3`}>{item.title}</Text>
                                <Text>{expandedMenu === item.id ? <Entypo name="chevron-small-up" size={24} color="black" /> : <Entypo name="chevron-small-down" size={24} color="black" />}</Text>
                            </View>
                            {expandedMenu === item.id && (
                                <View style={{ marginTop: 8 }}>
                                    {item.content.map((contentItem, index) => (
                                        <Text key={index}>{contentItem}</Text>
                                    ))}
                                </View>
                            )}
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    };



    {/*A function for the Image carousel*/}
    const ImageCarousel = () =>{
        const [currentIndex, setCurrentIndex] = useState(0);
        const imageLists = [
            require("../../../assets/African-Donut-Mix.jpeg"),
            require("../../../assets/Donut-MIx.jpeg"),
            require("../../../assets/Elite-Donut.jpeg"),
        ]
        {/*A hook for displaying the image carousel causing it to slide automatically*/}
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLists.length);
            }, 3000);

            return () => clearInterval(interval);
        }, [currentIndex]);

        const handleDotPress = (index) => {
            setCurrentIndex(index);
        };

        return(
            <View style={tw `flex-1 items-center justify-center mt-5`}>

                {/*A function call to display the images that are to be rendered on the page*/}
                <Image source={imageLists[currentIndex]} resizeMode={"contain"} style={[tw `w-10/12 h-80 rounded-lg overflow-hidden rounded-lg`,styles.wrapper]}/>

                <View style={tw `flex-row mt-5`}>
                    {/*A  map functions that iterates through the various prospcets of the app.*/}
                    {imageLists.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleDotPress(index)}
                            style={[tw `w-2 h-2 rounded-lg bg-gray-500 mx-1`, index === currentIndex && tw`bg-orange-500`]}
                        />
                    ))}
                </View>
            </View>
        )
    };


    return(
        <ScrollView showsVerticalScrollIndicator={false} style={tw `mx-2 mt-10`}>

            {/*Navigation back feature*/}
            <TouchableOpacity onPress={()=>navigation.goBack()} style={[tw `h-10 w-10 bg-white border border rounded-lg`,styles.wrapper]}>
                <View style={tw `items-center mt-1.8`}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </View>
            </TouchableOpacity>

            {/*A function call to the Image carousel*/}
            <ImageCarousel/>

            <View style={tw `mt-5 flex-row justify-between`}>
                <Text style={tw `font-bold text-lg`}>African Donut Mix (Puff Puff)</Text>
                <Text style={tw `text-orange-500 font-bold text-lg`}>$3.99</Text>
            </View>
            <Text style={tw `flex-1 mt-2 mb-10`}>Rare Eat Puff Puff Mix can be made into a deep fried doughnut. They are made from yeast dough, shaped into balls and deep-fried until golden-brown. It has a doughnut-like texture but slightly o.... <Text style={tw `text-orange-500`}>Readmore</Text></Text>

            {/*Function call to the expandable menu*/}
            <ExpandableMenu/>

            <View style={tw `justify-between flex-row mx-4`}>
                <TouchableOpacity style={[tw `h-10 w-10 rounded-lg border border`,styles.wrapper]}>
                    <Text style={tw `text-2xl text-center`}>-</Text>
                </TouchableOpacity>

                <Text style={tw `text-lg`}>1</Text>

                <TouchableOpacity style={[tw `h-10 w-10 rounded-lg border border`,styles.wrapper]}>
                    <Text style={tw `text-2xl text-center`}>+</Text>
                </TouchableOpacity>
            </View>

            {/*Buttons UI*/}
            <View style={tw `items-center mt-20`}>
                <TouchableOpacity style={[tw `h-10 w-11/12 rounded-full bg-orange-500`,styles.wrapper]}>
                    <Text style={tw `text-white font-bold text-center mt-2`}>Add to cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[tw `h-10 w-11/12 rounded-full bg-white border border-orange-500 mt-5`,styles.wrapper]}>
                    <Text style={tw `font-bold text-orange-500 text-center mt-2`}>Subscribe to a plan</Text>

                </TouchableOpacity>
            </View>


        </ScrollView>
    )
};


{/*Extra styling feature that adds shadow feature to the components on the page.*/}
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

export default AfricanDonutPage;