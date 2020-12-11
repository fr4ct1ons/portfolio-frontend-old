import React from "react"
import Navbar from "./Navbar";
import appStyles from "../styles/App.module.css"

export default function Layout({children}) 
{
    //style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
  return (
    <div className={appStyles.App}>
      <Navbar/>
      <div style={{width: "70%", margin: "auto"}}>
        {children}
      </div>
    </div>
  )
}