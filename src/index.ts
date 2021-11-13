import cors from "cors";
import express from "express";
import { Wallet, Chain } from "./libs/Blockchain";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/block", (_, res) => {
  // Example usage

  const satoshi = new Wallet();
  const bob = new Wallet();
  const alice = new Wallet();

  satoshi.sendMoney(50, bob.publicKey);
  bob.sendMoney(23, alice.publicKey);
  alice.sendMoney(5, bob.publicKey);

  res.send(Chain.instance);
});

app.listen(5001, () => console.log("Server on port 5001 ⚡️"));
