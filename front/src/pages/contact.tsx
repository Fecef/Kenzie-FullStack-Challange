import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { FormContact } from "@/components/Form/FromContact";
import { Header } from "@/components/Header";

export default function Perfil() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormContact />
                </Container>
            </main>
            <Footer />
        </>
    )
}