import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useHistory } from "react-router-dom";


import logo from '../../assets/image/logo-init.png';
import './Auth.css';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function Auth() {
  const history = useHistory();
  const [checking, setChecking] = useState(false);
  // let query = useQuery();

  useEffect(() => {
    // console.log(query.get('nome'))
  }, [])

  //  process.env.CLIENT_ID as string

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Numero telefonico</Form.Label>
            <Form.Control type="email" placeholder="(99) 9 9999-9999" style={{textAlign: 'center'}} />
            {/* <Form.Text className="text-muted">
            
            </Form.Text> */}
            <Form.Control.Feedback>Certifique-se de o telefone foi digitado corretamente.!</Form.Control.Feedback>
          </Form.Group>

          {checking && <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>}
         
          <Button type="submit" variant="outline-success"> <FcGoogle style={{ marginTop: '-4px', marginRight: '5px' }} />Entrar</Button>
        </Form>
      </header>
    </div>
  );
}

export default Auth;
