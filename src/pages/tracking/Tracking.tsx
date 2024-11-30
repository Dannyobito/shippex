import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Searchbar } from "../../components/Searchbar";
import { NoDetails } from "../../components/noDetails";
import { NoConnection } from "../../components/noConnection";
import { NotFound } from "../../components/NotFound";
import { NoResults } from "../../components/noResults";
import axios from "axios";
import { Details } from "../../components/Details";
import { Route, Routes } from "react-router-dom";
import { CookieProtectedRoute } from "../../routes/CookieProtectedRoute";

const Tracking = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleNetworkChange = () => {
      setAwbNotFound(false);
      setIsOnline(navigator.onLine);
      window.location.reload();
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, [isOnline]);

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
      console.log(data.message);
      setItemDetails(data.message);
      setAwbNotFound(false);
    } catch (error: any) {
      console.error(error);
      if (error.status === 404) {
        setAwbNotFound(true);
        setItemDetails({});
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
      <Routes>
        <Route
          index
          element={
            <CookieProtectedRoute>
              {!isOnline ? (
                <NoConnection />
              ) : (!awb && itemDetailsIsEmpty()) ||
                (awb && !awbNotFound && itemDetailsIsEmpty()) ? (
                <NoDetails />
              ) : null}
              {awbNotFound && awb ? <NoResults onSubmit={onSubmit} /> : null}
              {!itemDetailsIsEmpty() ? (
                <Details itemDetails={itemDetails} />
              ) : null}
            </CookieProtectedRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export { Tracking };
