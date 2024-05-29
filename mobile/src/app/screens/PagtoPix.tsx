import React, { useState, useEffect} from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useLocalSearchParams, router} from 'expo-router';
import axios from 'axios';

import { api } from '@/server/api';

type imgProps = {
    "base64File": string;
}

export default function PagtoPix(){
    const local = useLocalSearchParams();
    const [state, setState] = useState<imgProps>() as any;

    const [imgBase64, setImgBase64] = useState('');

    useEffect(() => {
        axios({
            method: 'post',    
            url: `http://10.111.135.208:3333/authorize`,
            data: {
              lanUsrId: local.id,  
              lanMovId: 1,
              lanEquId: 1,
              lanValor: '1,00',   
            }
        }).then(function(response) {
            //setState({base64File: 'data:image/png;base64' + response.data.imagemQrcode});
            console.log(response.data.imagemQrcode)
            setImgBase64(response.data.imagemQrcode)
        }).catch(function(error) {
            console.log(error)
        })                                
    }, []);

    function handleLocalizacao() {
         
    }

    return(
        <View className="flex-1 items-center bg-white">
            <Text className="text-yellow-400 text-2xl font-bold">Escolha Forma de Pagto</Text>
            <View className="flex-col items-center w-full mt-4">
                
            </View>    
            <View className="flex-col items-center justify-center w-full h-full ">
                <Image style={{width: 250, height: 250}} source={{uri: imgBase64}}/>
            </View>     
        </View>
    )
}


/* 
    
    
    <img src={`${state.base64File}`} />

*/