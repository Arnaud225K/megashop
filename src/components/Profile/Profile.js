import React from 'react'
import { View, Text, Box, Center, ScrollView, HStack, Button, Collapse, VStack, FormControl, Input } from 'native-base'
import { colors } from '../../global/styles'
import MsButton from '../MsButton'


const Inputs = [
  {
    Label:"USERNAME",
    type:"text",
  },
  {
    Label:"EMAIL",
    type:"text",
  },
  {
    Label:"NEW PASSWORD",
    type:"password",
  },
  {
    Label:"CONFIRM PASSWORD",
    type:"password",
  },
]

function Profile() {
  return (
    <Box h="full" bg={colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
        {Inputs.map((i, index) => (
          <FormControl key={index}>
            <FormControl.Label
              _text={{
                fontSize:"12px",
                fontWeight:"bold",
                color:colors.black
              }}
            >
              {i.Label}
            </FormControl.Label>
            <Input 
              borderWidth={0.3}
              bg={colors.subGreen}
              py={4}
              type={i.type}
              color={colors.black}
              borderColor={colors.grey4}
              fontSize={16}
              _focus={{
                bg:colors.subGreen,
                borderColor:colors.main,
                borderWidth:1
              }}
            />
          </FormControl>
        ))}
        <MsButton
          p_bg={colors.black}
          p_color={colors.white}
          p_mt={10}
        >
          UPDATE PROFILE
        </MsButton>

        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profile