import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  await mongoose.connect(uri);

  console.log("MongoDB connected");
};

export const getDatabaseState = (): string => {
  const state = mongoose.connection.readyState;

  switch (state) {
    case 0:
      return "disconnected";
    case 1:
      return "connected";
    case 2:
      return "connecting";
    case 3:
      return "disconnecting";
    default:
      return "unknown";
  }
};