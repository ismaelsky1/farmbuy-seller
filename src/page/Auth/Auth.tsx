import React, { useEffect } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

import { useLocation, useHistory } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-maskedinput';

import { login } from '../../services/authentication';

import logo from '../../assets/image/logo-init.png';
import './Auth.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Auth() {
  const history = useHistory();
  let query = useQuery();


  const schema = yup.object().shape({
    phone: yup.string()
      .min(15, 'Menor que 11 digitos!')
      .max(17, 'Maior que 11 digitos!')
      .required('Required'),
    // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  const handleLogin = (res: any) => {
    login(res).then(function (response) {
      if (query.get('redirect')) {
        history.push(`/q/${query.get('redirect')}`)
      } else {
        history.push("/dashboard")
      }
    }).catch(function (error) {
      console.log(error);
    });;



  }

  useEffect(() => {
    // console.log(query.get('nome'))
  }, [])

  //  process.env.CLIENT_ID as string

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4" className="text-center">

          <img src={logo} className="Logo" alt="logo" />

          <Formik
            validate={(values) => {
              const errors: any = {};
              if (!values.phone) {
                errors.phone = 'Required';
              }
              values.phone = values.phone.replace(/[^a-z0-9]/gi, '')
              if (values.phone.length !== 11) {
                errors.phone = "Preencha o numero corretamente!";
              }

              return errors;
            }}

            onSubmit={({ phone }: any) => {
              handleLogin(phone)
            }}
            initialValues={{ phone: '' }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Col md={12}>
                    <Form.Group controlId="phone">
                      <Form.Label>Numero Celular</Form.Label>
                      <FormControl
                        as={MaskedInput}
                        mask="(11) 1 1111-1111"
                        placeholderChar=""
                        style={{ textAlign: 'center' }}
                        type="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={touched && !!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        Numero deve conter 11 digitos.<br /> Exemplo: (00) 9 0000-0000</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Button block={true} type="submit" variant="success">Entrar</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container >

  );
}

export default Auth;
