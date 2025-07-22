const Students= require('./students');
const IdentityCard= require('./identityCard');
const Department = require('./department');
const department = require('./department');
//one to many association
Department.hasMany(Students);
Students.belongsTo(Department);
//one to one association
Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);

module.exports={
    Students,
    IdentityCard,
    department
}