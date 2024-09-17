import React from "react";
import { Form, Container } from "./styles";

const Login = () => {
    return ( 
        <Container>
            <Form>
             <h1> Faça seu login!👋</h1>
             <div>
                <p>Não possuí conta?</p>
                <a href="#/">Cadastrar</a>
             </div>
            </Form>
        </Container>
     );
}
 
export default Login;