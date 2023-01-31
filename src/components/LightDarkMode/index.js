// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modalClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const btntext = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modeHeading = isDarkMode ? 'light-mode-heading' : 'dark-mode-heading'

    return (
      <div className="app-container">
        <div className={`container ${modalClassName}`}>
          <h1 className={`heading ${modeHeading}`}>Click to change Mode</h1>
          <button type="button" className="btn" onClick={this.onClickBtn}>
            {btntext}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
