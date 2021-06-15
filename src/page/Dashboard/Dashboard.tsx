import React from 'react';
import { Container, Row, Col, Table, Badge, Button } from 'react-bootstrap';
import { FaBell } from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";


import { login } from '../../services/authentication';
import Header from '../../components/Header';

import brand from '../../assets/image/logo.png'

import './Dashboard.css';


function Auth() {
  const history = useHistory();


  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col sm='12' className="mt-3">
            <h2>Lista de cotações</h2>
          </Col>
          <Col className="">
            <Table responsive>
              <thead>
                <tr>
                  <th>Empresa</th>
                  <th>Nº</th>
                  <th>Produtos</th>
                  <th>Status</th>
                  <th>Vencimento</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                    className='rounded-circle'
                      width="30"
                      height="30"
                      src={brand} /> AGROGOLD
                  </td>
                  <td>#1254</td>
                  <td>8</td>
                  <td><Badge variant="success">Aprovado</Badge></td>
                  <td>08/04/21</td>
                  <td><Button  onClick={() => { history.push(`/q/q2q2`) }} variant="success">Ver</Button></td>
                </tr>
                <tr>
                  <td>
                    <img
                      width="30"
                      height="30"
                      src={brand} /> AGROGOLD
                  </td>
                  <td>#1254</td>
                  <td>8</td>
                  <td><Badge variant="secondary">Em avaliação</Badge></td>
                  <td>08/04/21</td>
                  <td><Button onClick={() => { history.push(`/q/q2q2`) }} variant="success">Ver</Button></td>
                </tr>
                <tr>
                  <td>
                    <img
                      width="30"
                      height="30"
                      src={brand} /> AGROGOLD
                  </td>
                  <td>#1254</td>
                  <td>8</td>
                  <td><Badge variant="info">A preencher</Badge></td>
                  <td>08/04/21</td>
                  <td><Button  onClick={() => { history.push(`/q/q2q2`) }} variant="success">Ver</Button></td>
                </tr>
                <tr>
                  <td>
                    <img
                      width="30"
                      height="30"
                      src={brand} /> AGROGOLD
                  </td>
                  <td>#1254</td>
                  <td>8</td>
                  <td><Badge variant="warning">Análise pelo cliente</Badge></td>
                  <td>08/04/21</td>
                  <td><Button  onClick={() => { history.push(`/q/q2q2`) }} variant="success">Ver</Button></td>
                </tr>
              </tbody>
            </Table>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Auth;
