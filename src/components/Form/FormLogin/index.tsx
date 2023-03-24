import { Box } from "../style";

export function FormLogin() {
    return (
        <Box>
            <h2>LOGIN</h2>
            
            <label>
                Email
                <input type="email" name="email" id="email" autoComplete="off" />
            </label>

            <label>
                Password
                <input type="password" name="password" id="password" />
            </label>

            <button type="submit">Enviar</button>
        </Box>
    )
}