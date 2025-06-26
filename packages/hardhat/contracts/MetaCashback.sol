// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @author Echizen500
 * @author NightmareFox12
 */

contract MetaCashback is AccessControl {
    // roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    IERC20 public USDCToken = IERC20(0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85);

    //constans
    bytes32 public constant EXPLORER_LEVEL = "EXPLORER_LEVEL";
    bytes32 public constant PIONEER_LEVEL = "PIONEER_LEVEL";
    bytes32 public constant LEGENDARY_LEVEL = "LEGENDARY_LEVEL";
    bytes32 public constant ELITE_LEVEL = "ELITE_LEVEL";

    struct StakeStruct {
        uint256 amount;
        uint256 timeStamp;
    }

    // states
    mapping(address => StakeStruct) stakes;
    uint256 public rewardRate = 10;
    uint256 public minStakingAmount = 1 * 10 ** 6;

    //constructor
    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    //Views
    function getLevel() public view returns (bytes32) {
        uint256 userStaking = stakes[msg.sender].amount;

        if (userStaking < 100) {
            return EXPLORER_LEVEL;
        } else if (userStaking < 500) {
            return PIONEER_LEVEL;
        } else if (userStaking < 1000) {
            return LEGENDARY_LEVEL;
        } else {
            return ELITE_LEVEL;
        }
    }

    //Updates
    function updateStakingAmount(uint256 _minAmount) public onlyRole(ADMIN_ROLE) {
        minStakingAmount = _minAmount;
    }

    function addAdmin(address newAdmin) public onlyRole(ADMIN_ROLE) {
        require(!hasRole(ADMIN_ROLE, newAdmin), "The admin already exists");
        _grantRole(ADMIN_ROLE, newAdmin);
    }

    //Writes
    function stakeTokens(uint256 _amount) public {
        require(_amount > 0, "Deposit amount must be greater than zero");
        require(
            _amount >= minStakingAmount && USDCToken.allowance(msg.sender, address(this)) >= minStakingAmount,
            "The amount of the deposit must be higher than the minimum amount"
        );

        require(USDCToken.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");

        stakes[msg.sender] = StakeStruct({ amount: _amount, timeStamp: block.timestamp });
    }

    function withdrawStake() public {
        require(stakes[msg.sender].amount > 0, "No tokens available for withdrawal");

        uint256 totalAmount = stakes[msg.sender].amount;

        delete stakes[msg.sender];
        require(USDCToken.transfer(msg.sender, totalAmount), "Token transfer failed");
    }
}
