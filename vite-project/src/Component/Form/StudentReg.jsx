import React from 'react'

function StudentReg() {
    const{data , setData}=useState({name:"" , tel:"" , email:""});
    const handleChange=(e)=>{
        setData({...data , [e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(data.name=="" || data.tel=="" || data.email==""){
            alert("Please fill all fields");
        }
        else{
            alert("Data submitted successfully");
        }
        setData({name:"" , tel:"" , email:""});
    };
    return (
        <div>
        <h1>StudentReg</h1>
        <form>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" name="name" required value={data.name}/>
            <br/>
            <label htmlFor="tel">Tel : </label>
            <input type="tel" id="tel" name="tel" required value={data.tel}/>
            <br/>
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" required value={data.email}/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default StudentReg;