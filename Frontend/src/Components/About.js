import React, { Component } from "react";
import Grandma_Sam from "./Grandma_Sam.jpg";

export default class About extends Component {
  state = { image: "" };

  onChange = e => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.warn("img data", e.target.result);
    };
  };

  render() {
    return (
      <div margin="10px" className="ownerInfo">
        <div className="ownerPic">
          <h1>Samuel L Downs, Jr.</h1>
          <img
            src={Grandma_Sam}
            alt="Profile Pic"
            width="35%"
            height="35%"
            border="5px"
          />

          <div className="ownerBio" style={{}}>
            <p> I grew up in Camden,AR and Little Rock,AR.</p>
            <textarea />
            <br />
            <button>Enter</button>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <input type="file" name="file" onChange={e => this.onChange(e)} /> */
}
