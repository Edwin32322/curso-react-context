import { useState } from 'react'
import './App.css'
import { MyPage } from './components/MyPage'
import { MyPageContext } from './components/MyPageContext'
import { CrudApi } from './components/CrudApi'
import { ProductsContextProvider } from './context/ProductsContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Context-API</h1>
        <hr />
        <ProductsContextProvider>
          <CrudApi></CrudApi>
        </ProductsContextProvider>
        <MyPageContext></MyPageContext>
        <MyPage></MyPage>
      </div>
    </>
  )
}

export default App
