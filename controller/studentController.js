import Student from "../models/studentModel.js";

class studentController {
  static insertStudents = async (req, res) => {
    // console.log(req.body)
    try {
      const { name, age, fees } = req.body;
      const data = new Student({
        name: name,
        age: age,
        fees: fees,
      });
      const result = await data.save();
      //  console.log(result)
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllStudents = async (req, res) => {
    try {
      const result = await Student.find();
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static editStudents = async (req, res) => {
    // console.log(req.params.id)
    try {
      const result = await Student.findById(req.params.id);
      //   console.log(result);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static updateStudents = async (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    try {
      const result = await Student.findByIdAndUpdate(req.params.id, req.body);
      // console.log(result)
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteStudents = async (req, res) => {
    // console.log(req.params.id)
    try {
      const result = await Student.findByIdAndDelete(req.params.id);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}

export default studentController;
