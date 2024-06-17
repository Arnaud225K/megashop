import React from 'react'
import { View, Text, Box, Center } from 'native-base'

import {colors} from '../global/styles';

import { FontAwesome } from '@expo/vector-icons';
import MsButton from './MsButton';


function CartEmpty() {
  return (
   <Box flex={1} px={6}>
    <Center h="90%">
        <Center w={200} h={200} bg={colors.main} rounded="full">
            <FontAwesome name='shopping-basket' size={60} color={colors.black}/>
        </Center>
        <Text fontSize={20} color={colors.black} bold mt={3}>
            CART IS EMPTY
        </Text>
    </Center>
    <MsButton p_bg={colors.black} p_color={colors.white}>
        START SHOPPING
    </MsButton>
   </Box>
  )
}

export default CartEmpty