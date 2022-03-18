exports.handler = async function (event) {
  const fb_pixel = process.env.FB_PIXEL;
  return {
      statusCode: 302,
      headers: {
          "Location": "/?fb=" + fb_pixel + new URLSearchParams(event.queryStringParameters),
      },
  };
}