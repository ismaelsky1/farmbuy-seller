import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Table, Badge, Button, InputGroup, Form, FormControl, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-maskedinput';


import { CgMenuRound } from "react-icons/cg";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { RiSendPlaneFill } from "react-icons/ri";


import { useLocation, useHistory, useParams, Link } from "react-router-dom";

import Header from '../../components/Header';
import CurrencyInput from '../../components/CurrencyInput';

import avatar2 from '../../assets/image/avatar2.png';

import './Profile.css';
import { truncate } from 'fs';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}



function Quotation() {
  const history = useHistory();
  let query = useQuery();
  let { id } = useParams<any>();

  useEffect(() => {
    query.get('id')
  }, [])

  const schema = yup.object().shape({
    phone: yup.string()
      // .min(15, 'Menor que 11 digitos!')
      // .max(17, 'Maior que 11 digitos!')
      .required('Required')
      .
      .matches(/^\d+$/, { message: 'numero incorreto' })
    // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  const handleLogin = (res: any) => {
    console.log(res)
    return true
  }

  return (
    <>
      <Header />

      <Container>
        <Row>

          <Col sm='12'>

            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row>
                <Col sm={3}>
                  <Col sm='12' className="my-3">
                      <Row>
                        <Col sm='12' className="text-center">
                          <img width='80%' src={avatar2} />
                        </Col>
                        <Col className="text-center">
                          <h4>AGROGOLD</h4>
                          <Link to="#"><h6>Mudar logo</h6></Link>
                        </Col>
                      </Row>
                    
                  </Col>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="1">Dados Pessoais</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Dados Empresa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Segurança</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="mt-4">
                  <Tab.Content>
                    <Tab.Pane eventKey="1">
                      <Formik
                        validationSchema={schema}

                        onSubmit={({ phone }: any) => {

                          handleLogin(phone)
                        }}
                        initialValues={{
                          name: '',
                          phone: '',
                          document: '',
                          email: '',
                          address_street: '',
                          address_number: '',
                          address_neighborhood: '',
                          address_complement: '',
                          address_city: '',
                          address_state: ''
                        }}
                        
                      >
                        {({
                          handleSubmit,
                          handleChange,
                          handleBlur,
                          values,
                          touched,
                          isValid,
                          errors,
                          setSubmitting,
                          isSubmitting
                        }) => (
                          <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="name">
                                  <Form.Label>Nome {isSubmitting}</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.name}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Nome obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                                
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="email">
                                  <Form.Label>Email</Form.Label>
                                  <FormControl
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.email}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="document">
                                  <Form.Label>Documento</Form.Label>
                                  <FormControl
                                    type="numero"
                                    name="document"
                                    value={values.document}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.document}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    CPF deve conter 11 digitos.<br /> Exemplo: 000.000.000-00</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="phone">
                                  <Form.Label>Numero Celular</Form.Label>
                                  <FormControl
                                    as={MaskedInput}
                                    mask="(11) 1 1111-1111"
                                    placeholderChar=""
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

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="address_street">
                                  <Form.Label>Endereço:</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="address_street"
                                    value={values.address_street}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.address_street}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="address_number">
                                  <Form.Label>Nº:</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="address_number"
                                    value={values.address_number}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.address_number}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="address_complement">
                                  <Form.Label>Complemento:</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="address_complement"
                                    value={values.address_complement}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.address_complement}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="address_neighborhood">
                                  <Form.Label>Bairro:</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="address_neighborhood"
                                    value={values.address_neighborhood}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.address_neighborhood}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="address_city">
                                  <Form.Label>Cidade:</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="address_city"
                                    value={values.address_city}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.address_city}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col md={12}>
                                <Form.Group as={Col} md={6} controlId="address_state">
                                  <Form.Label>Estado:</Form.Label>
                                  <FormControl
                                    type="text"
                                    name="address_state"
                                    value={values.address_state}
                                    onChange={handleChange}
                                    isInvalid={touched && !!errors.address_state}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório.</Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Button block={true} type="submit" variant="success">Entrar</Button>
                          </Form>
                        )}
                      </Formik>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      name
                      fantasy_name
                      document
                      phone
                      address_street
                      address_number
                      address_neighborhood
                      address_complement
                      address_city
                      address_state
                      email
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      password
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Quotation;
