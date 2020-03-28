import React from 'react';
import Chart from "react-google-charts";

const ChartWrapper = (props) => {
    const {className, width, height, chartType, data, loader, chartEvents, options,legendToggle} = {...props};
    //console.log("ChartWrapper", data)
    return (
        <div className={className}>
            <Chart
                width={width}
                height={height}
                chartType={chartType}
                loader={loader}
                data={data}
                chartEvents={chartEvents}
                options={options}
                legendToggle={legendToggle}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default ChartWrapper;