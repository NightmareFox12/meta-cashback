// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @author Echizen500
 * @author NightmareFox12
 */

contract MetaCashback {
    IERC20 public stakingToken;

    //constans
    bytes32 public constant EXPLORER_LEVEL = "EXPLORER_LEVEL";
    bytes32 public constant PIONEER_LEVEL = "PIONEER_LEVEL";
    bytes32 public constant LEGENDARY_LEVEL = "LEGENDARY_LEVEL";
    bytes32 public constant ELITE_LEVEL = "ELITE_LEVEL";

    struct UserStaking {
        uint256 amount;
        uint256 timeStamp;
    }

    // states
    mapping(address => UserStaking) stakes;
    uint256 public rewardRate = 10;
    uint256 public minStakingAmount = 5 * 10 ** 6;

    //constructor
    constructor(address _tokenAddress) {
        require(_tokenAddress != address(0), "Invalid token address");
        stakingToken = IERC20(_tokenAddress);
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

    function stakeTokens(uint256 _amount) public payable {
        require(_amount > 0, "Deposit amount must be greater than zero");
        require(
            _amount >= minStakingAmount && stakingToken.allowance(msg.sender, address(this)) >= minStakingAmount,
            "The amount of the deposit must be higher than the minimum amount"
        );

        // require(stakingToken.allowance(msg.sender, address(this)) >= minStakingAmount,"");
        // require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");

        stakes[msg.sender] = UserStaking({ amount: msg.value, timeStamp: block.timestamp });
    }

    // function calculateReward(address staker) public view returns (uint256) {
    //     require(stakes[staker] > 0, "No tokens staked");

    //     uint256 timeStaked = block.timestamp - timestamps[staker];
    //     return (stakes[staker] * rewardRate * timeStaked) / (365 days * 100);
    // }

    // function withdrawStake() external {
    //     require(stakes[msg.sender] > 0, "No tokens available for withdrawal");

    //     uint256 reward = calculateReward(msg.sender);
    //     uint256 totalAmount = stakes[msg.sender] + reward;

    //     require(stakingToken.transfer(msg.sender, totalAmount), "Token transfer failed");

    //     stakes[msg.sender] = 0;
    //     timestamps[msg.sender] = 0;
    // }
}
