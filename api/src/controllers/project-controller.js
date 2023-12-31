import Project from "../models/Project.js";

export const getAllProjects = async (req, res) => {
  const data = await Project.find();

  return res.status(200).json(data);
};

export const getWebProjects = async (req, res) => {
  const data = await Project.find({ category: "web" });

  return res.status(200).json(data);
};

export const getAppProjects = async (req, res) => {
  const data = await Project.find({ category: "app" });

  return res.status(200).json(data);
};

export const getGraphicProjects = async (req, res) => {
  const data = await Project.find({ category: "graphic" });

  return res.status(200).json(data);
};
