import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
}
