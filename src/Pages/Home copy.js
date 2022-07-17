import React, { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'

// import Data from '../Data/Data.json'


const Home = () => {

    const [products, setProducts] = useState([]);

    const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";


    //Static Data
    const fetchProducts = async () => {

        axios.get(url)
        .then(res => {
            setProducts(res.data.products)
            console.log("Data: ",products)
        }).catch = (e) => {
            console.log({ e });
        }
        // .then(data => setProducts(data))
        console.log("Data: ",products)
        // .then(assignmentData => console.log("assignmentData : ", assignmentData.products))


        // const ProducstData = Data;
        // setProducts(ProducstData.products);

        // console.log("Whole Data : ", ProducstData);

        // for(var key in ProducstData){
        //     if(ProducstData.hasOwnProperty(key)){
        //         if(ProducstData[key].hasOwnProperty('products')){
        //           console.log("owns Product :", ProducstData[key].products);
        //           setProducts(...ProducstData.products);
        //             for(var innerkey in ProducstData[key].products){
        //                 if(ProducstData[key].products.hasOwnProperty(innerkey)){
        //                     if(ProducstData[key].products[innerkey].hasOwnProperty('title')){
        //                     // console.log(ProducstData[key].products[innerkey].title);

                            
        //                     // setProducts(...ProducstData[key].products)
        //                 }		
        //             }
        //         }
        //     }		
        // }
    // }
    // console.log("Prods State :" , products)

    }

    const showProducts = () => {

        if(products !== ""){
    

        function mapObject (obj, fn) {
            return Object.fromEntries(
              Object
                .entries(obj)
                .map(fn)
            )
          }

        mapObject(products, ([key, value]) => (
            <div>
                <div>{value.title}</div>
                 {/* <ProductCard 
                    title={value.title} 
                    subcategory={value.subcategory}
                    price={value.price} 
                    popularity={value.popularity}
                 /> */}
                {/* {console.log('Title : ',value.title)}
                {console.log('category : ',value.subcategory)}
                {console.log('Price : ',value.price)}
                {console.log('Popularity : ', value.popularity)} */}
            </div>
        ))

        }
        
    }

    useEffect(() => {
        fetchProducts();
    }, [products])    

  return (
        <div>
            {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center'}}>
                {console.log(products)}
                    {products.map(product => {
                        return <ProductCard 
                        key={product._id}
                        id={product._id}
                        name={product.name} 
                        subcategory={product.subcategory}
                        image={product.image} 
                        price={product.price} 
                        popularity={product.popularity}
                        /> 
                    })}
            </div> */}

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center'}}>
                  {showProducts()}
            </div>

        </div>
  )
}

export default Home