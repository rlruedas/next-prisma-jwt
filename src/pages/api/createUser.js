import { hashPassword } from "../utils/encrypt";

export const createUser = async (req, res) => {
  const { password } = JSON.parse(req.body);

  const passencrpyt = hashPassword(password);

  try {
    
  } catch (error) {
    return res.status(500).m
  }

  if (req.method === "POST") {
    const user = await prisma.user.create({
      data: {
        username,
        passencrpyt,
      },
    });

    return res.status(200).json({message: "User added"});
  }
};
