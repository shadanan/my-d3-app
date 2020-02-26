import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DonutChart from 'react-d3-donut';
import { BarChart } from 'react-d3-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import './App.css';

function SayHello({ firstName }) {
  return (
    <div>
      Hello {firstName}! How are you?
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 350,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function D3Components() {
  const classes = useStyles();

  const data = [
    { count: 20, color: '#880088', name: 'Galaxy 9' },
    { count: 10, color: '#00FF22', name: 'iPhone 11' },
    { count: 80, color: '#88AA00', name: 'Galaxy 10' },
    { count: 5, color: '#8800FF', name: 'iPad Pro' },
    { count: 40, color: '#88FF22', name: 'Note 10' },
    { count: 15, color: '#772387', name: 'LG C9 OLED TV' },
  ];

  const barData = [{
    label: 'somethingA',
    values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }]
  }];

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <DonutChart
            innerRadius={70}
            outerRadius={100}
            transition={true}
            svgClass="example1"
            pieClass="pie1"
            displayTooltip={true}
            strokeWidth={3}
            data={data} />
        </CardContent>
      </Card>
      <BarChart
        data={barData}
        width={400}
        height={400}
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
    </>
  );
}

function App() {
  const classes = useStyles();
  const [name, setName] = useState("Deven");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

  return (
    <div className="App">
      <input type="text" value={name} onChange={handleNameChange} />
      <SayHello firstName={name} />
      <Card className={classes.root}>
        <CardContent>
      <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
        </CardContent>
        </Card>
    </div>
  );
}

export default App;
