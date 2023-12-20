import Link from 'next/link'
export default function NotFound(){
    return(
        <section>
            <h1>404</h1>
            <p>Page no encontrada</p>
            <Link href="/">Volver</Link>
        </section>
    )
}