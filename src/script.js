let user = {
  nama: "Lucky",
  pin: 123456,
  saldo: 5000000,
};

let newUser;

let packet = {
  seratus: "100000",
  duaratus: "200000",
  tigaratus: "300000",
  limaratus: "500000",
  satujuta: "1000000",
  satusetengah: "1500000",
  duajuta: "2000000",
};

let formPin = document.getElementById("formPin");
let pinValue = document.getElementById("pinValue");
let listPacket = document.getElementById("listPacket");
let formNominal = document.getElementById("formNominal");
let nominalValue = document.getElementById("nominalValue");

if (formPin) {
  formPin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.pin.toString() === pinValue.value.toString()) {
      window.location.href = "./packet.html";
    } else {
      alert("User Not Found!");
    }
  });
}

if (listPacket) {
  listPacket.innerHTML = `
    <div class="text-start">
        <p onclick="takeMoney(${packet.seratus})"><- 100.000</p>
        <p onclick="takeMoney(${packet.duaratus})"><- 200.000</p>
        <p onclick="takeMoney(${packet.tigaratus})"><- 300.000</p>
        <a href="./nominal.html">
            <div class="flex gap-[20px]">
            <p><-</p>
            <p>
                Nominal <br />
                Lain
            </p>
            </div>
        </a>
      </div>
      <div class="text-end">
        <p onclick="takeMoney(${packet.limaratus})">500.000 -></p>
        <p onclick="takeMoney(${packet.satujuta})">1.000.000 -></p>
        <p onclick="takeMoney(${packet.satusetengah})">1.500.000 -></p>
        <div class="flex gap-[20px]">
          <p>
            Transaksi <br />
            Lain
          </p>
          <p>-></p>
        </div>
      </div>
    `;
}

// Cara susah nominal
if (formNominal) {
  formNominal.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = nominalValue.value;
    if (value.length > 0) {
      if (user.saldo < value) {
        alert("Maaf saldo anda tidak cukup");
      } else if (value % 50000 == 0) {
        const nominalConf = confirm(
          `Anda akan mengambil nominal sebesar ${value}`
        );
        if (nominalConf) {
          newUser = {
            ...user,
            saldo: user.saldo - value,
          };
          user = newUser;
          alert(`Sisa uang anda ${user.saldo}`);
        }
      } else {
        alert("Nominal harus pecahan!");
      }
    } else {
      alert("Tidak boleh kosong");
    }
  });
}

// cara mudah nominal dan terus berkurang
// let saldo = 5000000;
// let newSaldo;

// if (formNominal) {
//   formNominal.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const value = nominalValue.value;
//     if (value.length > 0) {
//       if (saldo < value) {
//         alert("Maaf saldo anda tidak cukup");
//       } else if (value % 50000 == 0) {
//         const nominalConf = confirm(
//           `Anda akan mengambil nominal sebesar ${value}`
//         );
//         if (nominalConf) {
//           newSaldo = saldo - value;
//           saldo = newSaldo;
//           alert(`Sisa uang anda ${saldo}`);
//         }
//       } else {
//         alert("Nominal harus pecahan!");
//       }
//     } else {
//       alert("Tidak boleh kosong");
//     }
//   });
// }

// Cara susah pengambilan
const takeMoney = (value) => {
  if (user.saldo < parseInt(value)) {
    alert("Maaf Saldo Tidak Cukup!");
  } else {
    const conf = confirm(
      `Halo ${user.nama}, Anda akan menarik saldo sebesar ${value}`
    );
    if (conf) {
      newUser = { ...user, saldo: user.saldo - parseInt(value) };
      user = newUser;
      alert(`Sisa saldo anda ${user.saldo}`);
    }
  }
};

// cara mudah
// let saldo = 5000000;
// const take = (value) => {
//   if (saldo < parseInt(value)) {
//     alert("Maaf Saldo Tidak Cukup!");
//   } else {
//     const conf = confirm(`Halo, Anda akan menarik saldo sebesar ${value}`);
//     if (conf) {
//       saldo - parseInt(value);
//       alert(`Sisa saldo anda ${saldo - parseInt(value)}`);
//     }
//   }
// };

// cara uang terus berkurang
// let saldo = 5000000;
// let newSaldo;
// const take = (value) => {
//   if (saldo < parseInt(value)) {
//     alert("Maaf Saldo Tidak Cukup!");
//   } else {
//     const conf = confirm(`Halo, Anda akan menarik saldo sebesar ${value}`);
//     if (conf) {
//       newSaldo = saldo - parseInt(value);
//       saldo = newSaldo;
//       alert(`Sisa saldo anda ${saldo}`);
//     }
//   }
// };

// Jangan Lupa nama function pada onclick nya
