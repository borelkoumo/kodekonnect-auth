import mongoose from 'mongoose';

let initialized = false;

export async function connect() {
  mongoose.set('strictQuery', true);

  if (initialized) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: 'kodekonnect-auth-app',
    });

    console.log('mongodb connected');
    initialized = true;
  } catch (error) {
    console.log('Mongodb connection error');
  }
}
