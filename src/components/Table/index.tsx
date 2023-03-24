import { FaTrash, FaEdit } from "react-icons/fa";

import { Box } from "./style";

export function Table() {
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
                <tr>
                    <td>Felipe César</td>
                    <td>fecef.figueiredo@gmail.com</td>
                    <td>(11) 9-4545-5167</td>
                    <td>24-03-2023</td>
                    <th><FaEdit className="icon"/></th>
                    <th><FaTrash className="icon"/></th>
                </tr>
                <tr>
                    <td>Felipe</td>
                    <td>fecef@gmail.com</td>
                    <td>(11) 9-4545-5167</td>
                    <td>24-03-2023</td>
                    <th><FaEdit className="icon"/></th>
                    <th><FaTrash className="icon"/></th>
                </tr>
            </tbody>
        </Box>
    )
}