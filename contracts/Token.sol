// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Token is ERC20, ERC20Burnable {
    constructor() ERC20("USDT DEMO", "USDT") {
        _mint(msg.sender, 1000000000e18);
    }
}