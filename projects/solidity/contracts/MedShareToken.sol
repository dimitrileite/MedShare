// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./token/ERC777/ERC777.sol";


contract MedShareToken is ERC777 {
    
    constructor(uint256 initialSupply, address[] memory defaultOperators)
        ERC777("MedShare Token", "MDST", defaultOperators)
    {
        _mint(msg.sender, initialSupply, "", "");
    }
}
