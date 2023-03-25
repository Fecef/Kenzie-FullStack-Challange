import { GetServerSideProps } from "next";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { FormRegister } from "@/components/Form/FormRegister";
import { Header } from "@/components/Header";
import { IFormRegister } from "@/components/Form/interface";
import api from "@/services/api";

// interface Props {
//     user: IFormRegister
// }

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

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const res = await api.get("/user")
// }