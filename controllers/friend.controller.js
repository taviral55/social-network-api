import FriendList from "../models/friend.model.js";

export const friendRequest = async (req, res) => {
  try {
    console.log(req.body);
    const request = await FriendList.create(req.body);
    res.status(201).json(request);
  } catch (error) {}
};

export const pendingRequest = async (req, res) => {
  try {
    const requestList = await FriendList.find({ receiver: req.params.id });
    res.status(201).json(requestList);
  } catch (error) {}
};

export const friendsList = async (req, res) => {
  try {
    console.log(req.params)
    const list = await FriendList.find({
      $or: [{ sender: req.params.id }, { receiver: req.params.id }],
      status: "Accepted",
    });
    res.status(201).json(list);
  } catch (error) {}
};
