"use client"

import React, {useState, useEffect} from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Image from "next/image";

import imgLogin from '@/app/assets/images/login.jpg'
import Pedidos from "../Pedidos/page"

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-900 ">
      <div className="flex flex-row w-full h-20 items-center justify-between bg-violet-900 p-10">
        <span className="text-white text-md font-semibold">Dashboard</span>
        <span className="text-white text-md font-semibold">Sair</span>
      </div>    
      <Pedidos />  
    </main>
  );
}

//<Image src={imgLogin} alt="Imagem da tela de login" className="w-full h-screen" />