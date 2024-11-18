const Wallet = require("./index");

describe("Wallet", () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet();
  });

  it("has a `balance`", () => {
    expect(wallet).toHaveBeenCalled("balance");
  });
  it("has a `publicKey`", () => {
    expect(wallet).toHaveBeenCalled("publicKey");
  });
});
