import prisma from "../../lib/prisma";
import { comparePassword } from "../../utils/encrypt";

export const handle = async (req, res) => {
  if (req.method === "POST") {
    const { username, password } = JSON.parse(req.body);

    if (!username && !password) {
      return res.status(400).json({ message: "Incomplete Information" });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { username },
      });
      console.log(user)
      if (user && comparePassword(password, user.password)) {
        return res.status(200).json(user);
      }
    } catch (error) {
      return res.status(404).json({ message: "User Not Found" });
    }
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
