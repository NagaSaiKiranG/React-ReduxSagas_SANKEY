import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChartWrapper from "../Chart";
import './SankeyChart.css';
import { SANKEY } from '../../constants';
import { getSankeyData, setRowDataIndex } from '../../actions';

const SankeyChartComponent = (props) => {
    const data = useSelector((state) => state.sankeyData);
    const [currentRowIndex, setRowIndex] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSankeyData());
    }, [])
    const handleClick = () => {
        //console.log("handle click", currentRowIndex)
        if (data.length)
            dispatch(setRowDataIndex(data[currentRowIndex]))
    }
    const options = {
        //tooltip: { isHtml: true, trigger: "visible" },
        sankey: {
            link: { color: { fill: '#d799ae' } },
            node: {
                interactivity: true,
                colors: [
                    '#a6cee3',
                    '#1f78b4',
                    '#b2df8a',
                    '#33a02c'
                ],
                label: {
                    fontName: 'Times-Roman',
                    fontSize: 14,
                    color: '#871b47',
                    bold: true,
                    italic: true
                }
            },
        }
    };
    // const rowData = (rowIndex) => {
    //     console.log(data[rowIndex]);
    // }
    // const setclick = (container) => {
    //     container.addEventListener("click", ()=>{
    //         console.log("clicked")
    //     });
    // }
    // const handleClick = (value) => {
    //     console.log(value)
    // }
    // const toolTip = (arr) => {
    //     return `<span onClick=${handleClick(arr)}>Expand</span>`
    // }
    // const data = data1.map((arr,i)=>{

    //     if(i!=0){
    //         const temp = [...arr]
    //         //console.log()
    //         temp.push(toolTip(arr))
    //         return temp;
    //     }
    //     //console.log(arr)
    //     return arr

    // })
    // console.log(data)
    const chartEvents = [
        {
            callback: ({ chartWrapper, google }) => {
                //console.log("ready is fired", chartWrapper.getChartType());
                const chart = chartWrapper.getChart();
                //console.log( chart);
                //chart.getSelection(["salary"])
                //console.log( chart);
                //chart.container.addEventListener("click", (ev) => console.log(ev))
                //setclick(chart.container);
                // google.visualization.events.addListener(chartWrapper, 'select', e => {
                //    alert("hii")
                // });
                google.visualization.events.addListener(chart, 'onmouseover', e => {
                    const { row, column } = e;
                    //const data = chartWrapper.getDataTable().getValue(row,column);
                    //console.log("on mouse over "+row+" "+column)
                    //console.log("onmouseover ",row)
                    setRowIndex(row+1)
                });

            },
            eventName: "ready"
        }
    ];
    if (!data.length) {
        return (<div>Loading data ....</div>)
    }
    return (
        <div className="Sankey" onMouseDownCapture={handleClick}>
            <ChartWrapper
                width={800}
                height={'400px'}
                chartType={SANKEY}
                loader={<div>Loading Chart</div>}
                data={data}
                chartEvents={chartEvents}
                options={options}
                legendToggle={true}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default SankeyChartComponent;