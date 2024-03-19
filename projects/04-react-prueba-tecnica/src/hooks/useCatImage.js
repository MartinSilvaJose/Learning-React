import { useEffect, useState } from 'react'

const IMAGE_RANDOM_FACT = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (fact) {
      const threeWordsFact = fact.split(' ', 3).join(' ')
      fetch(IMAGE_RANDOM_FACT + threeWordsFact)
        .then(res => {
          setImageUrl(res.url)
        })
    }
  }, [fact])

  return { imageUrl }
}
