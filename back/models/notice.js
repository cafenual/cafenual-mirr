import mongoose, { Schema } from "mongoose";

const NoticeSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: 50,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notice = mongoose.model("Notice", NoticeSchema);
export default Notice;
