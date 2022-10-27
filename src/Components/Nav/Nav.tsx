import './Nav.css'
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Props> = ({ isActive, setIsActive }) => {
    const menuSelect = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <div className="NavBar">
                <div className="LeftSideNavBar">
                    <div className='Title'>
                        REIP
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
                <a href="">Home</a>
                <a href="">Dash</a>
                <a href="">News</a>
            </div>
        </div>
    )
}

export default Nav