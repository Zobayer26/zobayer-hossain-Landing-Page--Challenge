import './App.css'

import {
  Header,
  Banner,
  BuyEasyStep,
  DiscountProducts,
  About,
  Products,
  Footer
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
      <Footer/>
    </div>
  )
}

export default App