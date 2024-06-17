import React from 'react'
import { Image, View, Text, Box, HStack, Input, Pressable, ScrollView, Flex, Heading } from 'native-base'

import {colors} from '../global/styles'
import { MaterialIcons,FontAwesome, Ionicons } from '@expo/vector-icons';
import {products} from "../global/data"
import Ratings from './Ratings';
import { useNavigation } from '@react-navigation/native';


function HomeProducts() {
    const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex 
            flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between"
            px={8}
        >
            {products.map((product) => (
              <Pressable 
                key={product._id} 
                w="45%" 
                bg={colors.white}
                rounded="md"
                shadow={2}
                pt={0.5}
                my={3}
                pb={2}
                overflow="hidden"
                onPress={() => navigation.navigate("Single",product)}
            >
                <Image 
                    source={{uri:product.image}}
                    alt={product.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                />
                <Box px={4} pt={1}>
                    <Heading size="sm" bold>
                        ${product.price}
                    </Heading>
                    <Text fontSize={14} mt={1} isTruncated w="full">{product.name}</Text>
                    {/* Rating */}
                    <Ratings value={product.rating} />
                </Box>

                </Pressable>      
            ))}

        </Flex>
    </ScrollView>
  )
}

export default HomeProducts;