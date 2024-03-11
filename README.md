
SimpleRegistry Smart Contract and React Frontend Example
This repository contains a simple Ethereum smart contract named SimpleRegistry and a React frontend application that interacts with the smart contract. The smart contract stores information about an entity's name and age and provides functions to update and retrieve this information.

Smart Contract: SimpleRegistry.sol
Prerequisites
Solidity compiler version ^0.8.19
Installation and Usage
Compile the Smart Contract:
css
Copy code
solc --bin --abi --optimize -o ./build SimpleRegistry.sol
Deploy the Smart Contract on an Ethereum network of your choice.
React Frontend: App.js
Prerequisites
Node.js
npm or yarn
Installation and Usage
Install Dependencies:

Copy code
npm install
or

Copy code
yarn install
Update the Smart Contract Address:
Replace the placeholder contract address in App.js with the actual deployed SimpleRegistry contract address.

Run the React App:

sql
Copy code
npm start
or

sql
Copy code
yarn start
Smart Contract Functions
constructor(string memory _name, uint _age)
Initializes the entity's name and age when the contract is deployed.
updateName(string memory _newName) public
Updates the entity's name with the provided new name.
updateAge(uint _newAge) public
Updates the entity's age with the provided new age.
getEntityDetails() public view returns (string memory name, uint age)
Retrieves the current entity's name and age.
React Frontend Features
Connects to an Ethereum provider (e.g., MetaMask).
Loads the SimpleRegistry smart contract using ethers.js.
Displays the current entity's details on the frontend.
Allows users to update the entity's name and age.
