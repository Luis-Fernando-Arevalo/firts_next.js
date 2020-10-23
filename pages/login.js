import React from "react";
import Input from "../components/input";
import Boton from "../components/boton";

export default function login() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Input
        nomInput="Email"
        id="id"
        tipo="email"
        placeHolder="Ingrese su correo"
      />
      <Input
        nomInput="Clave"
        id="idClave"
        tipo="password"
        placeHolder="Ingrese clave"
      />
      <Boton />
      {/* <style jsx>{`
        formulario:{
            display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style> */}
    </div>
  );
}
