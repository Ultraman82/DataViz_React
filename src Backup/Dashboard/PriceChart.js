import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HishchartsTheme from "./HighchartsTheme";
import ChartSelect from './ChartSelect';

ReactHighcharts.Highcharts.setOptions(HishchartsTheme);

export default function() {
    return(
        <AppContext.Consumer>
            
            {({historical, changeChartSelect}) =>
            <Tile>
                <ChartSelect
                    defaultValue={"months"}
                    onChange = {e => changeChartSelect(e.target.value)}
                >
                    <option value="days"> Days </option>
                    <option value="weeks"> Weeks </option>
                    <option value="months"> Months </option>
                </ChartSelect>
                {historical ? <ReactHighcharts config={highchartsConfig(historical)}/> 
                : <div> Loadig Historical Data </div>}
            </Tile>
            }
        
        </AppContext.Consumer>
    )
}