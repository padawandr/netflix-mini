import { Wrapper } from './styles'
import logo from '../../assets/netflix-logo.svg'
import avatar from '../../assets/avatar.png'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'

export function Header (): JSX.Element {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const [scrolled, setScrolled] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setScrolled(!!window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleProfile (): void {
    setShow(false)
    if (user) {
      navigate('/profile')
    }
  }

  function handleMetrics (): void {
    setShow(false)
    navigate('/metrics')
  }

  function handleLogout (): void {
    setShow(false)
    signOut()
    navigate('/')
  }

  return (
    <Wrapper scrolled={scrolled}>
      <div className='container'>
        <Link to='/'>
          <img className='logo' src={logo} alt='netflix logo' />
        </Link>
        {user && (
          <div className='menu'>
            <img
              className='avatar'
              src={avatar}
              alt='avatar'
              onClick={() => setShow(!show)}
            />
            {show && (
              <div className='action'>
                <button className='link' onClick={handleProfile}>
                  Profile
                </button>
                <button className='link' onClick={handleMetrics}>
                  Metrics
                </button>
                <button className='link' onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  )
}
