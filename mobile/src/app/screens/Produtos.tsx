import React, {useState, useEffect} from "react";
import { View, Text, Image,TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter, useLocalSearchParams, Link } from "expo-router";

import Linhas from "./Linhas";
import Promocoes from "./Promocoes";

import { api } from "@/server/api";
import Menubar from "@/components/Menubar";

export default function Produtos(){
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

    function handleCarShopping(){
        //router.push(`/screens/LisProLinha?id=${id}&name=${name}` as any );   
    }

    return(
        <View className="flex-1 w-full h-full bg-gray-100" >            
            <Menubar />
            <Linhas />
            <Promocoes />
        </View>
    )
}

