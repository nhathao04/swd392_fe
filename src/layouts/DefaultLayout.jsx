import PropTypes from 'prop-types'
import {useContext} from 'react'
import {Footer, Header} from '../components/index'
// import {HeaderMentor} from '../Components/Modal'
import {AuthContext} from '../Contexts/AuthContext'
import './DefaultLayout.scss'

function DefaultLayout({children}) {
    const {currentUser} = useContext(AuthContext)
    return (
        <div className="default-layout">
            <Header/>
            <main className="main-content">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default DefaultLayout

DefaultLayout.propTypes = {
    children: PropTypes.any
}

