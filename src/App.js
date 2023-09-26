import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";
import Heading from "./components/Heading";
import { initialFriends } from "./data";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friend, setFriend] = useState([...initialFriends]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friends) {
    setFriend((friend) => [...friend, friends]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur === friend ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriend((friends) =>
      friends.map((cur) =>
        cur.id === selectedFriend.id
          ? { ...cur, balance: cur.balance + value }
          : cur
      )
    );
    setSelectedFriend(null);
  }

  function handleDeleteFriend(friend) {
    const confirmed = window.confirm(`${selectedFriend.name} will be removed!`);
    if (!confirmed) return;
    setFriend((friend) =>
      friend.filter((friend) => friend.id !== selectedFriend.id)
    );
    setSelectedFriend(null);
  }

  return (
    <div>
      <Heading />
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friend={friend}
            onSelectFriend={handleSelection}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            onDeleteFriend={handleDeleteFriend}
          />
        )}
      </div>
    </div>
  );
}

export default App;
