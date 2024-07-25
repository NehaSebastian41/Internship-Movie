import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// const rows=[{"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"comedy","Release Year":2005},
//   {"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"Action","Release Year":2006},
//   {"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"Romance","Release Year":2024},
//   {"Director":"Dileesh Pothen","Movie":"Maheshinte Prathikaram","Genre":"Comedy","Release Year":2012}
// ];



const View = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
  axios.get('http://localhost:4000/list-movies').then((res)=>{
   setRows(res.data);
})
  },[])
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
            key={row.firstName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.director}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View