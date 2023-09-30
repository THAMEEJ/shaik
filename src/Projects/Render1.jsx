
import React, { useEffect, useState } from 'react'
import abc from './amazon.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Render1 = () => {
    let navi = useNavigate()
    let [data, ChangeData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((e) => {
                ChangeData(e.data)
            })
            .catch(() => {
                console.log("Went wrong");
            })
    }, [])
    let addToCart = (prod) => {
        axios.post('http://localhost:3000/product', prod)
            .then(() => {
                console.log("Successfully Stored")
            })
            .catch(() => {
                console.log("Allready Added");
            })
        navi('/cart')
    }
    return (
                <div className={abc.rendermaindiv}>
                    {
                        data.map((e) => {
                            return (
                                <div >
                                    <div >
                                        <div className={abc.render1}>
                                            <img src={e.image} className={abc.imgup} alt="" />
                                            <button className={abc.btnred} onClick={() => { addToCart(e) }}>+ Add</button>
                                        </div>
                                        <div className={abc.renderdata}>
                                            <h3>Category : {e.category}</h3>
                                            <h3>Title : {e.title}</h3>
                                            <h3>Description : {e.description}</h3>
                                            <h3> Price :{e.price}</h3>
                                            <h3>Review : {e.rating.rate}</h3>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
    )
}
export default Render1