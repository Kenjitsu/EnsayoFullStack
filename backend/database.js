import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// const { Mongoose } = mongoose;
const URI = process.env.MONGO_DB; //localhost/empleados’;

mongoose.connect(URI)
.then(db => console.log(`DB is connected`))
.catch(err => console.error(err));

// const mongooseCN = module.exports = mongoose;
export default mongoose;