import React from 'react'
import { View, Text, Box, Center, ScrollView, HStack, Button, Collapse } from 'native-base'
import { colors } from '../../global/styles'
import { Pressable } from 'react-native'

function Orders() {
  return (
    <Box 
      h="full"
      bg={colors.white}
      pt={5}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/** PAID */}
        <Pressable>
          <HStack 
            space={4} 
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
            bg={colors.deepestGray}
          >
            <Text fontSize={10} color={colors.black} isTruncated bold>
              2939394849494949
            </Text>
            <Text fontSize={10} color={colors.black} isTruncated bold>
              PAID
            </Text>
            <Text fontSize={10} color={colors.black} isTruncated bold>
              Dec 12 2023
            </Text>
            <Button 
              px={7} 
              py={1.5} 
              rounded={50} 
              bg={colors.main} 
              _text={{
                color:colors.white
              }}
              _pressed={{
                bg:colors.main
              }}
            >
              $450
            </Button>
          </HStack>
        </Pressable>
        {/** NOT PAID */}
        <Pressable>
          <HStack 
            space={4} 
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
            bg={colors.deepestGray}
          >
            <Text fontSize={10} color={colors.black} isTruncated bold>
            2939394849494949
            </Text>
            <Text fontSize={10} color={colors.black} isTruncated bold>
              NOT PAID
            </Text>
            <Text fontSize={10} color={colors.black} isTruncated bold>
              JAN 12 2024
            </Text>
            <Button 
              px={7} 
              py={1.5} 
              rounded={50} 
              bg={colors.red} 
              _text={{
                color:colors.white
              }}
              _pressed={{
                bg:colors.red
              }}
            >
              $450
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders