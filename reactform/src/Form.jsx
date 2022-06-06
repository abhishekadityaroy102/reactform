import { StylesProvider } from '@chakra-ui/react';
import React, { useState } from 'react'
import Table from './Table';
import styles from './styles.module.css'

const Form = () => {
    const [form,setform]=useState({
        // username:"",

        // age:0,
        // address:"",
        // department:"",
        // salary:0,
        // unmarried:false,
        // married:false,
    });
    const handleChange=(e)=>{
        console.log(e.target.value)
        let {checked,type,name,value,files}=e.target
       if(type==="checkbox"){
           setform({
               ...form,
               [name]:checked
               
           })
      
       }
       else if(type==="file"){
           setform({
               ...form,
               [name]:files,
           })
       }
       else{
           setform({
               ...form,[name]:value,
           })
       }
    }
    const [userdata,setuserdata]=useState([])
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        const newdata={...form,id:new Date().getTime().toString()}
        setuserdata([...userdata,newdata])
        // console.log(userdata)
        setform({username:"",age:"",department:"",address:"",salary:"",unmarried:false,married:false})
    }
 const deletedata=(value)=>{
       setuserdata(userdata.filter((el)=>el.id!==value))
    //    console.log(userdata)
 }
  return (
    <div>Form
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="username" placeholder='Enter your name ' value={form.username} onChange={handleChange}></input>
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" placeholder='Enter your age' value={form.age} onChange={handleChange}></input>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" placeholder='Enter your address' value={form.address} onChange={handleChange}></input>
            </div>
            <div>
                <label>Department:</label>
                <select name="department" value={form.department}onChange={handleChange}>
                    <option value=""></option>
                    <option value="computer"  >computer</option>
                    <option value="arts" >ARTS</option>
                    <option value="science" >SCIENCE</option>
                </select>
            </div>
            <div>
                <label>Salary:</label>
                <input type="number" name="salary" placeholder="Enter your salary" value={form.salary} onChange={handleChange}></input>
            </div>
            <div>
               <label>Unmarried:</label> <input type="radio" name="married" value="Unmarried" onChange={handleChange}></input>
               <label>Married:</label><input type='radio' name="married" value="Married" onChange={handleChange}></input>
            </div>
            <div>
                <label>Profile picture:</label>
                <input type="file" accept='image/jpg ,image/jpeg' name="profile"  files={form.profile} onChange={handleChange}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <Table className="table" data={userdata} deletedata={deletedata}/>
        
    </div>

  )
}

export default Form