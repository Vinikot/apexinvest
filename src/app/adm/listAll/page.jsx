import Button from '@/components/button'
import NavBar from '@/components/navbar'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import DataRow from './datarow'

async function carregarDados() {
  const url = "http://localhost:8080/conta/listar-todas"
  const resp = await fetch(url, { next: { revalidate: 600 } })

  if (resp.status !== 200) {
    alert("ERRO AO BUSCAR DADOS DE USUARIOS")
    return
  }

  return await resp.json()
}

export default async function PageAdministratorListAll() {

  const users = await carregarDados()


  return (
    <>
      <NavBar />

      <main className='container bg-cyan-900 mt-10 mx-auto rounded-md p-4 max-w-xl'>
        <div className='flex justify-between items-start'>
          <h2 className='text-xl font-bold'>ADM Listar Usuarios</h2>

          <Button href="/adm" icon={<ArrowUturnLeftIcon className="h-6 w-6 " />}>
            Voltar
          </Button>
        </div>

        <div className='space-y-2'>
          {users.map(users => <DataRow users={users} />)}
        </div>
      </main>
    </>
  )
}
