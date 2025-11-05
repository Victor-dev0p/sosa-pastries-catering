// lib/mongodb.js - FIXED VERSION
import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected && mongoose.connection.readyState === 1) {
    console.log('✅ MongoDB is already connected');
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is not defined in environment variables');
  }

  try {
    const options = {
      dbName: 'SosaPC',
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4, // Force IPv4
    };

    await mongoose.connect(process.env.MONGODB_URI, options);

    isConnected = true;
    console.log('✅ MongoDB connected successfully to SosaPC');
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected');
      isConnected = false;
    });

  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    isConnected = false;
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};