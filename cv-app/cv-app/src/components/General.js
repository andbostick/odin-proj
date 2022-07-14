import React from "react";
import '../styles/Input.css'
import { Input } from "@mui/material";

export default function General() {
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <Input type="text" placeholder="name" />

        <Input type="text" placeholder="email" />

        <Input type="text" placeholder="title" />

        <Input type="text" placeholder="phone number" />
      </form>
    </section>
  );
}
