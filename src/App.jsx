import './App.css'

import {
  Header,
  Banner,
  BuyEasyStep,
  DiscountProducts,
  About
} from './components'



const App = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <BuyEasyStep />
      <DiscountProducts />
      <About/>
    </div>
  )
}

export default App