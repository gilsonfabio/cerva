import React, { useState, useEffect} from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useLocalSearchParams, router} from 'expo-router';

import { api } from '@/server/api';

export default function FrmPagto(){
    const local = useLocalSearchParams();

    useEffect(() => {
                                      
    }, []);

    function handlePagtoPix() {
        router.push(`/screens/PagtoPix?id=${local.id}` as any ); 
    }

    return(
        <View className="flex-1 items-center bg-black">
            <Text className="text-yellow-400 text-2xl font-bold">Escolha Forma de Pagto</Text>
            <View className="flex-col items-center w-full mt-4">
                <TouchableOpacity onPress={handlePagtoPix} className='w-full h-20 '>
                    <View className="flex items-center justify-center bg-gray-600 w-96 h-48 rounded-md">
                        <Text className="text-black text-2xl font-bold mb-3">Pagamento por PIX</Text>
                    </View>
                </TouchableOpacity>
            </View>    
            <View className="flex-col items-center w-full mt-40">
                <TouchableOpacity className='w-full h-20 '>
                    <View className="flex items-center justify-center bg-yellow-400 w-96 h-48 rounded-md">
                        <Text className="text-black font-bold text-2xl">Pagamento no Cartão</Text>
                    </View>
                </TouchableOpacity>
            </View>     
        </View>
    )
}


/* 
    axios({
    method: 'post',    
    url: `http://localhost:3333/authorize`,
    data: {
      lanUsrId: usrId,  
      lanMovId: params.movId,
      lanEquId: equId,
      lanValor: vlrAposta,   
    }
}).then(function(response) {
    setState({base64File: response.data.imagemQrcode});
    console.log(state)
}).catch(function(error) {
    console.log(error)
}) 

*/
