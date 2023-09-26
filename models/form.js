import mongoose, { Schema } from 'mongoose'

const formSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const Form = mongoose.models.Form || mongoose.model('Form', formSchema)

export default Form
