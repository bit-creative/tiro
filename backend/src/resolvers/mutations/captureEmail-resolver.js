const captureEmail = async (
  _,
  { input: { email } },
  { dataSources: { User } }
) => {
  const emailExist = await User.find({ email })
  if (emailExist) throw new Error("This email is already taken")
  return await User.create({
    email,
    status: "Pending",
  })
}

export default captureEmail
