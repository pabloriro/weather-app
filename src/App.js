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
  "Roma,it",
  "Santiago,chl",
  "Coquimbo,chl",
  "Rancagua,chl",
  "Chillan,chl",
  "Angol,chl",
  "Puerto Montt, chl"
];


class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar>
            <Toolbar>
              <Typografhy>
                Aplicación de Climas
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

 