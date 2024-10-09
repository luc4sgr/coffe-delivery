import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../components/layout/Header'


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}