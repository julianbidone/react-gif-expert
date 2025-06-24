export const getGif = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=h5gWGd9HpTEN0GAxmXFiG1U7HC4DTrYk&q=${category}&limit=20`;

    const resp = await fetch( url) ;
    const {data} = await resp.json();

    const gifs = data.map( img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    return gifs
  }