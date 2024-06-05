"use client"
import React, {useState, useEffect} from "react"
import { useRouter, useParams } from 'next/navigation';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import api from "@/components/Services/api"
import Link from "next/link"
import { IconeBeer } from '@/components/Services/icons'

type pedidosProps = {
  "pedId": number; 
  "pedData": string; 
  "pedCliId": number; 
  "pedQtdTotal": number; 
  "pedVlrTotal": number; 
  "pedCupom": string; 
  "pedVlrPagar": number; 
  "pedStatus": number; 
  "pedEndEntrega": number; 
  "pedVlrTaxEntrega": number; 
  "pedFrmPagto": number; 
  "pedUltItem": number; 
  "cliNome": string;
  "cliCelular": string;
  "cliEmail": string;
  "endId": number; 
  "endCliId": number; 
  "endLogradouro": string; 
  "endNumero": string; 
  "endComplemento": string; 
  "endBairro": number; 
  "endCidade": number; 
  "endEstado": string; 
  "endCep": string; 
  "endLatitude": string; 
  "endLongitude": string; 
  "endLatitudeDelta": string; 
  "endLongitudeDelta": string; 
  "endStatus": string;
  "baiDescricao": string;
  "cidDescricao": string;
}

type itensProps = {
  "itePedId": number;
  "itePedItem": number;
  "itePedProId": number;
  "itePedQtde": number;
  "itePedVlrUnit": number;
  "itePedVlrTotal": number;
  "itePedVlrCstUnit": number;
  "prdDescricao": string;
  "prdReferencia": string;
}  

