import mongoose from "mongoose";

const connection = async (DATABASE_URL) => {
  try {
    const database = {
      dbName: "ejsDB",
    };
    await mongoose.connect(DATABASE_URL, database);
    console.log("Database Connect successfully...");
  } catch (error) {
    console.log({ error: "Connection Failed" });
  }
};
export default connection;
