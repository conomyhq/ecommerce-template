import {useState} from 'react'


export const useGetImage = () => {
  // return 'https://source.unsplash.com/category/technology'
  // const [image] = useState('https://source.unsplash.com/category/people');
  const [image] = useState('https://picsum.photos/600/800');

  return image
}