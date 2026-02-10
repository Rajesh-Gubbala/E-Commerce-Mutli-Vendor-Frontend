// import { Delete } from '@mui/icons-material'
// import {  Avatar, Box, Grid, Grid2, IconButton, Rating } from '@mui/material'
// import { red } from '@mui/material/colors'
// import React from 'react'

// const ReviewCard = () => {
//   return (
//     <div className='flex justify-between'>
//       <Grid2 container spacing={9}>

//         <Grid2 size={{xs:1}}>

//           <Box>
//             <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155FD"}}>
//              Z
//             </Avatar>
//           </Box>

//         </Grid2>
//         <Grid2 size={{xs:9}}>

//           <div className='space-y-2'>
//             <div>
//               <p className='font-semibold text-lg'>Rajesh</p>
//               <p className='opacity-70'>12th March 2025</p>
//             </div>

//           </div>
//           <Rating 
//           readOnly
//           value={4}
//           precision={.5}
//           />

//           <p> value for product, great product</p>
//           <div>
//             <img 
//             className='w-24 h-24 object-cover'
//             src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/a/x/j/free-chiffon-gold-beads-letitbe-unstitched-original-imah7z7w4gnvbpge.jpeg?q=70" alt="" />
//           </div>

//         </Grid2>

//       </Grid2>
//       <div>
//       <IconButton>
//       <Delete sx={{color:red[700]}}/>
//         </IconButton>
//       </div>

//     </div>
//   )
// }

// export default ReviewCard

import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      {/* Changed Grid2 to Grid and used size prop for MUI v6 compatibility */}
      <Grid container spacing={9}>

        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
              Z
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 9 }}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'>Rajesh</p>
              <p className='opacity-70'>12th March 2025</p>
            </div>
          </div>
          
          <Rating 
            readOnly
            value={4}
            precision={0.5}
          />

          <p> value for product, great product</p>
          
          <div>
            <img 
              className='w-24 h-24 object-cover'
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/a/x/j/free-chiffon-gold-beads-letitbe-unstitched-original-imah7z7w4gnvbpge.jpeg?q=70" 
              alt="product review" 
            />
          </div>
        </Grid>

      </Grid>

      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  )
}

export default ReviewCard