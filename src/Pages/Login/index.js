import React from "react";
import { Form, Container } from "./styles";
import Input from "../../Components/Input/index";

const Login = () => {
    return ( 
        <Container>
            <Form>
             <h1> Faça seu login!👋</h1>
             <Input/>
             <Input/>
             <div>
                <p>Não possuí conta?</p>
                <a href="#/">Cadastrar</a>
             </div>
            </Form>
        </Container>
     );
}
 
export default Login;