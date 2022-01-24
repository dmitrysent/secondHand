const URL_SERVER = 'https://evening-dusk-98038.herokuapp.com';
const URL_POSTFIX = '/api/goods';

const getGoods = (query = '') => 
    fetch(URL_SERVER + URL_POSTFIX + query)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        return new Error(response.statusText)
    })
    .catch(err => console.error(err));

const serviceGoods = async (fn, query, callback) => {
    fn(await getGoods(query));
    if (callback) callback();
};


export default serviceGoods;