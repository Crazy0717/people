import JobsIcons from "../../Icons"
import "./Box.scss"

const Box = ({imageSrc}) => {
  return (
    <div className="box">
      <div className="box__top">
        <img src={imageSrc} alt="" />
      </div>
      <div className="box__main">
        <div className="main__name">
          <img src="./images/Frame (1).png" alt="" />
          <h5>Apple</h5>
        </div>
        <p className="main__skills">
          #Front-end #Full-stack #Python #C++ #Cisco #Back-end
        </p>
        <div className="main__bottom">
          <JobsIcons.heart />
          <div className="bottom__price">
            Starting at <span>$ 8,674</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
