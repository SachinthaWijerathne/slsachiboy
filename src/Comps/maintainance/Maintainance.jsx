import { Box, Container } from '@mui/material'
import React from 'react'

function Maintainance() {
    return (
        <>
            <Container sx={{ display: 'flex' }}>
                <Box className="image">
                    <img src='../../images/wrench.png' alt='wrench'/>
                </Box>
                <Box className="comingsoon">

                </Box>
                <Box className="description">

                </Box>
                <Container className='countdown'>

                </Container>
                <Box className="notifyme">

                </Box>
            </Container>
        </>
    )
}

export default Maintainance
