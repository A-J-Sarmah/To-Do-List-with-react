import React, { useEffect, useState } from 'react';
import Input from './input';
import Content from './content'

function getData() {
    const arr = []
    if (localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(i)))
        }
        return arr
    }
    else {
        return arr
    }
}

export default function App() {
    const [data, setData] = useState(getData())
    const [filter, setFilter] = useState('all')
    const task = [...data]
    function handleData(e) {
        e.preventDefault()
        const text = document.querySelector('.input-data')
        if (text.value !== "") {
            setData([...data, { id: new Date().getTime().toString(), text: text.value, isDone: false }])
            text.value = null
        }
    }
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            localStorage.setItem(i, JSON.stringify(data[i]))
        }
    })
    function removeData(id){
        for(let i=0; i<data.length; i++){
            if(data[i].id === String(id)){
                task.splice(i,1)
                localStorage.clear()
                for(let i =0 ; i<task.length; i++){
                    localStorage.setItem(i,JSON.stringify(task[i]))
                }
            }
        }
        setData(getData())
    }
    function setStatus(id){
        for(let i=0; i<data.length; i++){
            if(data[i].id === String(id)){
                task[i].isDone = !task[i].isDone
                localStorage.clear()
                for(let i =0 ; i<task.length; i++){
                    localStorage.setItem(i,JSON.stringify(task[i]))
                }
            }
        }
        setData(getData())
    }
    function handleFilter(value){
        setFilter(value)
    }
    return (
        <>
            <Input handleData={handleData} handleFilter={handleFilter}/>
            <Content data={data} removeData={removeData} setStatus={setStatus} filterStatus = {filter}/>
        </>
    )
}