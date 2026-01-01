// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

/**
 * @title MyToken
 * @dev ERC20 Token implementation dengan fitur mint, burn, dan transfer
*/

contract MyToken {
  // Token info
  string public name;
  string public symbol;
  uint8 public constant decimals = 18;
  uint256 public totalSupply;

  // Owner
  address public owner;

  // Balances
  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;

  // Events
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
  event Mint(address indexed to, uint256 amount);
  event Burn(address indexed from, uint256 amount);

  modifier onlyOwner() {
    require(msg.sender == owner, "Only owner");
    _;
  }

  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _initialSupply
  ) {
    name = _name;
    symbol = _symbol;
    owner = msg.sender;

    // Mint initial supply to Creator
    uint256 amount = _initialSupply * 10**decimals;
    totalSupply = amount;
    balanceOf[msg.sender] = amount;

    emit Transfer(address(0), msg.sender, amount);
  }

  // Transfer tokens
  function transfer(address to, uint256 amount) public returns (bool) {
    require(to != address(0), "Invalid address");
    require(balanceOf[msg.sender] >= amount, "Insufficient balance");

    balanceOf[msg.sender] -= amount;
    balanceOf[to] += amount;

    emit Transfer(msg.sender, to, amount);
    return true;
  }

  // Approve Spender
  function approve(address spender, uint256 amount) public returns (bool) {
    allowance[msg.sender][spender] = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
  }

  // Transfer from
  function transferFrom(address from, address to, uint256 amount) public returns (bool) {
    require(to != address(0), "Invalid Address");
    require(balanceOf[from] >= amount, "Insufficient balance");
    require(allowance[from][msg.sender] >= amount, "Allowance exceeded");

    balanceOf[from] -= amount;
    balanceOf[to] += amount;
    allowance[from][msg.sender] -= amount;

    emit Transfer(from, to, amount);
    return true;
  }

  // Mint new tokens (owner only)
  function mint(address to, uint256 amount) public onlyOwner {
    require(to != address(0), "Invalid address");

    totalSupply += amount;
    balanceOf[to] += amount;

    emit Mint(to, amount);
    emit Transfer(address(0), to, amount);
  }

  // Burn Tokens
  function burn(uint256 amount) public {
    require(balanceOf[msg.sender] >= amount, "Insufficient balance");

    balanceOf[msg.sender] -= amount;
    totalSupply -= amount;

    emit Burn(msg.sender, amount);
    emit Transfer(msg.sender, address(0), amount);
  }
}