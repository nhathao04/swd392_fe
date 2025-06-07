import { Layout, Row, Col, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  YoutubeOutlined,
  GithubOutlined,
  RedditOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import './Footer.scss';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

function Footer() {
  return (
    <AntFooter className="site-footer">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div className="footer-section">
              <div className="logo-container">
                <Title level={4}>Stock Intel</Title>
                <div className="tagline">Look first / Then leap.</div>
              </div>
              <Space className="social-icons">
                <Link to="#"><TwitterOutlined /></Link>
                <Link to="#"><FacebookOutlined /></Link>
                <Link to="#"><YoutubeOutlined /></Link>
                <Link to="#"><InstagramOutlined /></Link>
                <Link to="#"><LinkedinOutlined /></Link>
                <Link to="#"><RedditOutlined /></Link>
                <Link to="#"><GithubOutlined /></Link>
              </Space>
              <div style={{ marginTop: 16 }}>
                <Space direction="vertical" size={4}>
                  <div><GlobalOutlined /> English</div>
                  <Text>Select market data provided by ICE Data services.</Text>
                  <Text>Select reference data provided by FactSet.</Text>
                  <Text>© 2023 Stock Intel, Inc.</Text>
                </Space>
              </div>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={4} lg={4}>
            <div className="footer-section">
              <Title level={4}>More than a product</Title>
              <ul className="footer-links">
                <li><Link to="#">Supercharts</Link></li>
                <li><Link to="#">Screeners</Link></li>
                <li><Link to="#">Stocks</Link></li>
                <li><Link to="#">ETFs</Link></li>
                <li><Link to="#">Bonds</Link></li>
                <li><Link to="#">Crypto coins</Link></li>
                <li><Link to="#">Crypto pairs</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={4} lg={4}>
            <div className="footer-section">
              <Title level={4}>Tools & Subscriptions</Title>
              <ul className="footer-links">
                <li><Link to="#">Features</Link></li>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to="#">Market data</Link></li>
                <li><Link to="#">Special offers</Link></li>
              </ul>
              
              <Title level={4} style={{ marginTop: 24 }}>About Company</Title>
              <ul className="footer-links">
                <li><Link to="#">Who we are</Link></li>
                <li><Link to="#">Manifesto</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Blog</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={5} lg={5}>
            <div className="footer-section">
              <Title level={4}>Community</Title>
              <ul className="footer-links">
                <li><Link to="#">Social network</Link></li>
                <li><Link to="#">Wall of Love</Link></li>
                <li><Link to="#">Refer a Friend</Link></li>
                <li><Link to="#">House Rules</Link></li>
                <li><Link to="#">Moderators</Link></li>
              </ul>
              
              <Title level={4} style={{ marginTop: 24 }}>Pine Script</Title>
              <ul className="footer-links">
                <li><Link to="#">Indicators & strategies</Link></li>
                <li><Link to="#">Wizards</Link></li>
                <li><Link to="#">Freelancers</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={5} lg={5}>
            <div className="footer-section">
              <Title level={4}>Business Solutions</Title>
              <ul className="footer-links">
                <li><Link to="#">Widgets</Link></li>
                <li><Link to="#">Charting libraries</Link></li>
                <li><Link to="#">Lightweight Charts™</Link></li>
                <li><Link to="#">Advanced Charts</Link></li>
                <li><Link to="#">Trading Platform</Link></li>
              </ul>
              
              <Title level={4} style={{ marginTop: 24 }}>Growth Opportunities</Title>
              <ul className="footer-links">
                <li><Link to="#">Advertising</Link></li>
                <li><Link to="#">Brokerage integration</Link></li>
                <li><Link to="#">Partner program</Link></li>
                <li><Link to="#">Education program</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
}

export default Footer;