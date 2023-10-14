import React from "react";
import { Layout } from "../layout/Layout.jsx";
import { Boost } from "../components/Boost"
import { Shorten } from "../components/Shorten";
import { AdvancedStatistics } from "../components/AdvancedStatistics";

export function Root() {

  return (
    <div>
      <Layout>
        <Shorten/>
        <AdvancedStatistics/>
        <Boost/>
      </Layout>
    </div>
  );
}
