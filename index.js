import readXlsxFile from "read-excel-file";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const readExcelFile = async (file) => {
  try {
    const data = await readXlsxFile(file);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const makeData = (data) => {
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    let d = data[i];

    arr.push({
      mode: d[0],
      folio: d[1],
      shares: d[2],
      name_1: d[3],
      name_2: d[4],
      name_3: d[5],
      add_1: d[6],
      add_2: d[7],
      add_3: d[8],
      city: d[9],
      pin: d[10],
      pan: d[11],
      bo_mail: d[12],
      fax: d[13],
      phone: d[14],
      email: d[15],
    });
  }

  return arr;
};

const firebase = (exl) => {
  const collectionRef = collection(db, "calls_data");

  exl.map(async (data) => {
    await addDoc(collectionRef, data)
      .then(() => console.log("Data pauch gya"))
      .catch((err) => console.log("Error aa gaya", err));
  });
};

const fetchData = async () => {
  let exl = [];

  const input = document.getElementById("input");

  input.addEventListener("change", async () => {
    let data = await readExcelFile(input.files[0]);

    data.shift();

    exl = makeData(data);

    firebase(exl);
  });
};

fetchData();
