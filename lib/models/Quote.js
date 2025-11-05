// lib/models/Quote.js - CORRECTED FOR CURRENT FORM STRUCTURE
import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: { // Added: From Step 1
    type: String,
    required: true,
    trim: true
  },
  bestTime: {
    type: String,
    default: '',
    trim: true
  },
  contactMethod: {
    type: String,
    default: '',
    trim: true
  },
  service: { // List of services (e.g., "Catering, Rentals")
    type: String,
    required: true,
    trim: true
  },
  projectDetails: { // Detailed event info (Type, Date, Venue, Guests)
    type: String,
    required: true,
    trim: true
  },
  message: { // Anything Else field
    type: String,
    default: '',
    trim: true
  },
  // 💥 MODIFIED: Not explicitly required from the client, but default is set 💥
  currency: { 
    type: String, 
    enum: ['NGN', 'USD'], 
    default: 'NGN' // Default to NGN
    // 'required: true' removed as the form sends a placeholder
  },
  budgetRaw: { 
    type: Number, 
    default: 0 // Default to 0
    // 'required: true' removed as the form sends a placeholder
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Prevent model overwrite issue in Next.js hot reload
export default mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);