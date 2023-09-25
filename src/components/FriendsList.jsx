import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friend }) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
