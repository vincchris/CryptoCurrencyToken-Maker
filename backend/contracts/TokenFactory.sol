// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./MyToken.sol";

/**
 * @title TokenFactory
 * @dev Factory contract untuk membuat multiple ERC20 tokens
 */

contract TokenFactory {
  // Array of all deployed tokens
  address[] public deployedTokens;

  // Mapping for track token per user
  mapping(address => address[]) public userTokens;

  // Event when a new token is created
  event TokenCreated(
    address indexed tokenAddress,
    address indexed creator,
    string name,
    string symbol,
    uint256 initialSupply
  );

  /**
     * @dev Create token baru
     * @param _name Nama token
     * @param _symbol Symbol token
     * @param _initialSupply Initial supply (tanpa decimals)
     * @return address dari token yang baru dibuat
     */
    function createToken(
      string memory _name,
      string memory _symbol,
      uint256 _initialSupply
    ) public returns (address) {
      // Deploy New Contract MyToken
      MyToken newToken = new MyToken(_name, _symbol, _initialSupply);

      address tokenAddress = address(newToken);

      // Save to Array
      deployedTokens.push(tokenAddress);

      // Save to User Mapping
      userTokens[msg.sender].push(tokenAddress);

      // Emit event
      emit TokenCreated(
        tokenAddress,
        msg.sender,
        _name,
        _symbol,
        _initialSupply
      );

      return tokenAddress;
    }

    /**
     * @dev Get all deployed tokens
     */
    function getDeployedTokens() public view returns (address[] memory) {
      return deployedTokens;
    }

    /**
     * @dev Get the number of tokens that have been deployed
     */
    function getDeployedTokensCount() public view returns (uint256) {
      return deployedTokens.length;
    }

    /**
     * @dev Get tokens belonging to a specific user
     */
    function getUserTokens(address user) public view returns (address[] memory) {
      return userTokens[user];
    }
}