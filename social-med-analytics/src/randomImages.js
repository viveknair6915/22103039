export const randomImages = [
    'https://via.placeholder.com/150?text=ImageA',
    'https://via.placeholder.com/150?text=ImageB',
    'https://via.placeholder.com/150?text=ImageC',
    'https://via.placeholder.com/150?text=ImageD',
  ];
  
  export function getRandomImage() {
    const index = Math.floor(Math.random() * randomImages.length);
    return randomImages[index];
  }
  