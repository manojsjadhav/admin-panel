import React from "react";
import Chart from "../../component/chart/Chart";
import FeatureInfo from "../../component/featureInfo/FeatureInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../component/widgetLg/WidgetLg";
import WidgetSm from "../../component/widgetSm/WidgetSm";

const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
