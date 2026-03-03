import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  ip: String,
  device: String,
  action: String, // visit | resume_view | resume_download
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Track", trackSchema);