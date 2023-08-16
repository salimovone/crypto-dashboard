import React from "react";
import Navbar from "../../components/Navbar";
import Head from "../../components/Wallet/Head";
import Transfer from "../../components/Wallet/Transfer";
import Wallets from "../../components/Wallet/Wallet";
import WalletTransaction from "../../components/Wallet/Transaction";
import Tablettop from "../../components/Table-top";
import BuySellTable from "../../components/BuySellTable";

const Wallet = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Head />
      <Wallets />
      <Transfer />
      <WalletTransaction />
      <Tablettop />
      <BuySellTable />
    </div>
  );
};

export default Wallet;
