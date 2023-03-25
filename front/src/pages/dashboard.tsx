import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";

export default function Dashboard() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Table />
                </Container>
            </main>
            <Footer />
        </>
    )
}