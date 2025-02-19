//
function useBudget() {
  const currentBudget = 1000;

  function saveBudget() {
    return "save budget";
  }

  return [currentBudget, saveBudget];
}

const [budget, setBudget] = useBudget();

console.log({ budget, setBudget });

function usePengeluaran() {
  const totalPengeluaran = 500;

  function getMyPengeluaran() {
    return "ini pengeluaranku";
  }

  return { totalPengeluaran, getMyPengeluaran };
}

const { getMyPengeluaran: ambilPengeluaran, totalPengeluaran } =
  usePengeluaran();

console.log({ ambilPengeluaran, totalPengeluaran });

// Optional chainning
//

const data = {
  id: 1,
  name: "arsadi",
  address: {
    posCode: "231672",
    street: "Jl. Jalan",
  },
};

console.log(data.address.street);

const data2 = {
  id: 1,
  name: "ahmad",
};

console.log(data2.address?.street);

const database = {
  name: "arsadi",
  // getAddress: () => {
  //     return "ini alamat arsadi";
  // }
};

console.log(database.getAddress?.());

// async await

try {
  const response = await fetch("https://pokeapi.co/aspi/v2/pokemon/ditsto")
    .then()
    .catch((err) => {
      console.log("error : ", err);
    });
  const data = await response.json();

  if (!response.ok) {
    console.log("not oke");
  }

  console.log(data);
} catch (err) {
  console.log(err);
}

// Logical operator

let result = "";

const userName = "";
const isAdmin = 0; // nilai falsy

const displayName = userName ?? "user"; // nullish coeles (null & undefined)
const displayName2 = userName || "user"; // or


if (userName == "arsadi" || !isAdmin) {
    result = "ini hasilnya";
    
    let userAccess = 'true';
}

// console.log(userAccess)

console.log(result);
console.log(displayName);
console.log(displayName2);

let user2 = "";

user2 = 1;

console.log(user2);

let vehicles = 'mitsubishi';









vehicles = 'sports car'

console.log(vehicles)