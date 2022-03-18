exports.handler = async function(event, context) {
  if (event.headers["X-Variant"] === "first-thing") {
      console.log("a")
  } else if (event.headers["X-Variant"] === "second-thing") {
      // do the other thing
  } else {
      // return 400 status, because the function was invoked raw
  }
}