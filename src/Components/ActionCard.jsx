import { Box } from '@material-ui/core'
import React from 'react'

//returns a grad bg based on the progress
const grad = progress => `linear-gradient(90deg, rgba(0,255,128,1) 0%, rgba(0,255,128,1) ${progress}%, rgba(0,0,0,0) ${(progress+10)>100?100:progress<1?progress:progress+10}%)`;

/*
TODO: work on sizing and add workflow buttons
 */


const ActionCard = ({progress=0, ...rest}) => {
    return (
        <Box bgcolor="#ccc" style={{background:grad(progress)}}  width="200px" height="80px">

        </Box>
    )
}

export default ActionCard
