import Case from '../models/caseModel.js';

// Create a new case
export const createCase = async (req, res) => {
  try {
    const newCase = new Case({
      title: req.body.title,
      customerId: req.body.customerId,
      assignedTo: req.body.assignedTo,
      description: req.body.description,
      status: req.body.status,
    });
    const savedCase = await newCase.save();
    res.status(201).json(savedCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get all cases
export const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a case by ID
export const getCaseById = async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id);
    if (!caseData) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.status(200).json(caseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update a case by ID
export const updateCaseById = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCase) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.status(200).json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a case by ID
export const deleteCaseById = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    if (!deletedCase) {
      return res.status(404).json({ message: "Case not found" });
    }
   res.status(200).json({ message: "Case deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  