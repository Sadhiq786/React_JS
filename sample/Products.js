import { Component } from "react";


class Products extends Component{
    constructor(){
        super()
        this.state={
            products:[
                {
                   "id":1,
                   "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                   "price":109.95,
                   "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                   "category":"men's clothing",
                   "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                   "rating":{
                      "rate":3.9,
                      "count":120
                   }
                },
                {
                   "id":2,
                   "title":"Mens Casual Premium Slim Fit T-Shirts ",
                   "price":22.3,
                   "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                   "category":"men's clothing",
                   "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                   "rating":{
                      "rate":4.1,
                      "count":259
                   }
                },
                {
                   "id":3,
                   "title":"Mens Cotton Jacket",
                   "price":55.99,
                   "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                   "category":"men's clothing",
                   "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                   "rating":{
                      "rate":4.7,
                      "count":500
                   }
                },
                {
                   "id":4,
                   "title":"Mens Casual Slim Fit",
                   "price":15.99,
                   "description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                   "category":"men's clothing",
                   "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                   "rating":{
                      "rate":2.1,
                      "count":430
                   }
                }
             ]
        }
    }

     sortFunction=()=>{
        let result=this.state.products.sort((a,b)=> a["price"]-b["price"])
        console.log(result)
        this.setState({
            products:result
        })
      
        
      }
    childToParent=(data)=>{

        alert("child to parent")
    }

    increment =(data)=>{
        console.log(data,this.state.products)

        let result=this.state.products.map((eachObject)=>{
            if(eachObject.id===data.id){
                let newObject={...eachObject,rating:{
                    ...eachObject.rating,count:eachObject.rating.count+1
                }}
                return newObject
            }else{
                return eachObject
            }
        })
        console.log(result,"reselt logged")
     this.setState({
        products:result
     })
        
        
        // this.setState({
        //     products: result
        // }, () => {
        //     // Optional callback after state is updated
        // });
        

    }

    decrement =(data)=>{

    }
    render(){
        return(
            <div>
                <button  onClick={this.sortFunction} >Sort by price</button>

         {
            this.state.products.map((eachObject)=>{
                return(
                    <div key={eachObject.id} >
                        <ProductListing  data={eachObject} communication={this.childToParent} increment={this.increment}  decrement={this.decrement} />

                        </div>
                )
            })
         }


            
            </div>
        )
    }
}
export default Products


class ProductListing extends Component{
    render(){
        console.log("hello productListing",this.props)
        return(
            <div>
                 <h3>{this.props.data.title}</h3>
                                <h3>{this.props.data.price}</h3>
                                <h3> Count -----{this.props.data.rating.count}</h3>
                                <button onClick={()=>this.props.increment(this.props.data)}  >+</button>
                                {/* <h4>{this.props.data.rating.count}</h4> */}
                                
                                <button onClick={()=>this.props.decrement(this.props.data)}  >-</button>

            </div>

        )
    }
}




// map is used to iterate the array 
// in react map is mostly used to iterate the ui 
// map is used to list rendering 
// when using map in list rendering me must use key prop for the parent 


// Tasks:
// 1. Repeat the class
// 2. Complete the pending part in class debug the class
// 3. Give add button to corousel , which adds new image everytime 
// 4. Take a button and add the circles in the ui based on the button click 


// Tasks:
// 1. Repeat the class 
// 2. Organise your work 
// 3. Decrement the count , reset the count , based on the count show the price 
// 4. delete the product in the listing 


// Class notes 

// let object={
//     "id":4,
//     "title":"Mens Casual Slim Fit",
//     "price":15.99,
//     "description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     "category":"men's clothing",

//     "rating":{
//        "rate":2.1,
//        "count":430
//     }
//  }
 
// let newObject={
// ...object,rating:{
// ...object.rating,count:object.rating.count+1
// }
// }
// console.log(newObject)


// let object={
//   inner:{
//     nestedInner:"item10"
//   }
// }
// let newProperty="item11"

// let updatedObject={
//   ...object,inner:{
//     ...object.inner,nestedInner:newProperty
//   }
// }
// console.log(updatedObject)

// let updatedObject={
//   ...object,inner:{...object.inner,
//   nestedInner:{
//     ...object.inner.nestedInner,propertyValue:newProperty
//   }
// }
// console.log(updatedObject)


// let parentOriginal={
//   name:"nithin"
// }

// let parentCopy= {...parentOriginal}
// parentCopy["salary"]=100000

// console.log(parentCopy)
// console.log(parentOriginal)




