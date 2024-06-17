import { View, Text, Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import { colors } from '../global/styles';
import OrderInfo from '../components/OrderInfo';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderItem from '../components/OrderItem';
import PlaceOrderModel from '../components/PlaceOrderModel';
import OrderModel from '../components/OrderModel';

function OrderScreen() {
  return (
    <Box bg={colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
        >
          <OrderInfo 
            title="SHIPPING INFO" 
            success
            subTitle="Shipping: Abidjan"
            text="Pay Method: Paypal"
            icon={<FontAwesome5 name='shipping-fast' size={30} color={colors.white} />}
          />
          <OrderInfo 
            title="DELIVER TO" 
            danger
            subTitle="adress:"
            text="Libreville, rue 12, lolo 12333"
            icon={<Ionicons name='location-sharp' size={30} color={colors.white} />}
          />
        </ScrollView>
      </Box>

      {/** List order items here */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem/>
        {/** Total price */}
        <OrderModel/>
      </Box>
    </Box>
  )
}

export default OrderScreen;