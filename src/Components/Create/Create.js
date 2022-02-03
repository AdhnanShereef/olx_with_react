import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import {FirebaseContext,AuthContext} from "../../store/Context"
import { useContext } from 'react/cjs/react.development';

const Create = () => {
  const history = useHistory()
  const {firebase}=useContext(FirebaseContext)
  const{user}=useContext(AuthContext)
  const [name, setName] = useState()
  const [category, setCotegory] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  const date = new Date() 
  const handleSubmit =()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          CreatedAt:date.toDateString()
        })
          history.push('/')
      })
  })
}
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              onChange={(e)=>{setName(e.target.value)}}
              type="text"
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={(e)=>{setCotegory(e.target.value)}}
              id="fname"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
             className="input"
             type="number" 
             onChange={(e)=>{setPrice(e.target.value)}}
             id="fname" name="Price" />
            <br />

          <br />
          <img width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button className="uploadBtn" onClick={handleSubmit} >upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
