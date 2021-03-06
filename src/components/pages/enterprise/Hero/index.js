import React from 'react'

import { Box, Text, Image, Heading, Flex, Column } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import serverlessPlatform from 'src/assets/images/pages/platform/serverless-platform.svg'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[440, 440, 614]}
  >

    <Column
        color='white' 
    >
      <Box width={['auto', 'auto', 488]} mt={[0, 30, 100]}>
        <Flex flexDirection={['column', 'column', 'row']} alignItems={['center', 'center', 'left']}>
            <Heading.h1 fontSize={['90px', '65px','90px']} letterSpacing={'-2px'} lineHeight={['100px', '70px', '100px']} mb={0} fontFamily='SoleilLt'>Move fast, safely</Heading.h1>
        </Flex>
        <Text.p
            fontSize={[18, 18, 24]}
            fontFamily='SoleilLt'
            lineHeight='1.33'
            m={0}
            pt={['40px', '40px', '30px']}
            align={['center', 'center', 'initial']}
        >
          The Serverless Platform gives you everything you need to operationalize Serverless development. 
        </Text.p>        
      </Box>
    </Column>
  </HeroWrapper>
  )
  }

export default ExamplesHero