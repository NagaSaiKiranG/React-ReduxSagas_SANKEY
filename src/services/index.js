import { URL_dummy} from '../constants';
import mockResponse from '../constants/sankeyDummyResponse';
import { formatData } from '../utils';

export const loadData = async(req) =>{
    try {
        const response = await fetch(`${URL_dummy}`);
        const data = await response.json();
        //console.log(mockResponse);
        return formatData(mockResponse);
    } catch (e) {
        console.error('loading data failed: ', e);
    }
}
