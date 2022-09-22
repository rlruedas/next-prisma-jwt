import { comparePassword } from "../../utils/encrypt";
import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  //build validation and authorization

  if (req.method === "POST") {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true, username: true, password: true, role: true },
    });

    if (password && comparePassword(password, user.password)) {
      const data = Object.assign(user, {
        id: user.id,
        username: user.username,
        role: user.role,
      });
      
      return res.status(200).json(data);
    }
    return res.status(401).json({message: "Invalid Credentials"});
  }

  res.status(405).send({ message: "Only POST requests allowed" });
  return;
}
