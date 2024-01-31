import { NextApiRequest, NextApiResponse } from "next";
import jsonGenerator from "csvtojson";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "public", "dataset.csv");
export async function GET(request: NextApiRequest) {
  try {
    let map = new Map();
    let arr = new Array();
    const data = await jsonGenerator().fromFile(filePath);
    for (let i = 0; i < data.length; i++) {
      const prev_arr = data[i].Timestamp.split(" ");
      const prev_new_array = prev_arr[0];
      const prev_str = prev_new_array.substring(3);
      const val = Number(data[i].Profit_Percentage);
      if (map.get(prev_str) === undefined) {
        map.set(prev_str, val);
      } else {
        let curr = map.get(prev_str);
        map.set(prev_str, curr + val);
      }
    }
    for (let [key, value] of map) {
      let obj = {
        Timestamp: key,
        Profit_Percentage: value,
      };
      arr.push(obj);
    }
    return NextResponse.json({
      type: "Success",
      length: arr.length,
      data: arr,
    });
  } catch (error) {
    return NextResponse.json({
      type: "Error",
      msg: "Internal server error",
    });
  }
}
