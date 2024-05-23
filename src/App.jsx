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

import { useState } from "react";

const App = () => {

  const [addToCart, setAddToCart] = useState([])
  const handleCart = (item) => {
    let present = false

    addToCart.forEach((product) => {
      if (item.id === product.id) {
        present = true
      }
    })

    if (present) return
    setAddToCart([...addToCart, item])
    console.log(addToCart)
  }

  return (
    <div className="">
      <Header size={addToCart.length} setAddToCart={setAddToCart} />
      <Banner />
      <BuyEasyStep />
      <DiscountProducts />
      <About />
      <Products handleCart={handleCart}/>
      <Footer />
    </div>
  )
}

export default App