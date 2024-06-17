import { View, Text, Box, Center, ScrollView, HStack, Button, Collapse, VStack, FormControl, Input } from 'native-base'
import React from 'react'
import { colors } from '../global/styles';
import MsButton from '../components/MsButton';
import { useNavigation } from '@react-navigation/native';



const ShippingInputs = [
  {
    label:"ENTER CITY",
    type:"text",
  },
  {
    label:"ENTER COUNTRY",
    type:"text",
  },
  {
    label:"ENTER POSTAL CODE",
    type:"text",
  },
  {
    label:"ENTER ADDRESS",
    type:"text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={colors.main} py={5} safeAreaTop>
      {/* Header*/}
      <Center pb={15}>
        <Text color={colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Input */}
      <Box h="full" bg={colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={4} ml={2}>
            {ShippingInputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize:"12px",
                  fontWeight:"bold",
                  color:colors.black,
                }}
              >
                {i.label}
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
          p_onPress={() => navigation.navigate("Checkout")}
        >
          CONTINUE
        </MsButton>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default ShippingScreen;