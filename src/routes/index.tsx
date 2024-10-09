import { Route, Routes } from 'react-router-dom'
import { Home } from '../../src/pages/Home'
import { DefaultLayout } from '../../src/layouts/DefaultLayput'
import { Cart } from '../pages/Cart'




export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
  )
}