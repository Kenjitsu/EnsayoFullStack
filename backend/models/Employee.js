import mongoose from 'mongoose';

const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: { type: String, require: true },

    position: { type: String, require: true },

    office: { type: String, require: true },

    salary: { type: Number, require: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;