import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter, useLocalSearchParams, Link } from "expo-router";

import { api } from "@/server/api";

export default function Menubar(){
    const navigation = useNavigation();
    const router = useRouter();
    const { id, name } = useLocalSearchParams()

    const [carshop, setCarShop] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {

        let idUsrCar = id;    
        api.get(`searchCar/${idUsrCar}`).then(resp => { 
            setCarShop(resp.data.pedId)
            setCount(resp.data.pedQtdtotal)
        }).catch(() => {
            alert('Erro no cadastro!');
        })
                          
    }, []);

    return(
        <View>
            <View className="flex-col bg-violet-950 items-center justify-between w-full h-28 ">                
                <View className="mt-6">
                    <Text className="text-white text-md font-semibold">Olá, {name}</Text>
                </View>
                <View className="flex-row w-full items-center justify-between">    
                    <TouchableOpacity onPress={() => {}} className="">
                        <View>                      
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} >
                        <View>                      
                            <AntDesign name="rocket1" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <Link href={{pathname: "/CarShopping/[id]", params: { id: carshop, usrId: 1}}} asChild> 
                        <TouchableOpacity >
                            <View className="flex-col">
                                <View className="flex-row w-6 h-6 ml-2 items-center rounded-full bg-red-600 ">
                                    <Text className="ml-1 text-white font-semibold">{count}</Text>
                                </View>            
                                <FontAwesome name="shopping-cart" size={26} color="white" className="mr-5 -mt-2 "/>
                            </View>
                        </TouchableOpacity>
                    </Link>      
                </View>           
            </View>
        </View>
    )
}