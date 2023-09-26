import React from "react";

export default function DeleteButton({ children, onDeleteFriend }) {
  return (
    <div>
      <button onClick={onDeleteFriend} className="del-button">
        {children}
      </button>
    </div>
  );
}
