import { Image, View, Text, Box, Center, ScrollView, HStack, Button, Collapse, VStack, FormControl, Input, Spacer } from 'native-base'
import React from 'react'
import { colors } from '../global/styles';
import MsButton from '../components/MsButton';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const PaymentMethodes = [
  {
    image:require("../../assets/paypal.png"),
    alt:"paypal",
    icon:"Ionicons"
  },
  {
    image:require("../../assets/gpay.png"),
    alt:"googlepay",
    icon:"FontAwesome"
  },

];

function PaymentScreen() {
  const navigation = useNavigation();
  return (
<Box flex={1} bg={colors.main} py={5} safeAreaTop>
      {/* Header*/}
      <Center pb={15}>
        <Text color={colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Input */}
      <Box h="full" bg={colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} ml={3}>
          {PaymentMethodes.map((i, index) => (
            <HStack
                key={index} 
                alignItems="center" 
                bg={colors.white} 
                px={3} 
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image source={i.image}
                    alt={i.alt}
                    resizeMode="contain"
                    w={75}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons 
                  name='checkmark-circle' 
                  size={30} 
                  color={colors.lightgreen}
                  />
                ):(
                  <FontAwesome 
                    name='circle-thin' 
                    size={30} 
                    color={colors.lightgreen}
                  />
                )}
            </HStack>
            ))}
          <MsButton
            p_bg={colors.black}
            p_color={colors.white}
            p_mt={10}
            p_onPress={() => navigation.navigate("PlaceOrder")}
          >
            CONTINUE
          </MsButton>
          <Text italic textAlign="center">
            Payment method is <Text bold>Paypal</Text> by default
          </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen;