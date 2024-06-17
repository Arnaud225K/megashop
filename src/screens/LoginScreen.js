import { Text, Box, Image, Heading, VStack, Input, Button, Pressable } from 'native-base'
import React from 'react'
import {colors} from '../global/styles'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

function LoginScreen({navigation}) {
  return (
    <Box flex={1} bg={colors.black}>
      <Image 
      flex={1} 
      alt="logomshop" 
      resizeMode="cover"
      size="lg"
      w="full"
      source={require("../../assets/loginscreen.png")}/>
      <Box 
        w="full" 
        h="full" 
        position="absolute" 
        top="-190" 
        px="50"
        pt="10"
        justifyContent="center"
        >
      <Heading fontSize="35">LOGIN</Heading>
      <VStack space={5} pt="6">
        {/* Email as Username */}
        <Input
          InputLeftElement={
            <MaterialIcons name="email" size={20} color={colors.black} />
          } 
          variant="underlined" 
          placeholder='Email' 
          w="80%"
          type='text'
          pl="2"
          fontSize="18"
          color={colors.black} borderBottomColor={colors.black}
        />
        {/* Password */}
        <Input
          InputLeftElement={
            <Ionicons name="eye" size={20} color={colors.black} />
          } 
          variant="underlined" 
          placeholder='Password'
          type='password' 
          w="80%"
          pl="2"
          fontSize="18"
          color={colors.black} borderBottomColor={colors.black}
        />
      </VStack>
      <Button
        _pressed={{
          bg: colors.main
        }} 
        my={30} 
        w="50%" 
        rounded={50} 
        bg={colors.main}
        _text={{
          color:colors.black,
        }}
        onPress={() => navigation.navigate("Bottom")}
      >
          LOGIN
      </Button>
        <Text fontSize="18" color={colors.grey3} mt="0"> Don't have account? 
      <Pressable
        onPress={()=> navigation.navigate("Register")}
      >
        <Text fontSize="18" color={colors.grey3} mt="0"> SIGN UP </Text>
      </Pressable>
      </Text>
      </Box>
    </Box>
  )
}

export default LoginScreen;