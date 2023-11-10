import './index.css'

import {Component} from "react"

import CartItems from "../CartItems"
import Counter from "../Counter"
import Categories from "../Categories"
import Header from "../Header"

class Cart extends Component {
    
    const url = "https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d"
    const options ={
        method : "POST"
        body:JSON.stringify()
    }
    const response = fetch(options,url)
    const data = response.json()

    renderCategory = ()=>{
        return(
            <ul>
            {data.map(each=>(
                <Categories key={each.id} categoriesList={each}/>
            ))}
            </ul>
        )

    }

    render() {
       const {name,products}=cartDetails

        return(
            this.renderCategory
           
        )
    }

    

}
export default Cart