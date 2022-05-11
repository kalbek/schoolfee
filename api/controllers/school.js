import School from "../models/School.js";
import Student from "../models/Student.js";

export const createSchool = async (req, res, next) => {
  const newSchool = new School(req.body);

  try {
    const savedSchool = await newSchool.save();
    res.status(200).json(savedSchool);
  } catch (err) {
    next(err);
  }
};

export const updateSchool = async (req, res, next) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSchool);
  } catch (err) {
    next(err);
  }
};

export const deleteSchool = async (req, res, next) => {
  try {
    await School.findByIdAndDelete(req.params.id);
    res.status(200).json("School has been deleted.");
  } catch (err) {
    next(err);
  }
};  
export const getSchool = async (req, res, next) => {
  try {
    const school = await School.findById(req.params.id);
    res.status(200).json(school);
  } catch (err) {
    next(err);
  }
};
export const getSchools = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const schools = await School.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(schools);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return School.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const schoolCount = await School.countDocuments({ type: "school" });
    const apartmentCount = await School.countDocuments({ type: "apartment" });
    const resortCount = await School.countDocuments({ type: "resort" });
    const villaCount = await School.countDocuments({ type: "villa" });
    const cabinCount = await School.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "school", count: schoolCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getSchoolStudents = async (req, res, next) => {
  try {
    const school = await School.findById(req.params.id);
    const list = await Promise.all(
      school.students.map((student) => {
        return Student.findById(student);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
