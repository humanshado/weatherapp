import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

class WeatherList extends Component{
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                        <th>Wind Speed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((data) => {
                        const temps = data.list.map(item => item.main.temp);
                        const pres = data.list.map(item => item.main.pressure);
                        const humid = data.list.map(item => item.main.humidity);
                        const wspeed = data.list.map(item => item.wind.speed);
                        
                        return (
                            <tr key={data.city.id}>
                                <td>{data.city.name}, {data.city.country}</td>
                                <td>
                                    <Sparklines height={120} width={180} data={temps}>
                                        <SparklinesBars />
                                        <SparklinesReferenceLine type="mean" />
                                    </Sparklines>
                                </td>
                                <td>
                                    <Sparklines height={120} width={180} data={pres}>
                                        <SparklinesLine color="blue" style={{ fill: "blue" }}/>
                                        <SparklinesReferenceLine type="mean" />
                                    </Sparklines>
                                </td>
                                <td>
                                    <Sparklines height={120} width={180} data={humid}>
                                        <SparklinesLine color="green" style={{ fill: "green" }}/>
                                        <SparklinesReferenceLine type="mean" />
                                    </Sparklines>
                                </td>
                                <td>
                                    <Sparklines height={120} width={180} data={wspeed}>
                                        <SparklinesLine color="black" style={{ fill: "none" }} />
                                        <SparklinesReferenceLine type="mean" />
                                    </Sparklines>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);