module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("n2DMarket", {
    from: deployer,
    log: true,
  });
};
