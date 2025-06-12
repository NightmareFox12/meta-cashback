// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @author Echizen500
 * @author NightmareFox12
 */

contract MetaCashback {
    IERC20 public stakingToken;

    // states 
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public timestamps;
    uint256 public rewardRate = 10;
    uint256 public minStakingAmount = 5 * 10 ** 6;

    constructor(address _tokenAddress) {
        require(_tokenAddress != address(0), "Invalid token address");
        stakingToken = IERC20(_tokenAddress);
    }

    function stakeTokens(uint256 _amount) external {
        require(_amount > 0, "Deposit amount must be greater than zero");
        require(_amount >= minStakingAmount && stakingToken.allowance(msg.sender, address(this)) >= minStakingAmount
        , "The amount of the deposit must be higher than the minimum amount");

        // require(stakingToken.allowance(msg.sender, address(this)) >= minStakingAmount,"");
        // require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");

        stakes[msg.sender] += _amount;
        timestamps[msg.sender] = block.timestamp;
    }

    function calculateReward(address staker) public view returns (uint256) {
        require(stakes[staker] > 0, "No tokens staked");

        uint256 timeStaked = block.timestamp - timestamps[staker];
        return (stakes[staker] * rewardRate * timeStaked) / (365 days * 100);
    }

    function withdrawStake() external {
        require(stakes[msg.sender] > 0, "No tokens available for withdrawal");

        uint256 reward = calculateReward(msg.sender);
        uint256 totalAmount = stakes[msg.sender] + reward;

        require(stakingToken.transfer(msg.sender, totalAmount), "Token transfer failed");

        stakes[msg.sender] = 0;
        timestamps[msg.sender] = 0;
    }
}
