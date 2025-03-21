import React from 'react'
import Banner from '../../components/Home/Banner'
import Sidebar from '../../components/Home/SideBar'
import styles from "./HomePage.module.scss";
import FlashSales from '../../components/Home/FlashSales';
import NewArrival from '../../components/Home/NewArrival';


const HomaPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <Sidebar />
        <Banner />
      </div>
      <FlashSales heading={"Today's"} title={"Flash Sales"} />
      <hr />
      <FlashSales heading={"Categories"} title={"Browse By Category"} />

      <hr />
      <FlashSales heading={"This Month"} title={"Best Selling Products"} />

      <Banner heading={"Categories"} title={"Enhance Your Music Experience"} />
      <FlashSales heading={"Our Products"} title={"Explore Our Products"} />

      <NewArrival />
    </div>
  )
}

export default HomaPage