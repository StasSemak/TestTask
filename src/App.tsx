import { Route, Routes } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import Layout from "./components/layout/Layout"
import Create from "./components/create/Create"
import Requests from "./components/requests/Requests"
import CreateOrder from "./components/create/CreateOrder"
import CreateDeliver from "./components/create/CreateDeliver"
import CreateLayout from "./components/create/CreateLayout"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="create" element={<CreateLayout/>}>
            <Route index element={<Create/>}/>
            <Route path="order" element={<CreateOrder/>}/>
            <Route path="deliver" element={<CreateDeliver/>}/>
          </Route>
          <Route path="requests" element={<Requests/>}/>
        </Route>
      </Routes>
      <Toaster position="top-right" containerStyle={{top: 90}}/>
    </>
  )
}

export default App
