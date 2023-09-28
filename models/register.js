import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
)

const Register =
  mongoose.models.Register || mongoose.model('Register', registerSchema)

export default Register
