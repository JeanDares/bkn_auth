export const resetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { token, newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = User.findByUsername(decoded.username!);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    res.json({ message: "Password has been reset successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};
