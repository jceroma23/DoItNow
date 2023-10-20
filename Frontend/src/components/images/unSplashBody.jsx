import React, { useEffect, useState } from 'react'
import { Box, Wrap, WrapItem } from "@chakra-ui/react";

import { createApi } from "unsplash-js";
import UnSplashImg from './unSplashImg';


const api = createApi({ accessKey: 'uyNXrwZn4mcw26FzpL-LjkEAa65dCqh48qZ9HYQDgXQ'})


const UnSplashBody = () => {
    const [ unSplashPhotos, setUnsplashPhotos ] = useState(null)

    useEffect(() => {
        api.search
          .getPhotos({ query: "background", orientation: "landscape" })
          .then(result => {
            setUnsplashPhotos(result);
          })
          .catch(() => {
            console.log("something went wrong!");
          });
      }, []);
    
   


  return unSplashPhotos === null ? (
    <Box>...Loading</Box>
  ) : (
    <Wrap>
      {unSplashPhotos.response.results.map(photo => (
        <WrapItem key={photo.id}>     
            <Box> 
            <UnSplashImg photo={photo} />
            </Box>
        </WrapItem>
        ))}
      </Wrap>  
  )
}

export default UnSplashBody