import React from 'react';
import { TouchableOpacity, View, Image, Text, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

type Nav = {
    navigate: (value: string) => void;
}

type linhasProps = {
  lnhId: number;
  lnhDescricao: string;
}

const MosLinhas = ({ data }:any) => {
  const navigation = useNavigation<linhasProps>();
  
  const handleProLinha = async () => {
    //const token = await AsyncStorage.getItem('auth.token');
    
    //if (!token) {
    //    navigation.navigate('SignIn')
    //}else {
    //    navigation.navigate(data.srvLink)
    //}        
  }
  
  return (
    <>
      <Link href={{pathname: "/LinProdutos/[id]", params: { id: data.lnhId}}} asChild>
        <TouchableOpacity>
          <View className=''>
            <View className='flex items-center w-24 h-20 rounded-lg mt-0 ml-1 border border-violet-500 bg-violet-200'>
              <Image source={require('../assets/images/cerveja.png')} resizeMode="contain" tintColor="#8b5cf6" className='mt-2 w-12 h-12' />
              <Text className='mt-2 text-violet-500 text-[10px] font-semibold'>{data.lnhDescricao}</Text>
            </View>             
          </View>  
        </TouchableOpacity>
      </Link>  
    </>
  );
};
  
export default MosLinhas;