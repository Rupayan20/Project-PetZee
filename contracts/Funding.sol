// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Funding {
    address public wallet;
    uint public target_amount;
    uint public current_amount;
    
    constructor(address _wallet , uint _target_amount) {
        wallet = _wallet;
        target_amount = _target_amount;
    }

    function donate(uint _amount) public{
        current_amount += _amount;
    }

    function getTargetAmount() public view returns(uint) {
        return target_amount;
    }

    function getCurrentAmount() public view returns(uint) {
        return current_amount;
    }
}
