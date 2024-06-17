import { Heading, Image, View, Text, Box, Center, ScrollView, HStack, Button, Collapse } from 'native-base'
import React from 'react'

import {colors} from '../global/styles';
import Tabs from '../components/Profile/Tabs';


function ProfileScreen() {
  return (
    <>
      <Center 
        bg={colors.main}
        pt={12}
        pb={6}
      >
        <Image 
          source={{uri:"https://images.squarespace-cdn.com/content/v1/5b516d00f2e6b1dde8bcf132/b6b903ab-21aa-4c24-842b-00908409bd91/Profile-PNG-File.png?format=2500w"}}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
          <Heading 
            bold 
            fonSize={15} 
            isTruncated 
            my={2}
            color={colors.white}
          >
            Arno K.
          </Heading>
          <Text 
            italic 
            fontSize={15} 
            color={colors.white}
          >
            Joined Dec 12 2022
          </Text>
      </Center>
      {/* Profil and Orders Tabs */}
      <Tabs/>
    </>
  )
}

export default ProfileScreen;