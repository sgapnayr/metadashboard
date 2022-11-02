import './Nav.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as Router, Link } from 'react-router-dom'

interface Props {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Props> = ({ isActive, setIsActive }) => {
    const menuSelect = () => {
        setIsActive(!isActive)
    }

    const pathname = window.location.pathname

    return (
        <div>
            <div className="NavBar">
                <div className="LeftSideNavBar">
                    <div className={pathname === '/' ? 'Title' : 'Title2'}>
                        {pathname === '/' ? 'Energy' : 'INNERG'}
                    </div>
                    <div className="CenterNavBar">
                    </div>
                    <div className="RightSideNavBar">
                        <div className={isActive ? "Icon IconActive" : 'Icon'} onClick={menuSelect}>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div>

            <div className={isActive ? "Menu MenuActive" : 'Menu'}>

                <Link to='/'>REIP</Link>
                <Link to='/innerg'>INNERG</Link>
            </div>
        </div>
    )
}

export default Nav