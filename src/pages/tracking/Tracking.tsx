import { useState } from "react";
import Layout from "../../components/Layout";
import { Searchbar } from "../../components/Searchbar";
import { NoDetails } from "../../components/noDetails";
import { NoConnection } from "../../components/noConnection";
import { NotFound } from "../../components/NotFound";
import { NoResults } from "../../components/noResults";
import axios from "axios";

const Tracking = () => {
  const [awb, setAwb] = useState("");
  const [awbIsValid, setAwbIsValid] = useState(true);
  const [itemDetails, setItemDetails] = useState({});
  const [awbNotFound, setAwbNotFound] = useState(false);
  const regex = /^\d+$/;
  const onSubmit = async () => {
    if (!awb) {
      return;
    }
    if (!regex.test(awb) || awb.length !== 12) {
      setAwbIsValid(false);
      return;
    }
    setAwbIsValid(true);
    const payload = {
      doctype: "AWB",
      filters: {
        name: ["like", `%${awb}%`],
      },
    };
    try {
      const { data } = await axios.post("/api/frappe.client.get", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      setAwbNotFound(false);
    } catch (error) {
      console.error(error);
      if (error.status === 404) {
        setAwbNotFound(true);
      }
    }
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
        setAwbNotFound={setAwbNotFound}
      />
      {!awb || (awb && !awbNotFound) ? <NoDetails /> : null}
      {awbNotFound && awb ? <NoResults onSubmit={onSubmit} /> : null}
      {/* <NoConnection /> */}
      {/* <NotFound /> */}
    </Layout>
  );
};

export { Tracking };
