import React, { useState, useEffect } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { db, collection, getDocs, doc, updateDoc, deleteDoc } from "./config/firebase";
import { Avatar, Card, Button } from 'antd';
const { Meta } = Card;

const Card1 = ({ selectedValue, filter }) => {
  const [cardData, setCardData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Sir-Assignment"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setCardData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter the cards based on selectedValue
    const filtered = cardData.filter((item) => parseFloat(item.Price) > selectedValue);
    setFilteredCards(filtered);
  }, [selectedValue]);

  useEffect(() => {
    // Filter the cards based on category input
    if (filter) {
      const filtered = cardData.filter((item) => item.Category.toLowerCase().includes(filter.toLowerCase()));
      setFilteredCards(filtered);
    } else {
      // If no category filter is provided, use the selectedValue filter
      const filtered = cardData.filter((item) => parseFloat(item.Price) > selectedValue);
    //   console.log("no card");
      setFilteredCards(filtered);
    }
  }, [filter, cardData, selectedValue]);
//   console.log("no card");

  const handleEdit = async (item) => {
    // Assuming "item.id" is the unique identifier for the document you want to edit
    const itemDocRef = doc(db, "Sir-Assignment", item.id);

    // Assuming you want to update the "title" field
    await updateDoc(itemDocRef, {
      title: "Updated Title", // Replace with the new title
    });

    // Refresh the card data
    fetchData();
  };

  const handleDelete = async (item) => {
    // Assuming "item.id" is the unique identifier for the document you want to delete
    const itemDocRef = doc(db, "Sir-Assignment", item.id);

    // Delete the document
    await deleteDoc(itemDocRef);
// alert("delete")

    // Refresh the card data
    fetchData();
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }} className='my-5'>
        
      {filteredCards.length === 0 ? (
          <h3>Sorry No Cards Found😐</h3>
        ) : (
          filteredCards.map((item, index) => (
          <Card
            key={index}
            style={{
              width: 300,
              marginBottom: 25,
              height: 330,
            }}
            cover={
              <img
                alt="example"
                src={item.url}
                style={{ height: "200px" }}
              />
            }
            actions={[
              <SettingOutlined key="setting" onClick={() => handleEdit(item)} />,
              <EditOutlined key="edit" onClick={() => handleEdit(item)} />,
              <DeleteOutlined key="delete" onClick={() => handleDelete(item)} />,
            ]}
          >
            <Meta
              avatar={<Avatar src={item.url} />}
              title={item.Title}
              description={item.Descripion}
            />
            <h5 align="center">{item.Price}</h5>
            <h5 align="center">{item.Category}</h5>
          </Card>
        ))
        )}
      </div>
    </>
  );
};

export default Card1;
