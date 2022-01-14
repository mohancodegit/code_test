import mongoose from "mongoose";

const messageSchema =  mongoose.Schema({
    name: String,
    message1: {
        type: Object,
        default:{}
    },
    message2: {
        type: Object,
        default:{}
    }
});

const Message = mongoose.model('Message', messageSchema);

export default  Message  ;
