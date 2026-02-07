const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = Connection;
