import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";


function App() {
  // state to hold data fetched from api
  const [data, setData] = useState([]);
  // state to hold the selected item to display in the modal
  const [selectedItem, setSelectedItem] = useState(null);

  //function to open the modal with the selected item
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  //using useeffect fetch data from api when the components mount
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {/* map through the data array and render a Card component for each item */}
      {data.map((item) => (
        <Card key={item.id} data={item} onLearnMore={() => openModal(item)} />
      ))}

      {/* Render the Modal component if selectedItem is not null */}
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default App;
