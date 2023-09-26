import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  friend,
  selectedFriend,
  onSelectFriend,
}) {
  return (
    <ul className="scroll">
      {friend.map((friend) => (
        <Friend
          selectedFriend={selectedFriend}
          onSelectFriend={onSelectFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
