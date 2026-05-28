import React from 'react'
import './App.css'
import Demo from './Component/Demo'
import Props from './Component/Props'
import Exp7 from './Component/Exp7'
import UseStateHook from './Component/Hooks/UseStateHook'

function App() {
  const name="ABES College";

  const students=[
    {name:"Apurva", rollno:"250b98", course:"B-Tech"},
    {name:"Rohit", rollno:"250b97", course:"B-Tech"},
    {name:"Vishal", rollno:"250b96", course:"B-Tech"},
  ]

  return (
    <>
      <h1>Welcome to React</h1>
      <h2> Hello {name}</h2>
      <Demo/>
      <Props name="Vikas" rollno="250b98" course="B-Tech"/>
      <Exp7 students={students}/>
      <UseStateHook/>
    </>
  )
}

export default App


