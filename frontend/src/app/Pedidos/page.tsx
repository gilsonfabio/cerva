"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import React, {useState, useEffect} from "react"
import api from "@/components/Services/api"
import Link from "next/link"
import { IconeBeer } from '@/components/Services/icons'
import Cronometro from "@/components/Cronometro"

type pedidosProps = {
  "pedId": number; 
  "pedData": string; 
  "pedCliId": number; 
  "pedQtdTotal": number; 
  "pedVlrTotal": number; 
  "pedCupom": string; 
  "pedVlrPagar": number; 
  "pedStatus": string; 
  "pedEndEntrega": number; 
  "pedVlrTaxEntrega": number; 
  "pedFrmPagto": number; 
  "pedUltItem": number; 
  "cliNome": string;
  "cliCelular": string;
  "cliEmail": string;
}

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Array<pedidosProps>>([]);
  const [atualiza, setAtualiza] = useState(0);

  useEffect(() => {   

    api.get("/pedidos").then(res => {
        setPedidos(res.data)           
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });  
 
  }, [])

  useEffect(() => {   

    api.get("/pedidos").then(res => {
        setPedidos(res.data)           
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });  
     
  }, [atualiza])
   
  const TEMPO_TOTAL = 30;
  let [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL)
  const startTimer = () => {
    setTimeout(() => {
      if (tempoRestante > 0) {
        setTempoRestante(tempoRestante -= 1);
      }
    }, 1000)
     
    if (tempoRestante === 0) {
      setTempoRestante(TEMPO_TOTAL)
      setAtualiza(atualiza + 1)
    }
  }
   
  const formataTempo = (time:any) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60 as any;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  const calculaFracao = () => {
    return tempoRestante / TEMPO_TOTAL;
  }

  startTimer()

  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-900 ">
      <div className="flex flex-row w-full items-center">
        <div className="flex-col w-[50%] min-h-screen items-center justify-center bg-slate-50">
            <Table>
                <TableCaption>Lista de pedidos recentes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Nome do Cliente</TableHead>
                        <TableHead>Celular</TableHead>
                        <TableHead className="text-right">Valor Pedido</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Itens</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {pedidos.map((row) => (
                    <TableRow key={row.pedId}>                        
                        <TableCell className="font-medium">{row.pedId}</TableCell>
                        <TableCell>{row.pedData}</TableCell>
                        <TableCell>{row.pedCliId}</TableCell>
                        <TableCell>{row.cliNome}</TableCell>
                        <TableCell>{row.cliCelular}</TableCell>
                        <TableCell className="text-right">{row.pedVlrTotal}</TableCell>
                        <TableCell>{row.pedStatus}</TableCell>
                        <TableCell>
                          <Link href={`/ItePedidos/${row.pedId}`}>
                            {IconeBeer}                          
                          </Link>
                        </TableCell>
                    </TableRow>
                ))}    
                </TableBody>
            </Table>
        </div>
        <div className="flex flex-col w-[50%] min-h-screen items-center justify-center bg-slate-900">
          <div className="w-52 h-52">            
            <span id="base-timer-label" className="absolute w-36 h-36 flex items-center justify-center text-yellow-400 text-2xl">
                {formataTempo(tempoRestante)}
            </span>
          </div>
        </div>  
      </div>      
    </main>
  );
}