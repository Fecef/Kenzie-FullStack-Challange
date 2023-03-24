import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { FormRegister } from "@/components/Form/FormRegister";
import { Header } from "@/components/Header";

export default function Register() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormRegister />
                </Container>
            </main>
            <Footer />
        </>
    )
}