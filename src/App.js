import React, { useState } from "react";
import Header from "./component/header/Header";
import Input from "./component/input/Input";
import Output from "./component/output/Output";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { Grid, Box } from "@material-ui/core";

const App = () => {
  const [input, setInput] = useState("");

  const handlePaste = (e) => {
    const date = format(new Date(), "Mdd");
    const tommorow = format(addDays(new Date(), 1), "Mdd");
    const value = e.target.value;
    let first;
    let second;
    const arr = value.split("");
    for (let i = 0; i < value.length; i++) {
      if (isNaN(Number(arr[i])) !== true && Number(arr[i]) !== 0) {
        if (arr[i + 1] === "월") {
          if (first === undefined) {
            arr[i] = tommorow.charAt(0);
            arr[i + 3] = tommorow.charAt(1);
            arr[i + 4] = tommorow.charAt(2);
            first = "done";
          } else if (first === "done" && second === undefined) {
            arr[i] = date.charAt(0);
            arr[i + 3] = date.charAt(1);
            arr[i + 4] = date.charAt(2);
            second = "done";
          } else if (first === "done" && second === "done") {
            arr[i] = tommorow.charAt(0);
            arr[i + 3] = tommorow.charAt(1);
            arr[i + 4] = tommorow.charAt(2);
            second = "done";
          }
        }
      }
    }
    const res = arr.join("");

    setInput(res);
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box m={4}>
        <Header />
      </Box>
      <Input input={input} handlePaste={handlePaste} />
      <Output input={input} />
    </Grid>
  );
};

export default App;
