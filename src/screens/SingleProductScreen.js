import { Image, View, Text, Box, ScrollView, Heading, HStack, Spacer } from 'native-base'
import React from 'react';

import { useState } from 'react';
import {colors} from '../global/styles';
import Ratings from '../components/Ratings';

import NumericInput from 'react-native-numeric-input-pure-js'
import MsButton from '../components/MsButton';
import Review from '../components/Review';
import { useNavigation } from '@react-navigation/native';

function SingleProductScreen({route}) {

  const [number, setNumber] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box flex={1} bg={colors.white} safeArea>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image 
          source={{uri:product.image}}
          alt={product.name}
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading fontSize={16} mb={2} lineHeight={22} bold>
          {product.name}
        </Heading>
        <Ratings value={product.rating} text={`${product.numReviews} reviews`}/>
        <HStack
          space={2}
          alignItems="center"
          my={5}
        >
          {/* <NumericInput 
            value={number}
            onChange={value => setNumber(value)}
            totalWidth={140} 
            totalHeight={40}
            iconSize={25}
            step={1}
            maxValue={10}
            minValue={0}
            borderColor={colors.grey6}
            rounded
            textColor={colors.black}
            iconStyle={{color:colors.white}}
            rightButtonBackgroundColor={colors.main}
            leftButtonBackgroundColor={colors.main}		
            /> */}
            <Spacer/>
            <Heading fontSize={20} bold color={colors.black}>${product.price}</Heading>
        </HStack>
        <Text fontSize={14} lineHeight={24}>
          {product.description}
        </Text>
        <MsButton 
          p_bg={colors.main} 
          p_color={colors.black} 
          p_mt={15}
          p_onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </MsButton>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen;