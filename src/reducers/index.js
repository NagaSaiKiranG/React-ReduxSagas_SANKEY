import { CHANGE_LANGUAGE_ASYNC, SET_SANKEY_DATA_ASYNC, SET_ROW_INDEX_ASYNC } from '../actions';

const initialState = {
    "selectedLanguage" : "en",
    "languages" : [
        {
            "name" : "Korean",
            "value" : "ko"
        },
        {
            "name" : "English",
            "value" : "en"
        }
    ],
    "sankeyData":[],
    "selectedRowData": []
}

export default (state = initialState, { type, data}) => {
    switch(type) {
        case CHANGE_LANGUAGE_ASYNC: {
            return { ...state, selectedLanguage : data}
        }
        case SET_SANKEY_DATA_ASYNC: {
            return { ...state, sankeyData : data}
        }
        case SET_ROW_INDEX_ASYNC: {
            console.log("SET_ROW_INDEX_ASYNC",data);
            return { ...state, selectedRowData : data}
        }        
        default:
            return { ...state}
    }
}