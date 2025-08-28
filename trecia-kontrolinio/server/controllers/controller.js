import Job from "../models/darbasModel.js";
import mongoose from "mongoose";

// GET visus saugus
export const getJobs = async (req, res) => {
  const user_id = req.user._id;
  try {
    const darbai = (await Job.find({ user_id }).sort({ createdAt: -1 })) || [];

    const safeDarbai = darbai.map((d) => ({
      _id: d._id?.toString() || null,
      title: d.title || "",
      about: d.about || "",
      price: d.price || 0,
      availability: d.availability ?? false,
      createdAt: d.createdAt || new Date(),
    }));
    res.status(200).json(safeDarbai);
  } catch (error) {
    console.error("Error in getJobs:", error);
    res.status(500).json({ error: "Server error fetching jobs" });
  }
};

//GET paimti vieną darbą
export const getJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio darbo nera" });
  }
  const darbas = await Job.findById(id);
  if (!darbas) {
    return res.status(404).json({ error: "Tokio darbo nera" });
  }
  res.status(200).json(darbas);
};

//POST sukurti naują darba
export const createJob = async (req, res) => {
  const { title, about, price, availability } = req.body;

  if (!title || !about || !price || !availability) {
    let emptyFields = [];
    if (!title) emptyFields.push("title");
    if (!about) emptyFields.push("about");
    if (!price) emptyFields.push("price");
    if (!availability) emptyFields.push("availability");

    return res
      .status(400)
      .json({ error: "Užpildykite visus laukelius", emptyFields });
  }

  try {
    const user_id = req.user._id;
    const darbas = await Job.create({
      title,
      about,
      price,
      availability,
      user_id,
    });
    res.status(200).json(darbas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//PATCH redaguoti vieną darbą
export const updateJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Tokio darbo nera" });
  }
  const darbas = await Job.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!darbas) {
    return res.status(404).json({ error: "Tokio darbo nera" });
  }
  res.status(200).json(darbas);
};

//DELETE ištrinti vieną darba
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Tokio darbo nera" });
  }
  const darbas = await Job.findOneAndDelete({ _id: id });
  if (!darbas) {
    return res.status(404).json({ error: "Tokio darbo nera" });
  }
  res.status(200).json(darbas);
};
