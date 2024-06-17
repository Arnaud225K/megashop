import { View, Text, Box, ScrollView, Heading, FlatList, Pressable, HStack, Center, Image, VStack, Button } from 'native-base'
import React from 'react'
import { colors } from '../global/styles';
import OrderInfo from '../components/OrderInfo';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { products } from '../global/data';


const OrderItem = () => {
  return (
    <FlatList 
        showsVerticalScrollIndicator={false}
        data={products.slice(0,2)}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
            <Pressable>
                <Box ml={3}>
                    <HStack 
                        alignItems="center"
                        bg={colors.white}
                        shadow={1}
                        rounded={10}
                        overflow="hidden"
                        mb={3}
                    >
                        <Center w="25%" bg={colors.deepestGray}>
                            <Image 
                                source={{uri:item.image}} 
                                alt={item.name} 
                                w="full"
                                h={24}
                                resizeMode='contain'
                            />
                        </Center>
                        <VStack w="60%" px={2}>
                            <Text 
                                isTruncated 
                                color={colors.black} 
                                bold 
                                fontSize={12}
                            >
                                {item.name}
                            </Text>
                            <Text 
                                color={colors.grey6} 
                                mt={2}
                                bold
                            >
                                ${item.price}
                            </Text>
                        </VStack>
                        <Center>
                            <Button 
                                bg={colors.main}
                                _pressed={{bg:colors.main}}
                                _text={{ color:colors.white}}
                            >
                                6
                            </Button>
                        </Center>
                    </HStack>
                </Box>
            </Pressable>
        )}
    />
  )
}

export default OrderItem