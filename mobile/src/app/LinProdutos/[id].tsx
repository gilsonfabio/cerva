import React, { useState, useEffect} from 'react'
import { View, Text, Image, FlatList } from "react-native"
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';

import { api } from '@/server/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LisLinProdutos from '@/components/LisLinProdutos';

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

export default function LinProdutos(){
    const [produtos, setProdutos] = useState<Array<produtoProps>>([]);
    const local = useLocalSearchParams();

    useEffect(() => {
    
        let idLnh = local.id;
        api({
            method: 'get',    
            url: `linprodutos/${idLnh}`,                 
        }).then(function(response) {
            setProdutos(response.data)        
        }).catch(function(error) {
            alert(`Falha no acesso ao produto! Tente novamente.`);
        })       
                                  
    }, []);

    return(
        <View className="flex-1 flex-col bg-slate-900">
            <View>
                <Text className="text-md font-semibold text-yellow-400 mt-3 mb-3">Produtos p/ Linha</Text>
            </View>
            <FlatList
                data={produtos}
                className='ml-3'
                horizontal={false}
                renderItem={({ item }) => <LisLinProdutos data={item} />}
                keyExtractor={(item) => item.prdId}
            />     
        </View>
    )
}