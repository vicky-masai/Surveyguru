import React from 'react'
import { Skeleton, Stack, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
function Loading() {
  return (
<>
<Skeleton>
<div>blank</div>
<div>blank</div>
<div>blank</div>
</Skeleton>
<Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonText mt='1' ml="20" mr="20" noOfLines={14} spacing='6' skeletonHeight='6' />
</Box>
</>
  )
}

export default Loading