import React, { Component } from 'react';
import { AuthContext } from "../context/auth";

function PreviewImage(props) {
  if(props.image_url === '') {
    return (
    <p></p>
    )
  } else {
    let url = 'https://plant-manager.s3.ap-northeast-2.amazonaws.com/' + props.image_url;
    return (
      <img src={url} width="150"/>
    )
  }
}

class NewPlantForm extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      plantname: '',
      image_url: '',
      image_url_temp: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.fileInput = React.createRef();
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let {plantname,image_url} = this.state;
    let data = {plantname, photo_url:image_url};
    const authString = "Bearer " + this.context.authTokens;
    fetch('/users/plants',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authString
      },
      body: JSON.stringify(data)
    }).then(response => {
      if(!response.ok) throw new Error(response.status)
      alert("등록 성공!")
      window.location.href = '/myplants';
    })
  }

  handleUpload(event) {
    event.preventDefault();
    let file = this.fileInput.current.files[0];
    const authString = "Bearer " + this.context.authTokens;
    //get signed url
    fetch('/api/signedurl?filename='+file.name + '&filetype='+ file.type,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authString
      }
    }).then(res => res.json())
    .then(data => {
      const url = data.signedUrl;
      this.setState({image_url_temp: data.key});
      //upload image to s3
      return fetch(url,{
        method: "PUT",
        body: file
      })
    }).then(response => {
      if(!response.ok) throw new Error(response.status);
      this.setState({image_url: this.state.image_url_temp});
    })
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <p>식물이름:
          <input name="plantname" value={this.state.plantname} onChange={this.handleChange}></input>
        </p>
        <input name="plantimage" type="file" accept="image/*" ref={this.fileInput}></input>
        <button onClick={this.handleUpload}>이미지 업로드</button>
        <p>{this.state.image_url}</p>
        <PreviewImage image_url={this.state.image_url}/>
        <p><button type="submit">등록</button>
        </p>
      </form>
    );
  }
}

export default NewPlantForm;