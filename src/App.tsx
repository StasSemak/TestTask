import { Route, Routes } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import Layout from "./components/layout/Layout"
import Create from "./components/create/Create"
import Requests from "./components/requests/Requests"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="create" element={<Create/>}/>
          <Route path="requests" element={<Requests/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
