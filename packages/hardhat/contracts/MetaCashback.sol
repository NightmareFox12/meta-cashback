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

    //states
    mapping(address => uint256) public totalStake;
    mapping(address => uint256) public totalSpent;
    uint256 public rewardRate = 10;
    uint256 public minStakingAmount = 1 * 10 ** 6;

    //events
    event Staking(address indexed user, uint256 amount, uint256 timeStamp);

    //constructor
    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    //internals
    function _getCashBackPercentage(uint256 _amount) internal pure returns (uint256) {
        if (_amount <= 100 * (10 ** 6)) {
            return 1; // 1%
        } else if (_amount <= 500 * (10 ** 6)) {
            return 2; // 2%
        } else if (_amount <= 1000 * (10 ** 6)) {
            return 3; // 3%
        } else {
            return 4; // 4%
        }
    }

    //Views
    function getLevel() public view returns (bytes32) {
        uint256 userStaking = totalStake[msg.sender];

        if (userStaking < 100 * 10 ** 6) {
            return EXPLORER_LEVEL;
        } else if (userStaking < 500 * 10 ** 6) {
            return PIONEER_LEVEL;
        } else if (userStaking < 1000 * 10 ** 6) {
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
        address user = msg.sender;
        require(user == tx.origin, "only user");
        require(_amount > 0, "Deposit amount must be greater than zero");
        require(
            _amount >= minStakingAmount && USDCToken.allowance(user, address(this)) >= minStakingAmount,
            "The amount of the deposit must be higher than the minimum amount"
        );

        require(USDCToken.transferFrom(user, address(this), _amount), "Token transfer failed");

        totalStake[user] += _amount;
        emit Staking(user, _amount, block.timestamp);
    }

    function withdrawStake(uint256 _totalSpend) public {
        address user = msg.sender;
        require(totalStake[user] > 0, "No tokens available for withdrawal");

        uint256 amountToWithdraw = totalStake[user];
        uint256 previouslyRewardedSpend = totalSpent[user];

        require(
            _totalSpend >= previouslyRewardedSpend,
            "New total spend cannot be less than previously recorded spend"
        );

        uint256 newSpendForCashback = _totalSpend - previouslyRewardedSpend;
        uint256 cashbackPercentage = _getCashBackPercentage(amountToWithdraw);

        uint256 cashbackAmount = 0;
        if (cashbackPercentage > 0 && newSpendForCashback > 0) {
            cashbackAmount = (newSpendForCashback * cashbackPercentage) / 100;
        }

        uint256 totalAmountToSend = amountToWithdraw + cashbackAmount;

        totalSpent[user] = _totalSpend;
        delete totalStake[user];

        require(USDCToken.transfer(user, totalAmountToSend), "Total token transfer failed");
    }
}
