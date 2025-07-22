const Students= require('./students');
const IdentityCard= require('./identityCard');
const Department = require('./department');
const department = require('./department');
const Courses= require('./courses');
const StudentCourse= require('./studentCourse'); 

//one to many association
Department.hasMany(Students);
Students.belongsTo(Department);
//one to one association
Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);
//many to many

Students.belongsToMany(Courses,{through:StudentCourse})
Courses.belongsToMany(Students,{through:StudentCourse})
module.exports={
    Students,
    IdentityCard,
    department,
    Courses,
    StudentCourse
}