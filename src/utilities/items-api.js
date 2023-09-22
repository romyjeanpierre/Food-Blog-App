import sendRequest from './send-request';

const BASE_URL = '/api/items';

//*Index
//Get all Grocery items 
export function getAll() {
  return sendRequest(BASE_URL);
}

//*Show
//Get grocery item by Id 
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

//*Create
//Create a new grocery item 
export function create(itemsData){
  console.log(itemsData);
  return sendRequest(BASE_URL, 'POST', itemsData)
}