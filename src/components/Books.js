import React, {useState, useEffect} from 'react';
import moment from 'moment'
const axios = require('axios')

const Books = () => {
    const LENGTH_OF_WEEK_IN_MS = 604800000
    const [books, setBooks] = useState([])  
    
    useEffect(()=> {
        getBooks()
        const interval = setInterval(() => {
           getBooks()
          }, LENGTH_OF_WEEK_IN_MS);
          return () => clearInterval(interval);
    }, [])
    
    const getBooks = async () => {
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=z0IYAainTassTYL9oF5CGsGiiY6ybWI3'
        try {
            const newBooks = await axios.get(url)
            console.log(newBooks)
            if (newBooks.status !== 200) {
                return null
            } else {
                setBooks(await newBooks.data.results.books)
                console.log(books)
                localStorage.setItem('books', JSON.stringify(newBooks.data.results.books))
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleBookPurchase = url => {
        let params = `location=yes,height=720px,width=1152px,top=960,left=480,scrollbars=yes,status=yes`;
        window.open(url, "test", params);
    }

   return ( 
    <div>
        NYT Best Seller List 
        Week of {moment().subtract(1, 'weeks').startOf('week').format('MM-DD-YY')} to &nbsp;
        {moment().subtract(1, 'weeks').endOf('week').format('MM-DD-YY')}       
        {books?.length && books.map((B, i) => {
            return (
                <div key={i}>
                    <img className='book-img' src={B.book_image} alt={'Book'} width="60" height="90"
                        onClick={() => handleBookPurchase(B.amazon_product_url)}/>
                    {B.title} Rank: {B.rank} 
                    <br/>
                    by {B.author}
                    <br/>
                    {B.description}
                </div>
            )
        })}
    </div>
   )
};

export default Books;