
import { Actions, HeaderContainer, LocationButton } from './styles'
import LogoKafe from '../../../../public/Logo.svg'
import { BiMapPin } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/" title="">
        <span>
          <img src={LogoKafe} alt="" height={40} />
        </span>
      </Link>

      <Actions>
        <LocationButton>
          <BiMapPin size={22} />
          Fotaleza, CE
        </LocationButton>
        <Link to="/checkout" title='Carinho de café'>
         <CartButton />
        </Link>
      </Actions>
    </HeaderContainer>
  )
}