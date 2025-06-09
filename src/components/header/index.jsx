import { useState } from 'react';
import { Layout, Button, Input, Drawer } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  SearchOutlined, 
  UserOutlined, 
  MenuOutlined,
} from '@ant-design/icons';
import './Header.scss';
// import logo from '../../assets/Photos/vit-meme-yodyvn41.png';
import logo from '../../assets/Photos/logo/logo.svg'

const { Header: AntHeader } = Layout;

function Header() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/news', label: 'News' },
    { key: '/community', label: 'Community' },
    { key: '/markets', label: 'Markets' },
    { key: '/more', label: 'More' },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AntHeader className="site-header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Stock Intel Logo" className="logo" />
          </Link>
        </div>

        <div className="search-container">
          <Input
            placeholder="Search (Ctrl+K)"
            prefix={<SearchOutlined style={{ fontSize: '24px' }} />}
            className="search-input"
            bordered={false}
          />
        </div>

        <div className="menu-desktop">
          <ul className="nav-links">
            {menuItems.map(item => (
              <li key={item.key}>
                <Link 
                  to={item.key}
                  className={location.pathname === item.key ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="header-right">
          
          <Button 
            className="user-button"
            icon={<UserOutlined style={{ fontSize: '24px' }} />}
            title="User menu"
            onClick={() => navigate('/login')}
          />
          <Button 
            className="get-started-button"
            onClick={() => navigate('/register')}
          >
            Get started
          </Button>
        </div>

        <Button 
          className="menu-mobile-button" 
          type="text" 
          icon={<MenuOutlined style={{ fontSize: '24px' }} />} 
          onClick={showDrawer}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={visible}
        width={320}
      >
        <ul className="drawer-nav-links">
          {menuItems.map(item => (
            <li key={item.key}>
              <Link to={item.key} onClick={onClose} style={{ fontSize: '18px' }}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="drawer-buttons">
          <Button 
            type="primary" 
            block 
            onClick={() => {
              navigate('/login');
              onClose();
            }}
            size="large"
          >
            Sign in
          </Button>
          <Button 
            style={{ marginTop: 16 }} 
            block
            onClick={() => {
              navigate('/register');
              onClose();
            }}
            size="large"
          >
            Create account
          </Button>
        </div>
      </Drawer>
    </AntHeader>
  );
}

export default Header;
