import React from 'react';
import {connect} from 'react-redux';

import Typography from '@material-ui/core/Typography';

import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import GammelTheme from 'fusioncharts/themes/es/fusioncharts.theme.gammel';
import ReactFC from 'react-fusioncharts';
ReactFC.fcRoot(FusionCharts, Column2D, GammelTheme);

let chartConfigs = {
  type: 'column2d', // The chart type
  width: '50%', // Width of the chart
  height: '50%', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
      // Chart Configuration
      "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "gammel",
          "type": "column2d"
      },
      // Chart Data
      "data": [{
          "label": "Venezuela",
          "value": "290"
      }, {
          "label": "Saudi",
          "value": "260"
      }, {
          "label": "Canada",
          "value": "180"
      }, {
          "label": "Iran",
          "value": "140"
      }, {
          "label": "Russia",
          "value": "115"
      }, {
          "label": "UAE",
          "value": "100"
      }, {
          "label": "US",
          "value": "30"
      }, {
          "label": "China",
          "value": "30"
      }]
  }
};


class Charts extends React.Component {
  render() {
    return (
      this.props.showOrdersChart.visible ? 
      <div>
          <Typography variant="display1" gutterBottom>
            Charts
          </Typography>

          <ReactFC {...chartConfigs} />
      
      </div>

      : ""
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showOrdersChart: state.ordersChartReducer
  };
};

export default connect(mapStateToProps)(Charts);