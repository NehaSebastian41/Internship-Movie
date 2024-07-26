import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

// const rows=[{"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"comedy","Release Year":2005},
//   {"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"Action","Release Year":2006},
//   {"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"Romance","Release Year":2024},
//   {"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"Comedy","Release Year":2012}
// ];


//get

const View = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
  axios.get('http://localhost:4000/list-movies').then((res)=>{
   setRows(res.data);
})
  },[])

//edit

var navigate=useNavigate()
 let editMovie=(movie) =>
 {
  navigate('/add',{state:{movie}})
 }


  //delete

  function deleteMovie(p)
  {
    axios.delete('http://localhost:4000/movieremoval/'+p)
    .then((res)=>{
      alert('Deleted')
      window.location.reload()
    })
    .catch((error)=>
    {
      console.log(error);

  })
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><b>Director</b></TableCell>
          <TableCell align="right"><b>Movie Name </b></TableCell>
          <TableCell align="right"><b>Genre</b></TableCell>
          <TableCell align="right"><b>Realease Year</b></TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.movieName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.director}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            <TableCell align="right"><Button variant='contained' color="inherit" onClick={()=>{editMovie(row)}}>Edit</Button></TableCell>
            <TableCell align="right"><Button variant='contained' color="inherit" onClick={()=>{deleteMovie(row._id)}}>Delete</Button></TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View