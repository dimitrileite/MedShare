const MedShareToken = artifacts.require('MedShareToken');

module.exports = function (deployer, _network, addresses) {
  deployer.deploy(MedShareToken, 0, [addresses[0]]);
};
