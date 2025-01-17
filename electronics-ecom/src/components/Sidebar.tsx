import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom"
import styled from "styled-components";






export const Sidebar = () => {



    const [searchparams, setSearchparams] = useSearchParams()
    let initialcategory = searchparams.getAll("category")
    let initialcolor = searchparams.getAll("color")
    let initialbrand = searchparams.getAll("brand")
    const [category, setCategory] = useState(initialcategory || [])
    const [color, setColor] = useState(initialcolor || [])
    const [order, setorder] = useState(  "")
    const [brand, setBrand] = useState(initialbrand || [])

    console.log("sidebar....")


    useEffect(() => {


        let obj2 = {

        }

        if (order) {
            obj2 = {
                order:order ,
                

            }
        }

        let params = {
            category: category,
            color: color,
            brand: brand,
            ...obj2

        }
        console.log("hello")
        
        setSearchparams(params)


    }, [category, color, order, brand])


    const handlechangecategory = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target

        let newcategory = [...category]
        if (newcategory.includes(value)) {
            newcategory = newcategory.filter((el) => el !== value)
        } else {
            newcategory.push(value)
        }

        setCategory(newcategory)


    }

    const handlechangebrand = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target

        let newbrand = [...brand]
        if (newbrand.includes(value)) {
            newbrand = newbrand.filter((el) => el !== value)
        } else {
            newbrand.push(value)
        }

        setBrand(newbrand)


    }


    const handlechangecolor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        let newcolor = [...color]
        if (newcolor.includes(value)) {
            newcolor = newcolor.filter((el) => el !== value)
        } else {
            newcolor.push(value)
        }

        setColor(newcolor)
    }

    // console.log(type,"setting type in sidebar")

    const handldeorder = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setorder(value)


    }
   

    // console.log(order, " in order of sidebar")

    return (
        <DIV>
            <div className="category_filter">
                <h3>Filter by Category</h3>

                <input value={"laptop"} onChange={handlechangecategory} type="checkbox" checked={category.includes("laptop")} />
                <label>Laptop</label>
                <br />
                <br />
                <input value={"headphone"} onChange={handlechangecategory} type="checkbox" checked={category.includes("headphone")} />
                <label>Headphone</label>
                <br />
                <br />
                <input value={"phone"} onChange={handlechangecategory} type="checkbox" checked={category.includes("phone")} />
                <label>Phone</label>
                <br />

            </div>
            <br />
            <br />
            <div className="brand_filter">
                <h3>Filter by Brand</h3>

                <input value={"realme"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("realme")} />
                <label>Realme</label>
                <br />
                <br />
                <input value={"redmi"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("redmi")} />
                <label>Redmi</label>
                <br />
                <br />
                <input value={"asus"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("asus")} />
                <label>Asus</label>
                <br />
                <br />
                <input value={"samsung"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("samsung")} />
                <label>Samsung</label>
                <br />
                <br />
                <input value={"apple"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("apple")} />
                <label>Apple</label>
                <br />
                <br />
                <input value={"infinix"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("infinix")} />
                <label>Infinix</label>
                <br />
                <br />
                <input value={"boat"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("boat")} />
                <label>Boat</label>
                <br />
                <br />
                <input value={"sony"} onChange={handlechangebrand} type="checkbox" checked={brand.includes("sony")} />
                <label>Sony</label>
                <br />

            </div>
            <br />
            <br />
            <div className="color_filter">
                <h3> Filter by Color</h3>

                <input onChange={handlechangecolor} value={"Black"} type="checkbox" checked={color.includes("Black")} />
                <label>Black</label>
                <br />
                <br />
                <input onChange={handlechangecolor} value={"Grey"} type="checkbox" checked={color.includes("Grey")} />
                <label>Grey</label>
                <br />
                <br />
                <input onChange={handlechangecolor} value={"Blue"} type="checkbox" checked={color.includes("Blue")} />
                <label>Blue</label>
                <br />
                <br />
                <input onChange={handlechangecolor} value={"Midnight"} type="checkbox" checked={color.includes("Midnight")} />
                <label>Midnight</label>
            </div>
            <br />
            <br />
            <br />
            <div className="price_sort">
                <h3>Sort by Price</h3>

                <input onChange={handldeorder} value={"asc"} type="radio" name="sort" />
                <label>Ascending</label>
                <br />
                <br />
                <input onChange={handldeorder} value={"desc"} type="radio" name="sort" />
                <label>Descending</label>
            </div>
        </DIV>
    );
};

const DIV = styled.div`

  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  h3{
   margin-bottom:20px ;
   padding-right: 40px;
  }
  

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }



  input{
    cursor:pointer;
  }

  .category_filter{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin-right:20px;
   padding:20px 10px 20px 40px;
   /* background-color: rgb(109, 241, 241); */
   background: #fceabb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

   margin-top:20px;
   accent-color: red;
    

  }

  .brand_filter{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin-right:20px;
   padding:20px 10px 20px 40px;
   background: #fceabb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

   margin-top:20px;
   accent-color: red;
    

  }

  .color_filter{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin-right:20px;
    padding:20px 10px 20px 40px;
    background: #fceabb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    accent-color: red;
  }

  .price_sort{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin-right:20px;
    padding:20px 10px 20px 40px;
    /* background-color:rgb(13, 171, 171); */
    background: #fceabb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

     accent-color: red;

  }



  /* // if checkbox doesnt align remove below poperties  */
  input{
    width:20px;
    height:20px;
    
  }

  label{
   position:relative;
   bottom:3px;
  }
`;

