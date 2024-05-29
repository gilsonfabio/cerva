import React from "react"
import Login from "./Login/page";
 
export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-900 ">
      <Login />  
    </main>
  );
}

//<Image src={imgLogin} alt="Imagem da tela de login" className="w-full h-screen" />