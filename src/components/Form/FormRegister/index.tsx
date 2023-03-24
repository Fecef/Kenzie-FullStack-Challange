import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../style";
import { IFormRegister } from "../interface";
import { schemaFormRegister } from "../schema";

export function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormRegister>({ resolver: yupResolver(schemaFormRegister) })
    const formSubmit = (data: IFormRegister) => console.log(data);

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>CADASTRO</h2>

            <label>
                Nome Completo
                <input type="text" id="name" autoComplete="off" value="Felipe César" {...register("name")} />
            </label>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" value="fecef.figueiredo@gmail.com" {...register("email")} />
            </label>

            <label>
                Password
                <input type="password" id="password" value="1234" {...register("password")} />
            </label>

            <label>
                Celular
                <input type="tel" id="phone" autoComplete="off" value="11945455167" {...register("phone")} />
            </label>

            <button type="submit">Enviar</button>
        </Box>
    )
}