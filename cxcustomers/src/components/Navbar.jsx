import "./Navbar.css"
import Link from 'next/link'

export default function Navbar(){
    return(
        <nav className="navbar py-10">
            <Link href="/">
                <h1 className="text-3xl font-bold">ConstruEX</h1>
            </Link>
            <ul>
                <li>
                    <a href='/metrics'>Metrics</a>
                </li>
                <li>
                    <a href='/upload'>Upload</a>
                </li>
            </ul>
        </nav>
    )
}