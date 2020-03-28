import { SANKEY_DATA } from '../constants';

export const formatData = (data) => {
    const formattedResponse = [...SANKEY_DATA];
    data.rows.forEach((rObj)=>{
        //console.log("robj  ",rObj)
        const rowData = [];
        Object.keys(rObj).forEach((key)=>{
            rowData.push(rObj[key]);
        })
        formattedResponse.push(rowData);
    })
    return formattedResponse;
}