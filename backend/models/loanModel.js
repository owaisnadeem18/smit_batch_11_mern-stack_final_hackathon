const mongoose = require("mongoose");
const { Schema } = mongoose;

const loanSchema = new Schema(
  {
    category: {
      type: String,
      required: [true, "Loan category is required!"],
      enum: ["Education", "Wedding", "Business", "Home Construction"],
    },
    subcategory: {
      type: String,
      required: [true, "Loan subcategory is required!"],
    },
    amount: {
      type: Number,
      required: [true, "Loan amount is required!"],
      min: [1000, "Minimum loan amount is 1000!"],
    },
    durationMonths: {
      type: Number,
      required: [true, "Loan duration is required!"],
      min: [1, "Minimum duration is 1 month!"],
    },
    interestRate: {
      type: Number,
      required: [true, "Interest rate is required!"],
    },
    description: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Loan must be associated with a user!"],
    },
  },
  { timestamps: true }
);

const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;
