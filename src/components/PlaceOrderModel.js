import { View, Text, Box, ScrollView, Heading, Center, Button, Modal, VStack, HStack } from 'native-base'
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

const PlaceOrderModel = () => {

    const navigation = useNavigation();
    const [showModel,setShowModel] = useState(false)

  return (
    <Center>
        <MsButton 
            p_onPress={()=> setShowModel(true)}
            p_bg={colors.black}
            p_color={colors.white}
            p_mt={5}
        >
            SHOW TOTAL
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
                    <Button
                        flex={1}
                        bg={colors.main}
                        h={45}
                        _text={colors.white}
                        onPress={()=>{
                            navigation.navigate("Order");
                            setShowModel(false)}
                        } 
                        _pressed={{
                            bg:colors.main
                        }}
                    >
                        PLACE AN ORDER
                    </Button>
                </Modal.Footer>
            </Modal.Content>

        </Modal>
    </Center>
  )
}

export default PlaceOrderModel