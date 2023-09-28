import Button from "@/components/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <main className='container bg-cyan-900 mt-10 mx-auto rounded-md p-4 max-w-lg'>
                <div className='flex justify-around items-center'>
                    <h2>Pagina não encontrada.</h2>

                    <Button href="/">Voltar para Home.</Button>
                </div>
            </main>
        </>
    )
}