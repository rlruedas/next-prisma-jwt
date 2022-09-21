export default async function handle(req, res) {
  //build validation and authorization

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { username, password } = JSON.parse(req.body);

  return res.status(200).json({ id: 1, username: "reister" });
}
