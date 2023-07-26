"use client";

import Link from "next/link";
import { TextInput } from "ui";
import { Button } from "ui";

export default function SignUpPartner() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-full flex flex-col items-center bg-[#fb5b5a] p-10">
        <span className="font-bold text-white text-4xl">
          Cadastre-se como parceiro
        </span>
        <span className="font-bold text-white mt-60 text-2xl">
          Receba novas oportunidades de trabalho direto no seu celular
        </span>
      </div>
      <div className="flex flex-col items-center w-full p-10">
        <div className="flex flex-col mt-4 gap-3 w-full">
          <form onSubmit={() => {}}>
            <TextInput id="name" label="Nome" />
            <TextInput id="last_name" label="Sobrenome" />
            <TextInput id="cpf" label="CPF" />
            <TextInput id="email" label="Email" />
            <TextInput
              id="password_1"
              label="Senha"
              inputProps={{ type: "password" }}
            />
            <TextInput
              id="password_2"
              label="Repita Senha"
              inputProps={{ type: "password" }}
            />
            <Button id="cadastrar" color="secondary">
              Cadastrar
            </Button>
          </form>
        </div>
        <Link className="mt-10 font-bold" href={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
}

//flex justify-center
