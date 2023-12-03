import React from 'react'
import Sidebar from "../ui/dashbord/sidebar/sidebar"
import Navbar from "../ui/dashbord/navbar/navbar"
import "../ui/dashbord/dashbord.madule.css"
export default function Layout({children}) {
  return (
    <div className="container">
        <div className="menu">
            <Sidebar />
        </div>
        <div className="content">
            <Navbar />
            {children}
            
        </div>
    </div>
  )
}
