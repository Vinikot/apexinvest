import NavBar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar/>

      <main className='container bg-cyan-900 mt-10 mx-auto rounded-md p-4'>
        <h2>Home</h2>
      </main>
    </>
  )
}
