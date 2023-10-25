"use client";

import Link from "next/link";
import { TextInput } from "ui";
import { Button } from "ui";
import { NotificationCard } from "ui";
import { ROUTES } from "../../../../lib/constants";
import { commonAuthClassName } from "../../../../utils";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
import { cpfMask, validateCpf } from "../../../../utils/mask";
import { ChangeEvent } from "react";

const schemaValidation = z
  .object({
    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, { message: "Preencha seu nome" }),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(1, { message: "Preencha seu sobrenome" }),
    cpf: z
      .string({ required_error: "CPF is required" })
      .min(1, { message: "Preencha seu CPF" })
      .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: "CPF inválido" }),
    email: z.string().min(1, { message: "Preencha seu Email" }).email({
      message: "Email inválido",
    }),
    phone: z
      .string({ required_error: "Phone is required" })
      .min(1, { message: "Preencha seu celular" })
      .regex(/^\(\d{2}\)\s\d{4,5}\-\d{4}$/, { message: "Celular inválido" }),
    password: z.string({ required_error: "Password is required" }).min(6, {
      message: "A senha deve conter no mínimo 6 caracteres",
    }),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(6, {
        message: "A confirmação de senha deve conter no mínimo 6 caracteres",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "A senhas devem ser iguais",
  })
  .refine((data) => validateCpf(data.cpf), {
    path: ["cpf"],
    message: "CPF inválido",
  });

type SchemaValidation = z.infer<typeof schemaValidation>;

export default function SignUpPartner() {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<SchemaValidation>({
    mode: "onBlur",
    resolver: zodResolver(schemaValidation),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const errorContainerRef = useRef<null | HTMLDivElement>(null);

  const onSubmit: SubmitHandler<SchemaValidation> = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        setError("");

        // TODO:
        // save user
        // login
        // redirect to home
      } catch (error: any) {
        const errorMessage = error?.message
          ? error?.message
          : "Please, try again later";

        if (
          error?.message?.includes("Email already registered") ||
          error?.message?.includes("UsernameExistsException")
        ) {
          // return router.push(
          //   `${ROUTES.signin}?error=${ERRORS.emailAlreadyRegistered}`
          // );
        }

        setError(errorMessage);
        errorContainerRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handleChangeCpf = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const cpf = e.currentTarget.value;

    setValue("cpf", cpfMask(cpf), {
      shouldValidate: true,
    });
  }, []);

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
      <div className="flex flex-col items-center w-full p-10 lg:w-[80%]">
        <section className={`${commonAuthClassName}`} ref={errorContainerRef}>
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
          {error && (
            <div className="mx-auto mt-4 w-full ssm:max-w-[361px] sm:max-w-[488px]">
              <NotificationCard
                isClosable
                description={error}
                variant="error"
                title="Something went wrong"
                onClose={() => setError("")}
              />
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full gap-2 mt-2">
              <TextInput
                id="firstName"
                label="Nome"
                error={errors?.firstName?.message}
                inputProps={{ ...register("firstName") }}
              />
              <TextInput
                id="lastName"
                label="Sobrenome"
                error={errors?.lastName?.message}
                inputProps={{ ...register("lastName") }}
              />
            </div>
            {/* TODO: CNPJ */}
            <TextInput
              id="cpf"
              label="CPF"
              error={errors?.cpf?.message}
              inputProps={{ ...register("cpf"), onChange: handleChangeCpf }}
            />
            <TextInput
              id="email"
              label="Email"
              error={errors?.email?.message}
              inputProps={{ ...register("email"), type: "email" }}
            />
            <TextInput
              id="phone"
              label="Celular"
              error={errors?.phone?.message}
              inputProps={{ ...register("phone"), type: "text", maxLength: 15 }}
            />
            <TextInput
              id="password"
              label="Senha"
              error={errors?.password?.message}
              inputProps={{
                ...register("password"),
                type: "password",
                onBlur: () => {
                  trigger(["confirmPassword", "password"]);
                },
              }}
            />
            <TextInput
              id="confirmPassword"
              label="Repita Senha"
              error={errors?.confirmPassword?.message}
              inputProps={{ ...register("confirmPassword"), type: "password" }}
            />
            <Button id="cadastrar" color="secondary">
              Cadastrar
            </Button>
          </form>
        </section>
        {/* <Link className="mt-10 font-bold" href={"/"}>
          Home
        </Link> */}
      </div>
    </div>
  );
}
