export const getGifs = async (categoria) => {
   const api_key = "Sg4h6XnzWoq8fylX4bwIPWON019SKYGp";
   const limit = 5;
   const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(categoria)}&limit=${limit}`;
   const response = await fetch(url);
   const { data } = await response.json();
   const gifs = data.map(({ id, images, title }) => ({ id, url: images.downsized.url, title }));
   return gifs;
}