export default function ItePedidos() {
  const params = useParams();
  const [pedidos, setPedidos] = useState<Array<pedidosProps>>([]);
  const [itens, setItens] = useState<Array<itensProps>>([]);

  const router = useRouter()

  useEffect(() => {   

    let idPed = params.pedId

    api.get(`/searchPed/${idPed}`).then(resp => {
        setPedidos(resp.data)           
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });  

    api.get(`/itePedido/${idPed}`).then(res => {
        setItens(res.data)           
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    }); 
    
  }, [])

  async function handleEntrega(){          
    let idPed = params.pedId
    api({
      method: 'put',    
      url: `entPedido/${idPed}`,      
    }).then(function(response) {
        alert(`Pedido enviado para entrega com sucesso! ${response.data}` )
        router.back()
    }).catch(function(error) {
      alert('Erro no envio do pedido!')
    })
  }
   
  return (
    <main className="flex w-full h-screen flex-col items-center bg-gray-900 ">
      <div className="flex flex-row w-full h-20 items-center justify-between bg-violet-900 p-10">
        <span className="text-white text-md font-semibold">Dashboard</span>
        <span className="text-white text-md font-semibold">Sair</span>
      </div> 
        <div className="flex flex-row w-full h-4/5">
          <div className="flex-col w-[50%] h-full bg-slate-200 p-10">
            {pedidos.map((row) => (
                <div key={row.pedId}>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row ">
                        <span className="text-xl text-black font-normal mt-1 mr-2">Pedido:</span>
                        <div className="text-2xl text-black font-bold">{row.pedId}</div>
                      </div>
                      <div className="flex flex-row ">
                        <span className="text-xl text-black font-normal mt-1 mr-2">Data:</span>
                        <div className="text-2xl text-black font-bold">{Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(row.pedData))}</div>
                      </div>  
                    </div>
                    <div className="flex flex-row mt-2 ">
                      <span className="text-xl text-black font-normal mt-1 mr-2">Cliente:</span>
                      <div className="text-2xl text-black font-bold">{row.pedCliId} - {row.cliNome}</div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-2">
                      <div className="flex flex-row ">
                        <span className="text-md text-black font-normal mt-1 mr-2">Celular:</span>
                        <div className="text-md text-black font-bold mt-1">{row.cliCelular}</div>
                      </div>
                      <div className="flex flex-row ">
                        <span className="text-md text-black font-normal mt-1 mr-2">Email:</span>
                        <div className="text-md text-black font-bold mt-1">{row.cliEmail}</div>
                      </div>  
                    </div> 
                    <div className="flex flex-row items-center justify-between mt-2">
                      <div className="flex flex-row ">
                        <span className="text-md text-black font-normal mt-2 mr-2">Cupom:</span>
                        <div className="text-md text-black font-bold">{row.pedCupom}</div>
                      </div>
                      <div className="flex flex-row ">
                        <span className="text-md text-black font-normal mt-2 mr-2">Valor Pedido:</span>
                        <div className="text-2xl text-green-500 font-bold">{Intl.NumberFormat('en-US', {style: 'currency', currency: 'BRL'}).format(row.pedVlrPagar)}</div>
                      </div>  
                    </div>
                    <div className="text-md text-md font-bold mt-10">Dados para entrega:</div>   
                    <div className="flex flex-row items-center justify-between bg-slate-300 p-1 ">
                      <div className="flex flex-row mt-3">
                        <span className="text-md text-black font-normal mr-2">Endereço:</span>
                        <div className="text-md text-black font-bold">{row.endLogradouro}</div>
                      </div>
                      <div className="flex flex-row mt-3">
                        <span className="text-md text-black font-normal mr-2">Nro:</span>
                        <div className="text-md text-black font-bold">{row.endNumero}</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between bg-slate-300 ">
                      <div className="flex flex-row mt-3">
                        <span className="text-md text-black font-normal mr-2">Complemento:</span>
                        <div className="text-md text-black font-bold">{row.endComplemento}</div>
                      </div>
                      <div className="flex flex-row mt-3">
                        <span className="text-md text-black font-normal mr-2">Cep:</span>
                        <div className="text-md text-black font-bold">{row.endCep}</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between bg-slate-300 ">                      
                      <div className="flex flex-row mt-3 ">
                        <span className="text-md text-black font-normal mr-2">Bairro:</span>
                        <div className="text-md text-black font-bold">{row.baiDescricao}</div>
                      </div>
                      <div className="flex flex-row mt-3">
                        <span className="text-md text-black font-normal mr-2">Cidade:</span>
                        <div className="text-md text-black font-bold">{row.cidDescricao}</div>
                      </div>
                    </div>                   
                </div>    
            ))}    
          </div>
          <div className="flex flex-col w-[50%] h-full bg-slate-400">
            <Table>
                <TableCaption>Lista de produtos do pedido</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Produto</TableHead>
                        <TableHead>Descrição Produto</TableHead>
                        <TableHead>Referencia Produto</TableHead>
                        <TableHead>Qtde</TableHead>
                        <TableHead className="text-right">Valor Unitário</TableHead>
                        <TableHead className="text-right">Valor Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {itens.map((item) => (
                    <TableRow key={item.itePedItem}>                        
                        <TableCell>{item.itePedId}</TableCell>
                        <TableCell className="font-medium">{item.itePedProId}</TableCell>
                        <TableCell>{item.prdDescricao}</TableCell>
                        <TableCell>{item.prdReferencia}</TableCell>
                        <TableCell>{item.itePedQtde}</TableCell>
                        <TableCell className="text-right">{item.itePedVlrUnit}</TableCell>
                        <TableCell className="text-right">{item.itePedVlrTotal}</TableCell>
                    </TableRow>
                ))}    
                </TableBody>
            </Table>
          </div>       
        </div>

      <div className="flex flex-row w-full h-32 items-center justify-center bg-slate-100"> 
        <button
          className='bg-violet-800 px-6 py-2.5 text-black hover:text-white font-medium text-xs uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/4 mb-3'
          type='button'
          onClick={handleEntrega}
        >
          Enviar para Entrega
        </button>
      </div>   
    </main>
  );
}