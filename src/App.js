import React, { Component }from 'react';
//import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typografhy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
  "Arica,chl",
  "Iquique,chl",
  "Antofagasta,chl",
  "Copiapo,chl",
  "La Serena,chl",
  "Valparaiso,chl",
  "Santiago,chl",
  "Rancagua,chl",
  "Talca,chl",
  "Chillan,chl",
  "Concepcion,chl",
  "Temuco,chl",
  "Valdivia,chl",
  "Puerto Montt,chl",
  "Coyhaique,chl",
  "Punta Arenas,chl",
];


class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar>
            <Toolbar>
              <Typografhy>
                Aplicación de Climas Capitales de Chile
              </Typografhy>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
          <div className="details">
            <ForecastExtendedContainer/>
          </div>
          </Col>
        </Row>
        </Grid>
    );
  }
}

export default App; 

 