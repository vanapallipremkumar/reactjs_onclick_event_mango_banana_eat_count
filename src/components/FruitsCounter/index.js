// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  ImageContainer = props => {
    const {imgURL, buttonText, buttonOnClick, imageAlt} = props
    return (
      <div className="image-container">
        <img className="image" src={imgURL} alt={imageAlt} />
        <button className="button" type="button" onClick={buttonOnClick}>
          {buttonText}
        </button>
      </div>
    )
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="details-container">
          <h1 className="text">
            Bob ate <span className="counter">{mangoes}</span> mangoes{' '}
            <span className="counter">{bananas}</span> bananas
          </h1>
          <div className="images-container">
            <this.ImageContainer
              imgURL="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              buttonText="Eat Mango"
              buttonOnClick={this.onEatMango}
              imageAlt="mango"
            />
            <this.ImageContainer
              imgURL="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              buttonText="Eat Banana"
              buttonOnClick={this.onEatBanana}
              imageAlt="banana"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
