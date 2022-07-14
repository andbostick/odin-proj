import React from "react";
import { Input } from "@mui/material";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      <form>
        <Input type="text" placeholder="University name" />
        <Input type="text" placeholder="City" />
        <Input type="text" placeholder="Degree" />
        <Input type="text" placeholder="Subject" />
        <Input type="text" placeholder="Year Graduated" />
      </form>
    </section>
  );
}
