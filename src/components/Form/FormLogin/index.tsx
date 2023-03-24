import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../style";
import { IFormLogin } from "../interface";
import { schemaFormLogin } from "../schema";

export function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({ resolver: yupResolver(schemaFormLogin) })
    const formSubmit = (data: IFormLogin) => console.log(data);

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>LOGIN</h2>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" value="fecef.figueiredo@gmail.com" {...register("email")} />
            </label>

            <label>
                Password
                <input type="password" id="password" value="1234" {...register("password")} />
            </label>

            <button type="submit">Enviar</button>
        </Box>
    )
}