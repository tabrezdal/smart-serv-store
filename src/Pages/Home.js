import React, { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'


const Home = () => {

    const [products, setProducts] = useState([]);

    const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";

    const fetchProducts = async () => {
        axios.get(url)
        .then(res => {
            setProducts(res.data.products)
            console.log("Data: ",products)
        }).catch = (e) => {
            console.log({ e });
        }
        console.log("Data: ",products)
    }



    // const fetchProducts = async () => {
    //     const data = axios.get(url)
    //     setProducts((await data).data.products)
    //     console.log("Data: ",products)
    // }   


    useEffect(() => {
        fetchProducts();     
        // getAnswer();
    }, [url])    



                

    const loopShow = () => {
        for(var key in products){
            if(products.hasOwnProperty(key)){
                
                    return(
                        <ProductCard 
                            key={products[key].title}
                            title={products[key].title}
                            subcategory={products[key].subcategory}
                            price={products[key].price}
                            popularity={products[key].popularity}
                            />
                    )
                
            }		
        }
    }


 
 
  return (
        <div>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center'}}>
                
                {loopShow()}
                
            {/* {products.map(value => { 
                console.log(value);
                // {console.log('Title : ',value.title)}
                // {console.log('category : ',value.subcategory)}
                // {console.log('Price : ',value.price)}
                // {console.log('Popularity : ', value.popularity)}
                return(
                // <ProductCard 
                // title={value.title} 
                // subcategory={value.subcategory}
                // price={value.price} 
                // popularity={value.popularity}
                // />
            )})} */}
            </div>

        </div>
  )
}

export default Home