import "./Home.scss"
import { TopBar } from "../../components"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <TopBar title={"Dashboard"} />
      <div className="tabs">
        <NavLink className="tab" to={"/"}>
          Sales info
        </NavLink>
        <NavLink className="tab activeted" to={"/"}>
          Project info
        </NavLink>
        <NavLink className="tab" to={"/"}>
          Financial data
        </NavLink>
      </div>
      <main>
        <div className="boxes">
          <div className="stats-box">
            <h4>Total income</h4>
            <p>$7,434.14</p>
            <span>up from last month</span>
          </div>
          <div className="stats-box">
            <h4>Trading</h4>
            <p>$7,434.14</p>
            <span>up from last month</span>
          </div>
          <div className="stats-box">
            <h4>Design</h4>
            <p>$7,434.14</p>
            <span>up from last month</span>
          </div>
          <div className="stats-box">
            <h4>Programming</h4>
            <p>$7,434.14</p>
            <span>up from last month</span>
          </div>
          <div className="stats-box">
            <h4>Testing</h4>
            <p>$7,434.14</p>
            <span>up from last month</span>
          </div>
          <div className="stats-box">
            <h4>AI Developing</h4>
            <p>$7,434.14</p>
            <span>up from last month</span>
          </div>
        </div>
        <div className="statics">
          <h5>Report overview</h5>
          <p>$7,434.14 USD</p>
          <div className="directions">
            <div className="direction">
              <div className="left">
                <div
                  className="circle"
                  style={{ backgroundColor: "#246BF6" }}
                ></div>
                <p>Trading</p>
              </div>
              <div className="right">
                <span>+12%</span>
                <p>$3,500.71</p>
              </div>
            </div>
            <div className="direction">
              <div className="left">
                <div
                  className="circle"
                  style={{ backgroundColor: "#62AAFF" }}
                ></div>
                <p>Trading</p>
              </div>
              <div className="right">
                <span className="minus">-34%</span>
                <p>$3,500.71</p>
              </div>
            </div>
            <div className="direction">
              <div className="left">
                <div
                  className="circle"
                  style={{ backgroundColor: "#FF5C5C" }}
                ></div>
                <p>Trading</p>
              </div>
              <div className="right">
                <span>+12%</span>
                <p>$3,500.71</p>
              </div>
            </div>
            <div className="direction">
              <div className="left">
                <div
                  className="circle"
                  style={{ backgroundColor: "#246BF6" }}
                ></div>
                <p>Trading</p>
              </div>
              <div className="right">
                <span>+12%</span>
                <p>$3,500.71</p>
              </div>
            </div>
            <div className="direction">
              <div className="left">
                <div
                  className="circle"
                  style={{ backgroundColor: "#00A44B" }}
                ></div>
                <p>Trading</p>
              </div>
              <div className="right">
                <span className="minus">-27%</span>
                <p>$3,500.71</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
