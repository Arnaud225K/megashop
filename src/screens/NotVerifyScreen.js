import { Box, Center, Text, Image, VStack, Button } from 'native-base'
import React from 'react'
import {colors} from '../global/styles'
import MsButton from '../components/MsButton';


function NotVerifyScreen() {
  return (
    <Box flex={1} bg={colors.main} safeAreaTop>
      <Center 
        w="full"
        h={300}
      >
        <Image source={require("../../assets/favicon.png")}
          alt="Logomshop"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <MsButton p_bg={colors.black   } p_color={colors.white}>
            SIGN UP
        </MsButton>
        <MsButton p_bg={colors.white} p_color={colors.black}>
            LOGIN
        </MsButton>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen;