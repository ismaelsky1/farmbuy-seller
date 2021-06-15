import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Badge, Button, InputGroup, Form, FormControl, Dropdown } from 'react-bootstrap';


import { CgMenuRound } from "react-icons/cg";
import { useLocation, useHistory, useParams, Link } from "react-router-dom";

import Header from '../../components/Header';
import CurrencyInput from '../../components/CurrencyInput';

import brand from '../../assets/image/logo-init.png';
import pdo from '../../assets/image/pdo.jpg';
import pdo2 from '../../assets/image/pdo2.jpg';
import './Quotation.css';

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

  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col sm='10' className="mt-3">
          <h6><Link className="text-secondary" to="/dashboard">Voltar</Link></h6>
            <h2>AGROGOLD <label className="text-secondary h5">#1223</label></h2>
          </Col>
          <Col sm='2' className="align-self-end mb-3">
            <Dropdown className="text-right">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Opções
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Recusar Cotação</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="">
            <Table responsive>
              <thead>
                <tr className="text-secondary h6">
                  <th>Produto</th>
                  <th colSpan={6} >Quatidade</th>
                  <th>Quant.Disponivel</th>
                  <th>Valor</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      className='rounded-circle'
                      width="30"
                      height="30"
                      src={pdo} /> Adubo
                  </td>
                  <td colSpan={6}>
                    12 und
                  </td>
                  <td >
                    {/* <Badge variant="danger">Indisponível</Badge> */}
                    <Form.Control type="number" width='10%' size="sm" placeholder="0" />
                  </td>
                  <td >
                    <FormControl
                      as={CurrencyInput}
                      placeholder="R$ 0,00"
                      type='text'
                      size="sm"
                    />
                  </td>
                  <td><Button style={{ padding: 0, margin: 0 }} size="sm" onClick={() => { history.push(`/q/q2q2`) }} variant="link"><h5 style={{ padding: 0, margin: 0, color: 'black' }}><CgMenuRound /></h5></Button></td>
                </tr>
                <tr>
                  <td>
                    <img
                      className='rounded-circle'
                      width="30"
                      height="30"
                      src={pdo2} /> Pesticida
                  </td>
                  <td colSpan={6}>
                    8 und
                  </td>
                  <td >
                    {/* <Badge variant="danger">Indisponível</Badge> */}
                    <Form.Control width='10%' size="sm" type="number" placeholder="0" />
                  </td>
                  <td >
                    <FormControl
                      as={CurrencyInput}
                      placeholder="R$ 0,00"
                      type='text'
                      size="sm"
                    />
                  </td>
                  <td><Button style={{ padding: 0, margin: 0 }} size="sm" onClick={() => { history.push(`/q/q2q2`) }} variant="link"><h5 style={{ padding: 0, margin: 0, color: 'black' }}><CgMenuRound /></h5></Button></td>
                </tr>

              </tbody>
            </Table>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Quotation;
