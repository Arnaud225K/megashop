import { Button } from 'native-base'
import React from 'react'

function MsButton({p_mt,p_bg,p_color,children,p_onPress}) {

  
  return (
    <Button 
        w="full" 
        h={55} 
        mt={p_mt} 
        rounded="full" 
        bg={p_bg} 
        _text={{
            color:p_color,
            fontWeight:"bold",
            fontSize:"18"
        }}
        _pressed={{bg:p_bg}}
        onPress={p_onPress}
    >
        {children}
    </Button>
  )
}

export default MsButton