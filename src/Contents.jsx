import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import EmployeeList from './EmployeeList.jsx'
import EmployeeReport from './EmployeeReport.jsx'
import EmployeeEdit from './EmployeeEdit.jsx'

// responsible for switching between views
// route component takes in route and component to show
export default function Contents(){
    const NotFound = () => <h1>Page Not Found</h1>
    // path is url appended, elements is what gets loaded on the page
    // '/' is the redirect to the employees page and * is the catch all to redirect to page not found
    return (
        <Routes>
            <Route path="/employees" element={<EmployeeList/>}/>
            <Route path="/edit/:id" element={<EmployeeEdit/>}/>
            <Route path="/report" element={<EmployeeReport/>}/>
            <Route path='/' element={<Navigate replace to ="/employees"/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}