import {View, Text} from 'react-native';
import tw from 'twrnc';

const HomePage = () => {
    return(
        <View style={tw `mx-2 items-center justify-center flex-1`}>
            <Text>This is the Home Page</Text>
        </View>
    )
};


export default HomePage;