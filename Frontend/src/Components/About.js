import React, { Component } from "react";
// import pic from "./logo.png";

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
      <div>
        <h1>Samuel L Downs, Jr.</h1>
        <input type="file" name="file" onChange={e => this.onChange(e)} />
      </div>
    );
  }
}
