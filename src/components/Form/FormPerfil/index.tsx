import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../style";
import { IFormPerfil } from "../interface";
import { schemaFormPerfil } from "../schema";

export function FormPerfil() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormPerfil>({ resolver: yupResolver(schemaFormPerfil) })
    const formSubmit = (data: IFormPerfil) => console.log(data);

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>ALTERAR DADOS</h2>

            <label>
                Nome Completo
                <input type="text" id="name" autoComplete="off" {...register("name")} />
            </label>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" {...register("email")} />
            </label>

            <label>
                Password
                <input type="password" id="password" {...register("password")} />
            </label>

            <label>
                Celular
                <input type="tel" id="phone" autoComplete="off" {...register("phone")} />
            </label>

            <button type="submit">Alterar</button>
            <button className="delete" type="submit">Encerrar Conta</button>
        </Box>
    )
}