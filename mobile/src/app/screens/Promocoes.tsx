import React, { useState, useEffect } from 'react';
import {Pressable, StatusBar, View, Text, Image, FlatList, SafeAreaView} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter, useLocalSearchParams, Link } from "expo-router";

import {api} from '@/server/api';
import ListPromocoes from '@/components/ListPromocoes';

type produtoProps = {
    prdId: string;
    prdDescricao: string;
    prdReferencia: string;
    prdGrupo: number;
    prdLinha: number;
    prdCstUnitario: number;
    prdVdaUnitario: number;
    prdQtdEstoque: number;
    prdDscPermitido: number;
    prdStatus: string;
    prdUrlPhoto: string;
}

export default function Promocoes() {
    const [promocoes, setPromocoes] = useState<Array<produtoProps>>([]);

    const navigation = useNavigation();
    const router = useRouter();
    const { id, name } = useLocalSearchParams()

    useEffect(() => {
        
        api({
            method: 'get',    
            url: `produtos`,                 
        }).then(function(resp) {
            setPromocoes(resp.data)
        }).catch(function(error) {
            alert(`Falha no acesso aos produtos! Tente novamente.`);
        })
                          
    }, []);

    return(
        <View className="flex-1 w-full h-full items-center">            
            <View>
                <Text className="text-md font-semibold text-purple-800 mt-3 mb-3">Destaques</Text>
            </View>
            <FlatList
                data={promocoes}
                horizontal={false}
                numColumns={2}
                renderItem={({ item }) => <ListPromocoes data={item} />}
                keyExtractor={(item) => item.prdId}
            />
        </View>
    )
}