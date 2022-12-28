import React from 'react'
import { useState, useEffect } from 'react'
import { WeatherItemPage } from './WeatherItemPage'

const Navbar = () => {
    const [textVal, setTextVal] = useState("kolkata")
    const [mode, setMode] = useState("light")
    const [val, setVal] = useState("")

    const initial = async () => {
        setVal(await getVal())
        console.log(val)
    }
    useEffect(() => {
        initial()
    }, [])

    const valueGet = (e) => {
        setTextVal(e.target.value)
    }
    const getVal = async () => {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${textVal}`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': '395621c912msha9ab35c048ca2b4p18e92djsn7f0f36fb6d87',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            },
        })
        return response.json()
    }
    const submit = async (e) => {
        e.preventDefault()
        setVal(await getVal())
        console.log(val)
    }
    
    const modeChange = ()=>{
        if (mode == "light"){
           setMode("dark")
            document.body.style.backgroundColor = "#495057"
        }else{
            setMode("light")
            document.body.style.backgroundColor = "white"
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={modeChange}/>
                                <label className= "form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:mode=="light"?"black":"white"}} >{mode} mode</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onInput={valueGet} />
                            <button className="btn btn-outline-success" type="submit" onClick={submit}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <WeatherItemPage val={val} textVal={textVal} mode={mode} />
        </>
    )
}

export default Navbar