import "../styles/pricing.css";

function Pricing() {
  return (
    <>
      <header>
        <h1 className="pricing_title">Plans That Grow With Your Business:</h1>
      </header>

      <main>
        <div className="pricing_container">
          <div className="pricing_card">
            <div className="pricing_box">
              <h1>Starter Plan (Basic)</h1>
              <h2>$199 – $399 / month</h2>
              <h3>Best for: small businesses / beginners</h3>
              <button>Get Started</button>
            </div>
            <div className="list_box">
              <ul>
                <li>Basic SEO setup</li>
                <li>1 social media platform management</li>
                <li>8–12 posts/month</li>
                <li>Monthly performance report</li>
                <li>Email support</li>
              </ul>
            </div>
          </div>
          <div className="pricing_card growth">
            <div className="pricing_box">
              <h1>Growth Plan (Popular)</h1>
              <h2>$499 – $899 / month</h2>
              <h3>Best for: Growing businesses</h3>
              <button>Get Started</button>
            </div>
            <div className="list_box">
              <ul>
                <li>Advanced SEO optimization</li>
                <li>2-3 social media platforms</li>
                <li>paid ads managment</li>
                <li>Content creation (posts + options )</li>
                <li>Strategy Calls</li>
              </ul>
            </div>
          </div>
          <div className="pricing_card">
            <div className="pricing_box">
              <h1>Premium Plan</h1>
              <h2>$1000+ / month</h2>
              <h3>Best for: scaling businesses</h3>
              <button>Get Started</button>
            </div>
            <div className="list_box">
              <ul>
                <li>Full marketing strategy</li>
                <li>SEO + Ads + Social media</li>
                <li>Funnel optimizationt</li>
                <li>Conversion tracking</li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <table>
        <thead>
          <tr>
            <td>Features</td>
            <td>Starter</td>
            <td>Growth</td>
            <td>Premium</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="column_style">SEO</td>
            <td>basic</td>
            <td>Advanced</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td className="column_style">Social Media</td>
            <td>1</td>
            <td>3</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td className="column_style">Reports</td>
            <td>Monthly</td>
            <td>Bi-weekly</td>
            <td>Weekly</td>
          </tr>
          <tr>
            <td className="column_style">Ads management</td>
            <td>
              <img src="/media/images/icons/cross-sign.png" />
            </td>
            <td>
              <img src="/media/images/icons/cross-sign.png" />
            </td>
            <td>
              <img src="/media/images/icons/PricingCheck.png" />
            </td>
          </tr>
          <tr>
            <td className="column_style">Strategy Calls</td>
            <td>
              <img src="/media/images/icons/cross-sign.png" />
            </td>
            <td>
              <img src="/media/images/icons/PricingCheck.png" />
            </td>
            <td>
              <img src="/media/images/icons/PricingCheck.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Pricing;