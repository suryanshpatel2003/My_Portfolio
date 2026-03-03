import Track from "../models/track.model.js";

export const trackAction = async (req, res) => {
  try {
    const { action } = req.body;

    const newTrack = new Track({
      ip: req.ip,
      device: req.headers["user-agent"],
      action,
    });

    await newTrack.save();

    res.status(200).json({ message: "Tracked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Tracking failed" });
  }
};