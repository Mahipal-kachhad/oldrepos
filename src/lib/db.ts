import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error("conection string error");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

export const connectDB = async () => {
  if (cached.con) {
    return cached.con;
  }

  if (!cached.promise) {
    mongoose.connect(MONGO_URI).then(() => mongoose.connection);
  }

  try {
    cached.con = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
};
