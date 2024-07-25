import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React,{useState} from 'react'

const Add = () => {

  const [form,setform]=useState({
    "movieName":'',
    "category":'',
    "director":'',
    "releaseYear":''
  }) 

  let postData=()=>{
    //console.log(form);
    axios.post('http://localhost:4000/new-movie',form) .then((res)=>{alert('Movie data posted')})
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
          defaultValue="Release Year"
          name='realeaseYear'
          value={form.releaseYear}
          onChange={valueCap}
        />
         </div>
         <Button variant="outlined" onClick={postData}>Submit</Button>
         </Box>
    
  )
}


export default Add