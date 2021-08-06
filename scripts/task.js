
const factory = '0xD579f2E5F979644e220E3ac23774B2704cAB6175'


task("create", "create pool", async () => {
  
  const StakingRewardsFactory =  await ethers.getContractFactory('StakingRewardsFactory')
  const tx = await StakingRewardsFactory.attach(factory).deploy('0x39b3EED34Ef79D4f2CBe793E1A73F78cFbe19471', 100000);
  console.log(`create pool ${tx.hash}`)
  await tx.wait()

});

module.exports = {};