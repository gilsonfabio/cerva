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

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-900 ">
        <div className="flex flex-col w-full min-h-screen items-center justify-center bg-slate-900">
          <Card className="w-[50%]">
            <CardHeader>
              <CardTitle className="flex w-full items-center justify-center mb-4">Pé de Cana</CardTitle>
              <CardDescription>Faça seu cadastro de acesso ao portal</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Informe seu nome" />
                  </div>            
                </div>
                <div className="grid w-full items-center gap-4 mt-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">CPf</Label>
                    <Input id="cpf" type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Informe o CPF" />
                  </div>            
                </div>
                <div className="grid w-full items-center gap-4 mt-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nascimento</Label>
                    <Input id="nascimento" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} placeholder="Informe Nascimento" />
                  </div>            
                </div>
                <div className="grid w-full items-center gap-4 mt-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Informe Email" />
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
            <CardFooter className="flex w-full items-center justify-center">
              <Button className="w-[50%] bg-yellow-500 text-black hover:bg-yellow-600 ">Cadastrar</Button>
            </CardFooter>
          </Card>
        </div>
    </main>
  );
}

//<Image src={imgLogin} alt="Imagem da tela de login" className="w-full h-screen" />