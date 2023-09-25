"use client";

import Link from "next/link";
import { TextInput } from "ui";
import { Button } from "ui";
import { commonAuthClassName } from "../../../../utils";
import { ROUTES } from "../../../../lib/constants";

export default function SignUpClient() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col lg:flex-row">
      <div className="w-full flex flex-col items-center bg-blue-900 p-10">
        <span className="font-bold text-white text-4xl">
          Cadastre-se como cliente
        </span>
        <span className="font-bold text-white mt-60 text-2xl">
          Encontre um profissional em instantes
        </span>
      </div>
      <div className="flex flex-col items-center w-full p-10 lg:w-[80%]">
        <section className={`${commonAuthClassName}`}>
          <div className="flex flex-col align-middle">
            <h1 className="mb-1 text-[32px] font-medium">Crie uma conta</h1>
            <h2 className="px-1 text-sm font-normal">
              Já tem uma conta?
              <Link
                href={ROUTES.signin}
                className="ml-1 text-sm font-medium text-primary"
              >
                Entre aqui
              </Link>
            </h2>
          </div>
          <form onSubmit={() => {}}>
            <div className="flex w-full gap-2 mt-2">
              <TextInput id="name" label="Nome" />
              <TextInput id="last_name" label="Sobrenome" />
            </div>
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
            <Button id="cadastrar" color="primary">
              Cadastrar
            </Button>
          </form>
        </section>
        <Link className="mt-10 font-bold" href={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
}

//flex justify-center
