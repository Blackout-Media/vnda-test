exports.handler = async (event, context) => {

  const redirectUrl = 'https://google.com'

  return {
    statusCode: 200,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({})
  }
}