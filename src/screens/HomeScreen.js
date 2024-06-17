import { View, Text, Box } from 'native-base'
import React from 'react'

import {colors} from '../global/styles'
import HomeSearch from '../components/HomeSearch';
import HomeProducts from '../components/HomeProducts';



function HomeScreen() {
  return (
    <Box flex={1} bg={colors.subyellow}>
        <HomeSearch/>
        <HomeProducts/>
    </Box>
  )
}

export default HomeScreen;