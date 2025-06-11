//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @author Echizen500
 * @author NightmareFox12
 */

contract MetaCashback {
    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;
    uint256 public rewardRate = 10; 

    function stakeTokens() external payable {
        require(msg.value > 0, "Debe depositar una cantidad positiva");

        stakes[msg.sender] = Stake(msg.value, block.timestamp);
    }

    function calculateReward(address staker) public view returns (uint256) {
        Stake memory userStake = stakes[staker];
        require(userStake.amount > 0, "No hay tokens en staking");

        uint256 timeStaked = block.timestamp - userStake.timestamp;
        return (userStake.amount * rewardRate * timeStaked) / (365 days * 100);
    }

    function withdrawStake() external {
        Stake memory userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No tienes tokens en staking");

        uint256 reward = calculateReward(msg.sender);
        payable(msg.sender).transfer(userStake.amount + reward);

        delete stakes[msg.sender];
    }
}
