import { useEffect, useState } from "react";
import { Row, Col, Button, Spin } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Mock data cho Top Gainers
  const topGainers = [
    { symbol: "KNW", name: "Know Labs", price: "$1.30", change: "154.90%" },
    {
      symbol: "PHAT",
      name: "Phathom Pharmaceuticals",
      price: "$9.33",
      change: "98.93%",
    },
    { symbol: "EYEN", name: "Eyenovia", price: "$5.24", change: "66.88%" },
    {
      symbol: "BRLS",
      name: "Borealis Foods",
      price: "$5.29",
      change: "53.33%",
    },
    { symbol: "URGN", name: "UroGen Pharma", price: "$7.84", change: "52.53%" },
    {
      symbol: "SXTC",
      name: "China SXT Pharmaceuticals",
      price: "$2.00",
      change: "49.25%",
    },
    { symbol: "WBUY", name: "Webuy Global", price: "$6.81", change: "48.04%" },
    {
      symbol: "BJDX",
      name: "Bluejay Diagnostics",
      price: "$2.23",
      change: "46.71%",
    },
    {
      symbol: "PTHL",
      name: "Pheton Holdings",
      price: "$12.85",
      change: "44.38%",
    },
    { symbol: "DGNX", name: "Diginex", price: "$60.13", change: "41.48%" },
  ];

  // Mock data cho Top Losers
  const topLosers = [
    { symbol: "NCL", name: "Northann", price: "$0.24", change: "-81.93%" },
    {
      symbol: "MWVN",
      name: "Marwynn Holdings",
      price: "$2.82",
      change: "-71.40%",
    },
    {
      symbol: "EPWK",
      name: "EPWK Holdings",
      price: "$0.57",
      change: "-66.17%",
    },
    {
      symbol: "CYCC",
      name: "Cyclacel Pharmaceuticals",
      price: "$0.41",
      change: "-33.02%",
    },
    {
      symbol: "ZBAI",
      name: "ATIF Holdings",
      price: "$0.50",
      change: "-30.42%",
    },
    {
      symbol: "VERA",
      name: "Vera Therapeutics",
      price: "$22.01",
      change: "-28.14%",
    },
    { symbol: "YSXT", name: "YSX Tech.", price: "$5.12", change: "-27.38%" },
    {
      symbol: "SCNI",
      name: "Scinai Immunotherapeutics",
      price: "$2.44",
      change: "-24.92%",
    },
    {
      symbol: "RDIB",
      name: "Reading International",
      price: "$9.07",
      change: "-23.46%",
    },
    {
      symbol: "WOOF",
      name: "Petco Health and Wellness Com",
      price: "$2.79",
      change: "-22.93%",
    },
  ];

  // Update the stockAnalysis array with the exact titles from the image
  const stockAnalysis = [
    {
      time: "21m",
      title:
        "High-Yield Stocks Flex Muscle As Growth Outlook Fades: 4 Dividend Plays To Watch...",
      source: "Benzinga",
    },
    {
      time: "58m",
      title:
        "Undervalued silver is sniffing out stagflation, prices could hit $40 this year,...",
      source: "Kitco",
    },
    {
      time: "1h",
      title:
        "My daughter will be on Medicaid for life. Can my wife and I invest in the stock...",
      source: "Market Watch",
    },
    {
      time: "2h",
      title: "S&P Global 'positive' on Wells Fargo as regulatory burden lifts",
      source: "Reuters",
    },
    {
      time: "2h",
      title:
        "Here's how much a 'Bro Billionaire' group of stocks is trouncing small caps und...",
      source: "Market Watch",
    },
    {
      time: "2h",
      title:
        "Trump urges Fed's Powell to cut interest rates by full percentage point: 'Rocke...",
      source: "Fox Business",
    },
    {
      time: "2h",
      title: "What's behind Trump's call for 'a full point' interest-rate cut?",
      source: "Market Watch",
    },
    {
      time: "3h",
      title:
        "Record $3.3 Trillion Global Energy Investment: Which Solar Stocks Could Soak Up...",
      source: "Benzinga",
    },
    {
      time: "3h",
      title:
        "Stablecoin firm Circle scales record high after blockbuster NYSE listing",
      source: "Reuters",
    },
    {
      time: "3h",
      title:
        "Digital health company Omada valued at $1.3 billion as shares jump in Nasdaq de...",
      source: "Reuters",
    },
    {
      time: "3h",
      title:
        "Omada shares open at $23 in Nasdaq debut after health-tech company's IPO",
      source: "CNBC",
    },
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="genkoi-hero">
        <div className="hero-content">
          <div className="hero-text-section">
            <h1 className="hero-title">
              Search for a stock to start your analysis
            </h1>
            <p className="hero-description">
              Accurate information on 100,000+ stocks and funds, including all
              the companies in the S&P500 index. See stock prices, news,
              financials, forecasts, charts and more.
            </p>
            <div className="hero-buttons">
              <Button
                className="hero-btn primary-btn"
                icon={<Icon icon="mdi:phone" />}
              >
                Call us
              </Button>

              <Button
                className="hero-btn tertiary-btn"
                icon={<Icon icon="mdi:search" />}
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="hero-image-section">
            {/* Để trống cho hình ảnh sau này */}
          </div>
        </div>
      </div>

      {/* Stock Analysis Section */}
      <div className="stock-analysis-section">
        <div className="stock-analysis-container">
          <Row gutter={[80, 0]}>
            <Col xs={24} lg={14}>
              <div className="stock-analysis-header">
                <h2 className="stock-analysis-title">
                  Stock Analysis <Icon icon="mdi:chevron-right" />
                </h2>
              </div>
              <div className="stock-analysis-list">
                {stockAnalysis.slice(0, 5).map((item, index) => (
                  <div className="stock-analysis-item" key={index}>
                    <span className="time-tag">{item.time}</span>
                    <Link to={`/analysis/${index}`} className="analysis-link">
                      {item.title}
                    </Link>
                    <span className="source-tag">- {item.source}</span>
                  </div>
                ))}
              </div>
              <div className="view-all-link">
                <Link to="/stock-analysis">
                  View all analyses <Icon icon="mdi:arrow-right" />
                </Link>
              </div>
            </Col>

            <Col xs={24} lg={10}>
              <div className="stock-analysis-header">
                <h2 className="stock-analysis-title">
                  Your analysis <Icon icon="mdi:chevron-right" />
                </h2>
              </div>
              <div className="stock-analysis-list">
                {stockAnalysis.slice(5, 10).map((item, index) => (
                  <div className="stock-analysis-item" key={index + 5}>
                    <span className="time-tag">{item.time}</span>
                    <Link to={`/news/${index + 5}`} className="analysis-link">
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="view-all-link">
                <Link to="/market-news">
                  View all news <Icon icon="mdi:arrow-right" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Top Movers Section */}
      <div className="top-movers-section">
        <div className="top-movers-container">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <div className="top-movers-card">
                <div className="top-movers-header">
                  <h2 className="top-movers-title">
                    Top Gainers <Icon icon="mdi:chevron-right" />
                  </h2>
                  <span className="top-movers-updated">
                    Updated Jun 6, 2025
                  </span>
                </div>
                <table className="top-movers-table">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topGainers.map((stock) => (
                      <tr key={stock.symbol}>
                        <td className="symbol-cell">
                          <Link to={`/stocks/${stock.symbol}`}>
                            {stock.symbol}
                          </Link>
                        </td>
                        <td>{stock.name}</td>
                        <td>{stock.price}</td>
                        <td className="change-cell positive">{stock.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="top-movers-card">
                <div className="top-movers-header">
                  <h2 className="top-movers-title">
                    Top Losers <Icon icon="mdi:chevron-right" />
                  </h2>
                  <span className="top-movers-updated">
                    Updated Jun 6, 2025
                  </span>
                </div>
                <table className="top-movers-table">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topLosers.map((stock) => (
                      <tr key={stock.symbol}>
                        <td className="symbol-cell">
                          <Link to={`/stocks/${stock.symbol}`}>
                            {stock.symbol}
                          </Link>
                        </td>
                        <td>{stock.name}</td>
                        <td>{stock.price}</td>
                        <td className="change-cell negative">{stock.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="features-section">
        <div className="section-container">
          <h2 className="section-title">Key Features</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon icon="mdi:chart-line" />
                </div>
                <h3 className="feature-title">Market Analysis</h3>
                <p className="feature-description">
                  Comprehensive tools for analyzing market trends and stock
                  performance with real-time data.
                </p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon icon="mdi:bell-alert" />
                </div>
                <h3 className="feature-title">Real-time Alerts</h3>
                <p className="feature-description">
                  Receive instant notifications about important market movements
                  and stock price changes.
                </p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon icon="mdi:brain" />
                </div>
                <h3 className="feature-title">AI-Powered Insights</h3>
                <p className="feature-description">
                  Advanced algorithms that analyze patterns and provide
                  personalized investment recommendations.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
