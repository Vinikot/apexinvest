import Button from '@/components/button'
import NavBar from '@/components/navbar'
import { ListBulletIcon, TrashIcon, WrenchScrewdriverIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function PageAdministrator() {

  return (
    <>
      <NavBar />

      <main className='container bg-cyan-900 mt-10 mx-auto rounded-md p-4 max-w-xl'>
        <div className='flex justify-between items-start'>
          <h2 className='text-xl font-bold'>Serviços ADM</h2>
        </div>

        <nav>
          <ul className='flex-row w-80 text-stone-300'>
            <li className='p-2'>
              <Button href="/adm/listAll" icon={<ListBulletIcon className="h-6 w-6 " />}>Listar usuarios</Button></li>
            <li className='p-2'>
              <Button href="/adm/addUser" icon={<UserPlusIcon className="h-6 w-6 " />}>Adicionar usuario</Button></li>
            <li className='p-2'>
              <Button href="/adm/#" icon={<TrashIcon className="h-6 w-6 " />}>Deletar usuario</Button></li>
            <li className='p-2'>
              <Button href="/adm/#" icon={<WrenchScrewdriverIcon className="h-6 w-6 " />}>Atualizar usuario usuarios</Button></li>
          </ul>
        </nav>
      </main>
    </>
  )
}
