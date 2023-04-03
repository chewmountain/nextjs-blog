export default function handler(req, res) {
  res
    .status(200)
    .json({
      text: "This is data from next.js api-route. File name: pages/api/hello.js",
    });
}
