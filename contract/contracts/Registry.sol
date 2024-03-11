// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleRegistry {
    string private entityName;
    uint private entityAge;

    constructor(string memory _name, uint _age) {
        entityName = _name;
        entityAge = _age;
    }

    // Function to update the entity's name
    function updateName(string memory _newName) public {
        entityName = _newName;
    }

    // Function to update the entity's age
    function updateAge(uint _newAge) public {
        entityAge = _newAge;
    }

    // Function to retrieve the entity's name and age
    function getEntityDetails() public view returns (string memory name, uint age) {
        return (entityName, entityAge);
    }
}
