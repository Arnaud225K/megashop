import { Image, View, Text, Box, ScrollView, Heading, HStack, Spacer, VStack, FormControl, Select, CheckIcon } from 'native-base'
import React, { useState } from 'react'

import {colors} from '../global/styles';
import Ratings from './Ratings';
import Message from './notifications/Message';


export default function Review() {
    const [rate, setRate] = useState("")
  return (
    <Box my={9}>
      <Heading bold fontSize={20} mb={1.5}>
        REVIEW
      </Heading>
      {/* IF NO REVIEW */}
      <Message 
            color={colors.black} 
            bg={colors.grey6} 
            size={14}
            children={"No review yet"}
        />
      {/* REVIEW */}
      <Box p={3} bg={colors.grey6} mt={3} rounded={5}>
        <Heading fontSize={15} color={colors.black}>
            Arno K.
        </Heading>
        <Ratings value={4}/>
        <Text mb={2} fontSize={13}>Jun 03 2023</Text>
        <Message 
            color={colors.black} 
            bg={colors.white} 
            size={14}
            children={"For reference, this makes it more than twice as hot as our more typical Indian cayenne, at 30,000."}
        />
      </Box>
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
            Review this product
        </Heading>
        <VStack space={6}>
        <FormControl>
            <FormControl.Label
                _text={{
                    fontSize:"12px",
                    fontWeight:"bold",
                    color:colors.black,
                }}
            >
                Rating
            </FormControl.Label>
            <Select
                bg={colors.subGreen}
                borderWidth={0}
                rounded={5}
                py={3}
                placeholder='Choose Rate'
                _selectedItem={{
                    bg:colors.subGreen,
                    endIcon: <CheckIcon size={2}/>
                }}
                onValueChange={(e) => setRate(e)}
            >
                <Select.Item label="1 - Poor" value="1" />
                <Select.Item label="2 - Fair" value="2" />
                <Select.Item label="3 - Good" value="3" />
            </Select>
        </FormControl>
        </VStack>
      </Box> */}
    </Box>
  )
}