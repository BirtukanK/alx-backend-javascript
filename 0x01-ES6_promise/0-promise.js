export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: 'API response data' };
      resolve(data);
    }, 2000);
  });
}
