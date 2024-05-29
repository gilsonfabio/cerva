import React, { useState, useEffect} from 'react'

import { GestureHandlerRootView } from "react-native-gesture-handler" 
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject} from 'expo-location';
import "@/styles/global.css"

export default function Layout(){
    const [location, setLocation] = useState<LocationObject | null>(null);
  
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  },[])

  return(
    <GestureHandlerRootView style={{flex:1 }}>
        <StatusBar style="light" />
        <Slot />
    </GestureHandlerRootView>        
  )
}