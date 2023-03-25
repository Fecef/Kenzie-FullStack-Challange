import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { FormPerfil } from "@/components/Form/FormPerfil";
import { Header } from "@/components/Header";

export default function Perfil() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormPerfil />
                </Container>
            </main>
            <Footer />
        </>
    )
}