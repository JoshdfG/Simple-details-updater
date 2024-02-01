// src/components/SimpleRegistryComponent.js
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import YOUR_CONTRACT_ABI from "./abi.json";
import './App.css';


const SimpleRegistryComponent = () => {
  const [contract, setContract] = useState(null);
  const [entityName, setEntityName] = useState("");
  const [entityAge, setEntityAge] = useState(0);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [loading, setLoading] = useState(false);

 const CONTRACT_ADDRESS="0xb451ACC4003667d2A25A81a264D98a39484Ba6b5"

  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, YOUR_CONTRACT_ABI, signer);
    setContract(contract);
  };

  const updateName = async () => {
    try {
      setLoading(true);
      await contract.updateName(newName);
      alert("Name updated successfully!");
      setNewName(""); 
    } catch (error) {
      console.error("Error updating name:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateAge = async () => {
    try {
      setLoading(true);
      await contract.updateAge(newAge);
      alert("Age updated successfully!");
      setNewAge(0); 
    } catch (error) {
      console.error("Error updating age:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const getEntityDetails = async () => {
    try {
      setLoading(true);
      const details = await contract.getEntityDetails();
      setEntityName(details[0]);
      // Check if details[1] is defined and not null
      if (details[1] !== undefined && details[1] !== null) {
        // Log the type of details[1]
        console.log("Type of details[1]:", typeof details[1]);
        // Attempt to convert details[1] to a number
        const ageValue = parseInt(details[1]);
        // Check if the conversion is successful
        if (!isNaN(ageValue)) {
          setEntityAge(ageValue);
        } else {
          console.error("Unable to convert details[1] to a number");
        }
      } else {
        console.error("Entity details[1] is undefined or null");
      }
    } catch (error) {
      console.error("Error fetching entity details:", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="App-header">
      <h1>SimpleRegistry</h1>
      {contract ? (
        <>
          <p>Entity Name: {entityName}</p>
          <p>Entity Age: {entityAge}</p>

          <label>
            New Name:
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          </label>
          <button className="App-btn" onClick={updateName} disabled={loading}>
            Update Name
          </button>

          <label>
            New Age:
            <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} />
          </label>
          <button className="App-btn" onClick={updateAge} disabled={loading}>
            Update Age
          </button>

          <button className="update" onClick={getEntityDetails} disabled={loading}>
            Get Entity Details
          </button>
        </>
      ) : (
        <p>Connecting to wallet...</p>
      )}
    </div>
  );
};

export default SimpleRegistryComponent;
