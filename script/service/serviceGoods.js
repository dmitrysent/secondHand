const URL_SERVER = 'http://localhost:3000';
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

const serviceGoods = async (fn, query) => {
    fn(await getGoods(query));
};


serviceGoods(console.log);

export default serviceGoods;