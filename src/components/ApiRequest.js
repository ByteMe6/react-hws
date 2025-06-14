import axios from "axios";

export async function fetchGifs(api, keywords) {
  try {
    if (!api) {
      // return "Ошибка! API ключ не найден";
    }

    if (keywords.trim() === "") {
      return [];
    }
    
    const url = "api.giphy.com/v1/gifs/search";
    const fullUrl = `https://${url}?api_key=${api}&q=${keywords}&limit=20&offset=0&rating=g&lang=en`;
    const response = await axios.get(fullUrl);
    return response.data.data;
  } catch (error) {
    return `Ошибка! ${error.message}`;
  }
}
