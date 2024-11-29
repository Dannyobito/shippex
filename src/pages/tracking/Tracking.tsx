import { useState } from "react";
import Layout from "../../components/Layout";
import { Searchbar } from "../../components/Searchbar";
import { NoDetails } from "../../components/noDetails";
import { NoConnection } from "../../components/noConnection";
import { NotFound } from "../../components/NotFound";
import { NoResults } from "../../components/noResults";

const Tracking = () => {
  const [awb, setAwb] = useState("");
  const [awbIsValid, setAwbIsValid] = useState(true);
  const [itemDetails, setItemDetails] = useState({});
  const regex = /^\d+$/;
  const onSubmit = () => {
    if (!awb) {
      return;
    }
    if (!regex.test(awb) || awb.length !== 13) {
      setAwbIsValid(false);
      return;
    }
    console.log(awb);
  };
  const itemDetailsIsEmpty = () => Object.keys(itemDetails).length === 0;
  return (
    <Layout gap={true}>
      <Searchbar
        awb={awb}
        setAwb={setAwb}
        isValid={awbIsValid}
        setIsValid={setAwbIsValid}
        onSubmit={onSubmit}
        resultsFound={!itemDetailsIsEmpty()}
      />
      {/* <NoDetails /> */}
      {/* <NoConnection /> */}
      <NotFound />
      {/* <NoResults /> */}
    </Layout>
  );
};

export { Tracking };
