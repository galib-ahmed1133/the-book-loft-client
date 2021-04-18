import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register,handleSubmit, watch, formState: { errors },} = useForm();
  const [imgUrl, setImgUrl] = useState(null);
  const onSubmit = (data) => {
    const bookData = {
      title : data.name,
      author : data.author,
      price : data.price,
      img : imgUrl
    }
    fetch('http://localhost:5000/addBook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  
    console.log(bookData)
  };
  
  const handleUpload = (event) => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'a9a132c72eecfacbcb08ae1b9edf093a')
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',
    imageData)
    .then(function (response) {
      setImgUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-6">
            <h5>Book Name</h5>
            <input className='form-control' name="book" defaultValue="Enter Book Name" {...register("name")} />
            </div>
            <div className="col-md-6">
            <h5>Author Name</h5>
            <input className='form-control' author="author" defaultValue="Enter Author Name" {...register("author")} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mt-3">
            <h5>Book Price</h5>
            <input className='form-control' price="price" defaultValue="Enter Book's  Price" {...register("price")} />
            </div>
            <div className="col-md-6 mt-3">
            <h5>Book Image</h5>
            <input type="file" onChange={handleUpload}  />
            </div>
        </div>

        <input className="btn btn-primary mt-3" type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
