import React, {useState, useEffect} from 'react';
import ReviewUI from '../ReviewUI/ReviewUI';


const Review = () => {
    const [customers, setCustomers] = useState([]);
    useEffect( () =>{
        fetch('Reviews.json')
        .then(res => res.json())
        .then(data => setCustomers(data))
    } ,[]);
    console.log(customers)
    return (
        <div>
            <h1>This is Review page</h1>
            {
                customers.map(customer =><ReviewUI key={customer.id} customer={customer}></ReviewUI>)
            }
        </div>
    );
};

export default Review;