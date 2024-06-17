import { View, Text, Box, Center, ScrollView, Pressable, HStack, Image, VStack, Button } from 'native-base'
import React from 'react'

import {colors} from '../global/styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { products } from '../global/data';
import { FontAwesome } from '@expo/vector-icons';


const Swiper = () => (
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products.slice(0,2)}
        renderItem={renderIterms}
        renderHiddenItem={hiddenIterms}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
    />
);

const renderIterms = (data) => (
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
                alignItems="center" 
                bg={colors.white} 
                shadow={1}
                rounded={10}
                overflow="hidden"
            >
                <Center w="25%" bg={colors.deepestGray}>
                    <Image 
                        source={{uri: data.item.image}}
                        alt={data.item.name}
                        w="full"
                        h={24}
                        resizeMode='contain'
                    />
                </Center>
                <VStack w="60%" px={2} space={2}>
                    <Text isTruncated color={colors.black} bold fontSize={14}>
                        {data.item.name}
                    </Text>
                    <Text fontSize={14} color={colors.grey10} bold>${data.item.price}</Text>
                </VStack>
                <Center>
                    <Button 
                        bg={colors.main}
                        _pressed={{
                            bg:colors.main
                        }}
                        _text={{
                            color:colors.white,
                        }}
                    >
                        5
                    </Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
);
//Hidden items
const hiddenIterms = () => (
    <Pressable 
        w={50} 
        roundedTopRight={10} 
        roundedBottomRight={10}
        h="88%" 
        ml="auto" 
        justifyContent="center"
        bg={colors.red}
    >
            <Center alignItems="center" space={2}>
                <FontAwesome 
                    name='trash'
                    size={24}
                    color={colors.white}
                />
            </Center>
    </Pressable>
);

function CartItems() {
  return (
    <Box mr={6}>
        <Swiper/>
    </Box>
  )
};

export default CartItems;