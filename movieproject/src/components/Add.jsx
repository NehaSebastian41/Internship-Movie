import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
  const [form,setform]=useState({
    "movieName":'',
    "category":'',
    "director":'',
    "releaseYear":''
  }) 

  useEffect(()=>{
    if(location.state!=null){
      setform({...form,
        movieName:location.state.movie.movieName,
        category:location.state.movie.category,
        director:location.state.movie.director,
        releaseYear:location.state.movie.releaseYear,
      })
    }
  },[])


const location=useLocation();
var navigate=useNavigate();

  let postData=()=>{
    if (location.state!= null){
      axios.put('http://localhost:4000/movie-updation/'+location.state.movie._id,form)
        .then((res)=>{
        alert('Data updated');
        navigate('/')
        })
        .catch((error)=>{
          console.log(error);
        })
    }
    
    else{
          //console.log(form);
          axios.post('http://localhost:4000/new-movie',form) .then((res)=>{alert('Movie data posted')

          }).catch()
        }
      }
        
          
        
  function valueCap(e)
    {
      // console.log(e)
      setform({...form,[e.target.name]:e.target.value})
    }

  return (
  
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Movie Name"
          name='movieName'
          value={form.movieName}
          onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Genre"
          name='category'
          value={form.category}
          onChange={valueCap}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Director"
          name='director'  
          value={form.director}
          onChange={valueCap}
        />
        
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="releaseYear"
          name='releaseYear'
          value={form.releaseYear}
          onChange={valueCap}
        />
         </div>
         <Button variant="outlined" onClick={postData}>Submit</Button>
         </Box>
    
  )
}


  


export default Add