import NavBar from './NavBar'
import Footer from './Footer'
import Alert from './Alert'

const Layout = ({ children }) => {
  return (
    <>
      <Alert text='Free sheeping in orders over $50! Valid untill october 31.' color='red' />
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
