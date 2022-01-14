import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    nameData: {type: String},
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Data = mongoose.model("Data", dataSchema);

export default Data;