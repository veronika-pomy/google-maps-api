import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

// hook provides a variable to check if map is loaded
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

// where to center the map, Empire State Building 
const center = {
  lat: 40.748817,
  lng: -73.985428
};

function App() {

  // loading google maps script
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // if not loaded display a chakra ui component demonstrating loading
  if(!isLoaded) {
    return <SkeletonText />
  };

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      // bgImage='https://source.unsplash.com/random/2000x1100/?travel'
      // bgPos='bottom'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Display Google Maps Box */}
          {/* Style of the map box is 100% of the parent */}
          <GoogleMap center={center} zoom={15} mapContainerStyle={{ width:'100%', height:'100%'}}>
          {/* Display markers and directions */}

        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        mt={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='modal'
      >
        <HStack spacing={4}>
          <Input type='text' placeholder='Origin' />
          <Input type='text' placeholder='Destination' />
          <ButtonGroup>
            <Button colorScheme='blue' type='submit'>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={() => alert(123)}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: </Text>
          <Text>Duration: </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => alert(123)}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default App;