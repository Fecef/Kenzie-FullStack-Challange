import { Box } from "../style";

export function FormPerfil() {
    return (
        <Box>
            <h2>ALTERAR DADOS</h2>

            <label>
                Nome Completo
                <input type="text" name="name" id="name" autoComplete="off" />
            </label>

            <label>
                Email
                <input type="email" name="email" id="email" autoComplete="off" />
            </label>

            <label>
                Password
                <input type="password" name="password" id="password" />
            </label>

            <label>
                Celular
                <input type="tel" name="phone" id="phone" autoComplete="off" />
            </label>

            <button type="submit">Alterar</button>
            <button type="submit">Encerrar Conta</button>
        </Box>
    )
}