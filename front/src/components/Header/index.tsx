import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png"
import { Container } from "../Container";
import { Box } from "./style";

export function Header() {
    return (
        <Box>
            <Container>
                <nav>
                    <Link href={"/"}><Image src={logo} width="100" alt="Kenzie Logo" /></Link>
                    <menu>
                        <li><Link href="./register">CADASTRAR</Link></li>
                        <li><Link href="./dashboard">DASHBOARD</Link></li>
                        <li><Link href="./contact">NOVO CONTATO</Link></li>
                        <li><Link href="./perfil">PERFIL</Link></li>
                        <li><Link href="./">SAIR</Link></li>
                    </menu>
                </nav>
            </Container>
        </Box>
    );
}
