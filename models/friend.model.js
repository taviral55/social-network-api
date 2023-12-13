import mongoose, { Schema } from "mongoose";

const friendListSchema = new mongoose.Schema(
  {
    sender: {
      ref: "User",
      type: Schema.Types.ObjectId,

      required: [true, "Please enter your id"],
    },
    receiver: {
      ref: "User",
      type: Schema.Types.ObjectId,

      required: [true, "Please enter freind account id"],
    },
    status: {
      type: String,
      Enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const FriendList = mongoose.model("Freind", friendListSchema);
export default FriendList;
