exports.handler = async function (event) {
  const lang = event.queryStringParameters.state?.split("-")[0] ?? "en";
  return {
      statusCode: 302,
      headers: {
          "Location": "/" + lang + event.path + "?" + new URLSearchParams(event.queryStringParameters),
      },
  };
}