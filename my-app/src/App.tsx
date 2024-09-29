import "./App.css"
import MyContainer from "./layout/MyContainer"
import Login from "./components/Login"
import { Outlet } from "react-router-dom"
import { Typography } from "@mui/material"

function App() {
  return (
    <>
      <Typography variant = "h3" >Header</Typography>
      <Outlet />
    </>
  )
}

export default App
