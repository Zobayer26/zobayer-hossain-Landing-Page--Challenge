import './App.css'

import {
  Header,
  Banner,
  BuyEasyStep,
  DiscountProducts,
  About,
  Products
} from './components'



const App = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <BuyEasyStep />
      <DiscountProducts />
      <About/>
      <Products/>
    </div>
  )
}

export default App