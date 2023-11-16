"use server"

import { revalidatePath } from "next/cache"

export async function create(data) {
    const url = "process.env.NEXT_PUBLIC_API_URL + /conta/cadastro"

    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if(resp.status !== 200) return {error : "erro ao cadastrar"}

    revalidatePath("/adm/listAll")
}