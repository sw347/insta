import { Router } from "express";
import fs from "fs";

const router = Router();

/* CSV파일 읽어오기 */
const file_csv = fs.readFileSync(/* 파일경로 */);

/* CSV파일 문자열로 만들기 */
const string_csv = file_csv.toString();

/* CSV파일을 JSON파일로 만들기 */
const arrJson = csvToJson(string_csv);

/* JSON파일을 문자열로 변환 */
const string_json = JSON.stringify(arrJson);

/* CSV to JSON 변환기 */
function csvToJson(csv_string) {
  const rows = csv_string.split("\r\n");
  const Json = [];
  const header = rows[0].split(",");

  for (let i = 1; i < rows.length; i++) {
    let arr = {};
    let row = rows[i].split(",");
    for (let j = 0; j < header.length; j++) {
      arr[header[j]] = row[j];
    }
    Json.push(arr);
  }
  return Json;
}

router.get("/", (req, res) => {
  res.send(arrJson);
});

export default router;
