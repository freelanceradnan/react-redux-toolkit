import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="header-section">
            <div className="container">
                <div className="header-navbar">

                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
};

export default Nav;
