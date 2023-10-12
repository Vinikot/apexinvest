"use client"

import Button from '@/components/button'
import NavBar from '@/components/navbar'
import InputText from '@/components/input-text'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { create } from '@/actions/user'
import { useRouter } from 'next/navigation'

export default async function PageAdministratorAddUser() {

  const { push } = useRouter()

  async function onSubmit(formData) {

    const resp = await create(formData)

    if (resp?.error) {
      alert(resp.error)
      return
    }

    push("/adm")
  }

  return (
    <>
      <NavBar />

      <main className='container bg-cyan-900 mt-10 mx-auto rounded-md p-4 max-w-md'>
        <div className='flex justify-between items-start'>
          <h2 className='text-xl font-bold'>ADM Adicionar Usuarios</h2>

          <Button href="/adm" icon={<ArrowUturnLeftIcon className="h-6 w-6 " />}>
            Voltar
          </Button>
        </div>

        <form action={onSubmit} className='flex flex-col items-start gap-3 w-3/4 mt-2'>

          <InputText name="agencia" Label="Agencia" />
          <InputText name="numero" Label="Número" />
          <InputText name="saldo" Label="Saldo" />
          <InputText name="senha" Label="Senha" />
          <InputText name="nome" Label="Nome" />
          <InputText name="cpf" Label="CPF" />
          <InputText name="telefone" Label="Telefone" />
          <InputText name="email" Label="Email" />
          <InputText name="idade" Label="Idade" />

          <Button type='button'>salvar</Button>
        </form>

      </main>
    </>
  )
}
