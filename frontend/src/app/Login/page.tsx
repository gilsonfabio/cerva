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
import Link from "next/link";

import imgLogin from '@/app/assets/images/login.jpg'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleDashboard() {
    //router.replace('/Dashboard')
	}
 
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-900 ">
      <div className="flex flex-row w-full items-center">
        <div className="flex-col w-[50%] min-h-screen items-center justify-center bg-slate-50">
          
        </div>
        <div className="flex flex-col w-[50%] min-h-screen items-center justify-center bg-slate-900">
          <Card className="w-[50%]">
            <CardHeader>
              <CardTitle className="flex w-full items-center justify-center mb-4">Login</CardTitle>
              <CardDescription>Informe email e senha para acessar portal</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email de acesso" />
                  </div>            
                </div>
                <div className="grid w-full items-center gap-4 mt-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Password</Label>
                    <Input id="name" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha de acesso" />
                  </div>            
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col w-full items-center justify-center">
              <Link href={"./Dashboard"} >
                <Button className="w-[80%] bg-yellow-500 text-black hover:bg-yellow-600 mt-3">Entrar</Button>
              </Link>
              <Link href={"./Cadastro"} className="text-green-500 text-sm font-semibold mt-6" >Faça seu cadastro</Link>
            </CardFooter>
          </Card>
        </div>
      </div>      
    </main>
  );
}

//<Image src={imgLogin} alt="Imagem da tela de login" className="w-full h-screen" />