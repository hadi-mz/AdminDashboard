import React from "react";
import Navbar from "../ui/dashbord/navbar/navbar";
import Styles from "../ui/dashbord/dashbord.madule.css";
import Card from "../ui/dashbord/card/Card"
import Rightbar from "../ui/dashbord/rightbar/Rightbar"
import Transactions from "../ui/dashbord/transaction/Transactions"
import Chart from "../ui/dashbord/chart/Chart"
export default function Dashbord() {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.main}>
        <div className={Styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={Styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
