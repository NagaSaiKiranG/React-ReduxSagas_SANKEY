export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const CHANGE_LANGUAGE_ASYNC = "CHANGE_LANGUAGE_ASYNC";
export const changeLanguage = data => ({type: CHANGE_LANGUAGE, data});

export const GET_SANKEY_DATA = "GET_SANKEY_DATA";
export const SET_SANKEY_DATA_ASYNC = "SET_SANKEY_DATA_ASYNC";
export const getSankeyData = () => ({type: GET_SANKEY_DATA});
export const setSankeyData = data => ({type: SET_SANKEY_DATA_ASYNC, data});

export const SET_ROW_INDEX = "SET_ROW_INDEX";
export const SET_ROW_INDEX_ASYNC = "SET_ROW_INDEX_ASYNC";
export const setRowDataIndex = data => ({type: SET_ROW_INDEX, data});
export const setRowDataIndexAsync = data => ({type: SET_ROW_INDEX_ASYNC, data});