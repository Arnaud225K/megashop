import React from 'react'
import { Box, HStack, Input, Pressable } from 'native-base'

import {colors} from '../global/styles'
import { MaterialIcons,FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function HomeSearch() {
    const navigation = useNavigation();
  return (
    <HStack 
        space={3}
        w="full"
        px={6}
        bg={colors.main}
        py={4}
        alignItems="center"
        safeAreaTop 
    >
        <Input
            placeholder="Search"
            w="85%"
            bg={colors.white}
            type="search"
            variant="filled"
            h={12}
            fontSize="16"
            borderWidth={0}
            _focus={{
                bg:colors.white,
            }}
        />
        <Pressable ml={1.5} onPress={() => navigation.navigate("Cart")}>
            <FontAwesome name='shopping-basket' size={28} color={colors.white} />
            <Box 
                px={1} 
                rounded="full"
                position="absolute"
                top={-13}
                left={2}
                bg={colors.red}
                _text={{
                    color:colors.white,
                    fontSize:"12",
                }}
            >
                7
            </Box>
        </Pressable>
    </HStack>
  )
}

export default HomeSearch;