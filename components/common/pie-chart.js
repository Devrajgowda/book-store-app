import React, {Component} from 'react';

export default class PieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pieData: [
                {name: "English",y: 6},
                {name: "Kannada",y: 4},
                {name: "Telugu",y: 4},
                {name: "Tamil",y: 3},
                {name: "Malayalam",y: 2}
            ]
        }
    }
    render() {
        return (
                <DonutChart data = {this.state.pieData}/>
        );
    }
}

class DonutChart extends React.Component {
    constructor(props) {
        super(props);
        this.chart = undefined;
    }

    componentDidMount() {
        this.chart = $(React.findDOMNode(this.refs.chart)).highcharts({
            chart: {
                type: 'pie'
            },
            title: 'Browser Language used',
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: this.props.data,
                size: '50%',
                innerSize: '65%',
                showInLegend:true,
                dataLabels: {
                    enabled: <true></true>
                }
            }]
        });
    }

    componentWillReceiveProps(props) {
        this.chart.highcharts().series[0].setData(props.data);
    }

    render() {
        return (
            <div ref='chart'>
            </div>
        )
    }
}