import { Image, View, Text, Box, ScrollView, Heading, HStack, Spacer, Center } from 'native-base'
import React from 'react'

export default function Message({bg, color, children, size}) {
  return (
    <Center bg={bg} p={4} rounded={5}>
        <Text color={color} fontSize={size} bold>
            {children}
        </Text>
    </Center>
  )
}