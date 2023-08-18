import React from "react";
import NationalPackages from "./national-packages/NationalPackages";
import InternationalPackages from "./international-packages/InternationalPackages";

export default function Offers() {
  return (
    <div>
      <NationalPackages />
      <InternationalPackages />
    </div>
  );
}
