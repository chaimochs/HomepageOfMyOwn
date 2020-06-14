const axios = require('axios')

const getUpi = async () => {
    let res
    res = await axios.get('http://api.ipstack.com/109.226.21.217?access_key=c7b6f76297dd82f89f51f0e9567a42e4')
        console.log(res.data)
        return res.data
};

export default getUpi