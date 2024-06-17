import { View, Text, Box, Center, ScrollView, HStack, Button, Collapse } from 'native-base'
import React from 'react'

import {colors} from '../global/styles';
import CartEmpty from '../components/CartEmpty';
import CartItems from '../components/CartItems';
import MsButton from '../components/MsButton';
import { useNavigation } from '@react-navigation/native';


function CartScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={colors.subyellow}>
      {/* Header cart */}
      <Center w="full" py={5}>
        <Text color={colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* if cart is empty */}
      {/* <CartEmpty/> */}
      {/* cart Item */}
      <ScrollView showsVerticalScrollIndicator={false} >
        <CartItems/>
        {/* Total price buttons */}
        <Center mt={5}>
          <HStack 
              rounded={50} 
              justifyContent="space-between" 
              bg={colors.white} 
              shadow={2}
              w='90%'
              pl={5}
              h={45}
              alignItems="center"
            >
              <Text>Total</Text>
              <Button 
                  px={10} 
                  h={45} 
                  rounded={50} 
                  bg={colors.main}
                  _text={{
                    color:colors.white,
                    fontWeight:"semibold"
                  }}
                  _pressed={{
                    bg:colors.main
                  }}
              >
                $35
              </Button>
          </HStack>
        </Center>
        <Center px={5}>
            <MsButton 
              p_bg={colors.black} 
              p_color={colors.white} 
              p_mt={10}
              p_onPress={() => navigation.navigate("Shipping")}
            >
              CHECKOUT
            </MsButton>
        </Center>
      </ScrollView>

    </Box>
  )
}

export default CartScreen;