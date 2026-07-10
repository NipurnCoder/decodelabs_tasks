const students = require("../data/students");

exports.getStudents = (req,res)=>{

    res.json(students);

};

exports.getStudent = (req,res)=>{

    const id = parseInt(req.params.id);

    const student = students.find(s=>s.id===id);

    if(!student){

        return res.status(404).json({
            message:"Student not found"
        });

    }

    res.json(student);

};

exports.addStudent = (req,res)=>{

    const {name,age,course}=req.body;

    if(!name || !age || !course){

        return res.status(400).json({
            message:"All fields are required"
        });

    }

    const newStudent={

        id:students.length+1,
        name,
        age,
        course

    };

    students.push(newStudent);

    res.status(201).json({
        message:"Student added",
        student:newStudent
    });

};

exports.updateStudent=(req,res)=>{

    const id=parseInt(req.params.id);

    const student=students.find(s=>s.id===id);

    if(!student){

        return res.status(404).json({
            message:"Student not found"
        });

    }

    const {name,age,course}=req.body;

    student.name=name || student.name;
    student.age=age || student.age;
    student.course=course || student.course;

    res.json({
        message:"Student updated",
        student
    });

};

exports.deleteStudent=(req,res)=>{

    const id=parseInt(req.params.id);

    const index=students.findIndex(s=>s.id===id);

    if(index==-1){

        return res.status(404).json({
            message:"Student not found"
        });

    }

    students.splice(index,1);

    res.json({
        message:"Student deleted"
    });

};