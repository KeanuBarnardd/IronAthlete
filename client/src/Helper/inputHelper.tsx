import React from "react";

export default function inputHelper(e: React.ChangeEvent<HTMLInputElement>, data: any) {
  const tempData: any = { ...data };
  tempData[e.target.name] = e.target.value;
  return tempData;
}
