const mongoose = require("mongoose")

export const connected = async function(){
  await mongoose.connect(process.env.MONGO_DB)
}