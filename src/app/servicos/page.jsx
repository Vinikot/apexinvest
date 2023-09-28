import Button from '@/components/button'
import NavBar from '@/components/navbar'
import { ArrowsRightLeftIcon, CreditCardIcon, QrCodeIcon, PlusIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function PageServicos() {
  return (
    <>
      <NavBar />

      <main className='container bg-cyan-900 mt-10 mx-auto rounded-md p-4 max-w-xl'>
        <div className='flex justify-between items-start'>
          <h2 className='text-xl font-bold'>Serviços</h2>

          <Button href="/servicos/new" icon={<PlusIcon className="h-6 w-6 " />}>
            Outros Serviços
          </Button>
        </div>

        <nav>
          <ul className='flex-row w-60 text-stone-300'>
            <li className='p-2'>
              <Button href="/servicos/transf" icon={<ArrowsRightLeftIcon className="h-6 w-6 " />}>Fazer tranferência</Button></li>
            <li className='p-2'>
              <Button href="/servicos/transf" icon={<QrCodeIcon className="h-6 w-6 " />}>Pagar conta</Button></li>
            <li className='p-2'>
              <Button href="/servicos/#" icon={<CreditCardIcon className="h-6 w-6 " />}>Débito automático</Button></li>
          </ul>
        </nav>
      </main>
    </>
  )
}
