import { View, Text, Box, ScrollView, Heading, Center, Button, Modal, VStack, HStack, Pressable, Image } from 'native-base'
import React, { useState } from 'react'
import { colors } from '../global/styles';
import OrderInfo from '../components/OrderInfo';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import MsButton from './MsButton';
import { useNavigation } from '@react-navigation/native';


const OrdersInfos = [
    {
        title:"Products",
        price:123,
        color:"black"
    },
    {
        title:"Shipping",
        price:56,
        color:"black"
    },
    {
        title:"Tax",
        price:13.49,
        color:"black"
    },
    {
        title:"Total Amount",
        price:789,
        color:"main"
    },
]

const OrderModel = () => {

    const navigation = useNavigation();
    const [showModel,setShowModel] = useState(false)

  return (
    <Center>
        <MsButton 
            p_onPress={()=> setShowModel(true)}
            p_bg={colors.main}
            p_color={colors.black}
            p_mt={5}
        >
            CHECK PAYMENT 
        </MsButton>
        <Modal 
            isOpen={showModel}
            onClose={()=> setShowModel(false)}
            size="lg"
        >
            <Modal.Content maxWidth={350}>
                <Modal.CloseButton />
                <Modal.Header>My Order</Modal.Header>
                <Modal.Body>
                    <VStack space={7}>
                        {OrdersInfos.map((i,index) =>(
                            <HStack key={index} alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">{i.title}</Text>
                                <Text 
                                    color={i.color === "main" ? colors.main : colors.black}
                                    bold 
                                    fontSize={16}
                                >
                                    ${i.price}
                                </Text>
                            </HStack>
                        ))}
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                    <Pressable 
                        w="full" 
                        justifyContent="center" 
                        bg={colors.grey6}
                        h={45}
                        onPress={()=> setShowModel(false)}
                        rounded={3}
                        overflow={"hidden"}
                    >
                        <Image 
                            source={require("../../assets/paypal.png")} 
                            alt='paypal'
                            resizeMode='contain'
                            w="full"
                            h={34}
                        />

                    </Pressable>
                    <Button
                        w='full'
                        mt={3}
                        bg={colors.black}
                        h={45}
                        _text={colors.white}
                        onPress={()=>{
                          navigation.navigate("Home"); 
                          setShowModel(false);  
                        } }
                        _pressed={{
                            bg:colors.black
                        }}
                    >
                        PAY LATER
                    </Button>
                </Modal.Footer>
            </Modal.Content>

        </Modal>
    </Center>
  )
}

export default OrderModel