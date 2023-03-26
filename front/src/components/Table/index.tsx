import { GetServerSideProps, NextPage } from "next";
import { FaTrash, FaEdit } from "react-icons/fa";

import { Box } from "./style";
import { Props } from "./interface";
import { IContact } from "@/interfaces/contact";
import api from "@/services/api";

export const Table: NextPage<Props> = ({ contacts }) => {
    return (
        <Box cellSpacing="0">
            <caption>CONTATOS ADICIONADOS</caption>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Contato</th>
                    <th>Adicionado Em</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                {contacts ?

                    contacts.map((contact, index) => {
                        return (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.createdAt}</td>
                                <th><FaEdit className="icon" /></th>
                                <th><FaTrash className="icon" /></th>
                            </tr>
                        )
                    })
                    :
                    false
                }
            </tbody>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await api.get("/user/contact")
    const contacts: IContact[] = res.data

    return { props: { contacts } }
}