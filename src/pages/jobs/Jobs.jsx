import "./Jobs.scss"
import JobsIcons from "../../Icons"
import { Box } from "../../ui"
import { useState } from "react"

const Jobs = () => {
  const [selected, setSelected] = useState(1)
  return (
    <section className="jobs">
      <nav className="jobs__navigation">
        <span className="jobs__navigation-caption">Channels</span>
        <ul>
          <li
            onClick={() => setSelected(1)}
            className={selected == 1 ? "--active" : ""}
          >
            <JobsIcons.whiteboard /> Designers
          </li>
          <li
            onClick={() => setSelected(2)}
            className={selected == 2 ? "--active" : ""}
          >
            <JobsIcons.codeFolder /> Coders
          </li>
          <li
            onClick={() => setSelected(3)}
            className={selected == 3 ? "--active" : ""}
          >
            <JobsIcons.ai /> AI
          </li>
          <li
            onClick={() => setSelected(4)}
            className={selected == 4 ? "--active" : ""}
          >
            <JobsIcons.trading /> Trading
          </li>
          <li
            onClick={() => setSelected(5)}
            className={selected == 5 ? "--active" : ""}
          >
            <JobsIcons.shipping /> Dropshipping
          </li>
          <li
            onClick={() => setSelected(6)}
            className={selected == 6 ? "--active" : ""}
          >
            <JobsIcons.instagram /> Bloger
          </li>
          <li
            onClick={() => setSelected(7)}
            className={selected == 7 ? "--active" : ""}
          >
            <JobsIcons.mobilography /> Mobilography
          </li>
        </ul>
      </nav>
      <main>
        <div className="jobs__vacancies">
          <Box imageSrc={"./images/Frame.png"} />
          <Box imageSrc={"./images/Frame (2).png"} />
          <Box imageSrc={"./images/Frame (3).png"} />
          <Box imageSrc={"./images/Frame (4).png"} />
          <Box imageSrc={"./images/Frame (3).png"} />
          <Box imageSrc={"./images/Frame (4).png"} />
          <Box imageSrc={"./images/Frame.png"} />
          <Box imageSrc={"./images/Frame (3).png"} />
          <Box imageSrc={"./images/Frame (4).png"} />
        </div>
      </main>
    </section>
  )
}

export default Jobs
