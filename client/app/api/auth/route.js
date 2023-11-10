import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const data = await fetch(`${process.env.API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "ahmeddd", password: "ahmeddd" }),
  });
  let x = await data.json();
  return res.status(200).json(x);
};
