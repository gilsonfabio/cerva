import { Link } from "expo-router"
import { View, Text, ImageBackground } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function Home(){
    return(
        <View className="flex-1 w-full h-full items-center justify-center">
            <ImageBackground source={require('@/assets/images/banner.jpg')} alt="" className="w-full h-full" />
            <View className="flex w-full h-full items-start absolute">
                <View className="flex-col items-center w-full h-36 mt-10">
                    <Text className="text-yellow-400 text-4xl font-bold">Pé de Cana</Text>
                </View>
                <Text className="text-yellow-400 text-4xl font-bold mt-10 ml-3 mb-3">A melhor </Text>
                <Text className="text-yellow-400 text-4xl font-bold ml-3 mb-3">rede social sempre vai</Text>
                <Text className="text-yellow-400 text-4xl font-bold ml-3 mb-3">ser uma rodada de cerveja</Text>
                <Text className="text-yellow-400 text-4xl font-bold ml-3 mb-3">com os amigos!</Text>
                <View className="flex-col items-center w-full h-10">
                    <Link href={'./screens/Login'} asChild>
                    <TouchableOpacity>
                        <View className="flex items-center justify-center bg-yellow-400 w-96 h-14 mt-96 rounded-lg shadow-lg shadow-yellow-500/50">
                            <Text className="text-black text-md font-semibold ">Vamos bebemorar hoje</Text>
                        </View>
                    </TouchableOpacity>
                    </Link>
                </View>    
            </View>
        </View>    
    )
}
