import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Dasboard from '../Dasboard/Dasboard';
import Review from '../Reviews/Review';
import ReviewUI from '../ReviewUI/ReviewUI';
// import Review from '../Reviews/Review';

// import ReviewUI from '../ReviewUI/ReviewUI';


const Home = () => {
    const [comments , setComments] = useState([])
    useEffect( () =>{
        fetch('Reviews.json')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1 className='text-info mt-5'>Know the Best</h1>
            <div className='d-flex mt-5'>
                <div className='mt-5'>
                    <h2>Learn About The Best Product After Reading The Reviews</h2>
                    <p>The best site for review any brand laptop . The site will help you to Know the best laptop in the merket now. Compare any laptop to get best Product. Hope it will be benificial for you</p>
                </div>
                <div>
                    <img className='w-75 h-300' src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    

                </div>
            </div>
          
            <Button variant="success" className='mb-5 mt-5'>Total Reviews (6)</Button><br/>
            
            {
                comments.slice(0,3).map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
           
            <a className='text-decoration-none bg-info p-3 rounded-pill ' href={'/reviews'}>See all Reviews</a>
            
           

        </div>
       
    );
};

export default Home;