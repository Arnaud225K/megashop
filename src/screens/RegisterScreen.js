import { Text, Box, Image, Heading, VStack, Input, Button, Pressable } from 'native-base'
import React from 'react'
import {colors} from '../global/styles'
import { MaterialIcons,FontAwesome, Ionicons } from '@expo/vector-icons';

function RegisterScreen({navigation}) {
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
      <Heading fontSize="35">SIGN UP</Heading>
      <VStack space={5} pt="6">
        {/* Username */}
        <Input
          InputLeftElement={
            <FontAwesome name="user" size={20} color={colors.black} />
          } 
          variant="underlined" 
          placeholder='Username' 
          w="80%"
          type='text'
          pl="2"
          fontSize="18"
          color={colors.black} borderBottomColor={colors.black}
        />
        {/* Email */}
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
          SIGN UP
      </Button>
      
      <Text fontSize="18" color={colors.grey3} mt="0"> Already have account? 
      <Pressable onPress={() => navigation.navigate("Login")}>
          <Text fontSize="18" color={colors.grey3} mt="0"> LOGIN </Text>
      </Pressable>
      </Text>
      </Box>
    </Box>
  )
}

export default RegisterScreen;