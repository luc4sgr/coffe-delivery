import { Route, Routes } from 'react-router-dom'
import { Home } from '../../src/pages/Home'
import { DefaultLayout } from '../../src/layouts/DefaultLayput'
import { Checkout } from '../pages/Checkout'
import { OrderInformation } from '../pages/OrderInformation'
export enum RoutesEnum {
  HOME = '/',
  CHECKOUT = '/checkout',
  ORDER_INFORMATION = '/orderInformation'
}



export function Router() {
  return (
    <Routes>
      <Route path={RoutesEnum.HOME} element={<DefaultLayout />}>
        <Route path={RoutesEnum.HOME} element={<Home />} />
        <Route path={RoutesEnum.CHECKOUT} element={<Checkout/>} />
        <Route path={RoutesEnum.ORDER_INFORMATION} element={<OrderInformation />} />
      </Route>
    </Routes>
  )
}