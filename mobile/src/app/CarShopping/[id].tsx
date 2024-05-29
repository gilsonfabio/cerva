import React from 'react';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import { Link, useLocalSearchParams, router} from 'expo-router';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import ListIteCar from '../../components/ListIteCar';

import { api } from '@/server/api';

export interface CarProps {
  pedId: number;
  pedData: string;
  pedCliId: number;
  pedQtdTotal: number;
  pedVlrTotal: number;
  pedCupom: number;
  pedVlrPagar: number;
  pedStatus: number;
  cliNome: string;
}

export interface ProductsProps {
  itePedId: number;
  itePedItem: string;
  itePedProId: string;
  itePedQtde: number;
  itePedVlrUnit: number;
  itePedVlrTotal: number;
  proDescricao: string;
  proReferencia: string;
  proUrlPhoto: string;
}

export interface numberCarProps {
  carId: number;
}

const CarShopping = () => {
  const local = useLocalSearchParams();

  const [car, setCar] = useState<Array<CarProps>>([]); 
  const [items, setItems] = useState<Array<ProductsProps>>([]); 
  const [atualiza, setAtualiza] = useState(0);

  const [idCar, setIdCar] = useState(0);
  const [carData, setCarData] = useState('');
  const [carHora, setCarHora] = useState('');
  const [carUser, setCarUser] = useState(0);
  const [carQtdTotal, setCarQtdTotal] = useState(0);
  const [carVlrTotal, setCarVlrTotal] = useState(0);
  const [carDesTotal, setCarDesTotal] = useState(0);
  const [carCodCupom, setCarCodCupom] = useState(0);
  const [carVlrPagar, setCarVlrPagar] = useState(0);
  const [carStatus, setCarStatus] = useState('');
  const [usrNome, setUsrNome] = useState('');

  useEffect(() => {
    let carId = local.id;
    api.get(`headerCar/${carId}`).then(response => { 
        setIdCar(response.data.pedId);
        setCarData(response.data.pedData);
        setCarUser(response.data.pedCliId);
        setCarQtdTotal(response.data.pedQtdTotal);
        setCarVlrTotal(response.data.pedVlrTotal);
        setCarCodCupom(response.data.pedCupom);
        setCarVlrPagar(response.data.pedVlrPagar);
        setCarStatus(response.data.pedStatus);
        setUsrNome(response.data.cliNome);
    })
    api.get(`itemscar/${carId}`).then(resp => { 
      setItems(resp.data);
    })  
  }, []);

  function handleEntrega() {
    router.push(`/screens/EscEntrega?id=${local.id}` as any );           
   
  }

  return (
    <View className='flex-1 w-full items-center bg-gray-100'>
      <View className='flex-row items-center justify-center bg-violet-900 w-full h-20 '>
        <Text className='text-white font-semibold'>Lista de Compras: {local.id}</Text>
      </View>
      <View className='flex-row w-[96%] h-20 bg-gray-300 items-center justify-between mt-3 rounded-md'>
        <Text className='ml-2 text-white text-xl font-semibold'>Nro Pedido: {idCar}</Text>
        <Text className='mr-2 text-white text-xl font-semibold'>Data: {Moment(carData).format('DD-MM-YYYY')}</Text>
      </View>    
      <View className='flex-col w-[96%] h-10 mt-3'>
        <Text className='ml-2 text-violet-900 text-xl font-semibold'>Itens do Pedido:</Text>
      </View>  
      <FlatList
        data={items}
        numColumns={1}
        keyExtractor={(item) => item.itePedProId}
        renderItem={({ item }) => <ListIteCar data={item} />}
      />
      <View>
        <Text className='flex items-center text-red-500 font-bold'>Valor total do pedido...R$: {carVlrTotal}</Text>
      </View>
      <View className='flex-row items-center justify-center w-[70%] h-14 bg-violet-900 rounded-lg '>
        <TouchableOpacity  onPress={handleEntrega} >
          <Text className='text-white font-semibold'>Finaliza Compra</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
};


export default CarShopping;