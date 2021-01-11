const JurStatus = artifacts.require("./JurStatus.sol");

contract('JurStatus Test Suite', function (accounts) {

  var jurStatus;
  const admin = accounts[0];
  const account1 = accounts[1];
  const account2 = accounts[2];
  const statusType1 = "nnamdi";
  const statusType2 = "chidume";

  it("Initialize JurStatus", async () => {    
    jurStatus = await JurStatus.new({from: admin});
  });

  it("Test: create a new Jur Status type - nnamdi", async () => {
    await jurStatus.addStatusType(statusType1, { from: admin });
    assert.equal(await jurStatus.statusTypes.call(0), statusType1);
  })

  it("Test: create a new Jur Status type - chidume", async () => {
    await jurStatus.addStatusType(statusType2, { from: admin });
    assert.equal(await jurStatus.statusTypes.call(1), statusType2);
  })

  it("create a new Jur Status - account1", async () => {
    await jurStatus.addJurStatus(account1, 0);
    assert.equal((await jurStatus.status.call(account1)).isActive, true);
    assert.equal((await jurStatus.status.call(account1)).statusType, statusType1);
  })

  it("create a new Jur Status - account2", async () => {
    await jurStatus.addJurStatus(account2, 1);
    assert.equal((await jurStatus.status.call(account2)).isActive, true);
    assert.equal((await jurStatus.status.call(account2)).statusType, statusType2);
  })
});