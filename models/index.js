const Students= require('./students');
const IdentityCard= require('./identityCard');
const Department = require('./department');
const department = require('./department');
const Courses= require('./courses');
const StudentCourse= require('./studentCourse'); 
const Users= require('./users');
const Bookings= require('./bookings');
const Buses= require('./buses')
//one to many association
Department.hasMany(Students);
Students.belongsTo(Department);
Users.hasMany(Bookings);
Bookings.belongsTo(Users);
Buses.hasMany(Bookings)
Bookings.belongsTo(Buses)
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
    StudentCourse,
    Users,
    Bookings,
    Buses
}