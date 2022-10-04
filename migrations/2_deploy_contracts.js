var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var StructureContract = artifacts.require("./Structure.sol")
// var ManufacturerContract = artifacts.require("./rolesUtils/Manufacturer.sol");

module.exports = function(deployer) {
  // deployer.deploy(ManufacturerContract);
  deployer.deploy(StructureContract);
  deployer.deploy(SupplyChainContract, {gas: 15555555});
  // deployer.deploy(FetchContract, {gas: 15555555});
};
