exports.handler = async function (event) {
  const fb_pixel = process.env.FB_PIXEL;
  return {
      statusCode: 302,
      headers: {
          "Location": "/?fb=" + FB_PIXEL + new URLSearchParams(event.queryStringParameters),
      },
  };
}