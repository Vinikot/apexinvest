import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-around bg-cyan-900">
            <ul className='flex items-end gap-20 px-8 py-8 text-stone-300'>
                <li>
                    <Link href='/'>
                        <h1 className='text-2xl text-white'>ApexInvest</h1>
                    </Link></li>
                <li>
                    <Link href='#'>Dashboard</Link></li>
                <li>
                    <Link href='#'>Saldo</Link></li>
                <li>
                    <Link href='/servicos' className='text-stone-100'>Serviços</Link></li>
                <li>
                    <Link href='#'>Crédito</Link></li>
            </ul>

            <div className='h-10 w-10 rounded-full overflow-hidden'>
                <img src="https://github.com/Vinikot.png" alt="avatar" />
            </div>
        </nav>
    )
}