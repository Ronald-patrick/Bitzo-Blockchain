var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var StructureContract = artifacts.require("./Structure.sol")

module.exports = function(deployer) {
  deployer.deploy(StructureContract);
  deployer.deploy(SupplyChainContract, {gas: 15555555});
};
