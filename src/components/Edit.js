import { TextField ,Button} from '@mui/material'
import React from 'react'

function Edit() {
  return (
    <div> 
      <form style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
    <TextField
      style={{ width: "200px", margin: "5px" }}
      type="text"
      label="Name"
      variant="outlined"
    />
    <br />
    <TextField
      style={{ width: "200px", margin: "5px" }}
      type="text"
      label="Age"
      variant="outlined"
    />
    <br />
    <Button variant="contained" color="primary">
          update
        </Button>
       <Link to ><Button>
          Home
        </Button>
        </Link> 
    </form>
    </div>
  )
}

export default Edit