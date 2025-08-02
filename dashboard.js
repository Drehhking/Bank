let username = document.getElementById("username");
let amount = document.getElementById("amount");
let accountNumber = document.getElementById("accountNumber");
let billi = document.getElementById("bill");
let container = document.getElementById("container");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let container5 = document.getElementById("container5");
let container6 = document.getElementById("container6");
let contactus = document.getElementById("contactus");
let buy_airtime = document.getElementById("buy_airtime");
let buy_airtim1 = document.getElementById("buy_airtim1");
let mobile_number = document.getElementById("mobile_number");
let mobile_num = document.getElementById("mobile_num");
let network = document.getElementById("network");
let amount1 = document.getElementById("amount1");
let airt_amt = document.getElementById("airt_amt");
let airt_amt2 = document.getElementById("airt_amt2");
let airt_amt3 = document.getElementById("airt_amt3");
let airt_amt1 = document.getElementById("airt_amt1");
let modal = document.getElementById("modal");
let modal1 = document.getElementById("modal1");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
let network2 = document.getElementById("network2");
let data1 = document.getElementById("data1");
let mobilenum = document.getElementById("mobilenum");
let inp11 = document.getElementById("inp11");
let inp22 = document.getElementById("inp22");
let inp33 = document.getElementById("inp33");
let inp44 = document.getElementById("inp44");
let transaction_history = document.getElementById("transaction_history");
let transferUser = document.getElementById("transferUser");
let small_transfer = document.getElementById("small_transfer");
let inside_transfer = document.getElementById("inside_transfer");
let card_page = document.getElementById("card_page");
let cards = document.getElementById("cards");
let move = document.getElementById("move");
// let cardPage = document.getElementById("cardPage");
let cardContent = document.getElementById("cardContent");
let cardMid = document.getElementById("cardMid");
let jjb = document.getElementById("jjb");
let sendTo = document.getElementById("sendTo");
let sendToo = document.getElementById("sendToo");
let tt = document.getElementById("tt");
let nameDisplay = document.getElementById("fty");
let next_transfer = document.getElementById("next_transfer");
let divInput = document.getElementById("divInput");
let divInput1 = document.getElementById("divInput1");
let okay_div = document.getElementById("okay_div");
let modal11 = document.getElementById("modal11");
let inp111 = document.getElementById("inp111");
let inp222 = document.getElementById("inp222");
let inp333 = document.getElementById("inp333");
let inp444 = document.getElementById("inp444");
let hid = document.getElementById("hid");
let hid1 = document.getElementById("hid1");
let trans_amt1 = document.getElementById("trans_amt1");
let trans_amt2 = document.getElementById("trans_amt2");
let tbody = document.getElementById("tbody");
let cardNumber = document.getElementById("cardNumber")
let cardName = document.getElementById("cardName")
let transferUserA = document.getElementById("transferUserA")
let next_transferA = document.getElementById("next_transferA")
let divInputA = document.getElementById("divInputA")
let divInput12 = document.getElementById("divInput12")
let vuA = document.getElementById("vuA")
let profilePage = document.getElementById("profilePage")
let hidA = document.getElementById("hidA")
let Id1 = document.getElementById("Id1")
let Id2 = document.getElementById("Id2")
let Id3 = document.getElementById("Id3")
let Id4 = document.getElementById("Id4")
let Id5 = document.getElementById("Id5")
let modal_profile = document.getElementById("modal_profile")
let bvnOk = document.getElementById("bvnOk")
let bvnInput1 = document.getElementById("bvnInput1")
let bvnInput11 = document.getElementById("bvnInput11")
let bvnWord = document.getElementById("bvnWord")
let modal_profile1 = document.getElementById("modal_profile1")
let modal_profile11 = document.getElementById("modal_profile11")
let image = document.getElementById("image")
let imageforprofile = document.getElementById("imageforprofile")
let toanothername;
let sendmoneyuser;
let imageUrl;

function bvn() {
  modal_profile.style.display="block"
}

function nickname () {
  modal_profile1.style.display = "block"
}

function canCeL1 () {
  modal_profile1.style.display = "none"
  modal_profile11.style.display = "none"
}

function updatePic () {
  modal_profile11.style.display = 'block'
}

function changeNickname() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let bvnUser = data.find( d => d.id == loginInfo[0].userid)
    if (bvnUser) {
      fetch(`http://localhost:2345/signUp/${bvnUser.id}` , {
        headers : {
          "content-type" : "application/json"
      },
      method : "PATCH",
      body : JSON.stringify({
        Nickname : bvnInput11.value
      })
      })
      .then((res)=> res.json())
      .then((air) => {
        updatinginfo()
        alert("Change Successful")
        modal_profile1.style.display = "none"
        bvnInput11.innerHTML = ""
      })
    }
  })
 }

 function changeBvn() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let bvnUser = data.find( d => d.id == loginInfo[0].userid)
    if (bvnUser) {
      fetch(`http://localhost:2345/signUp/${bvnUser.id}` , {
        headers : {
          "content-type" : "application/json"
      },
      method : "PATCH",
      body : JSON.stringify({
        Bvn : bvnInput1.value
      })
      })
      .then((res)=> res.json())
      .then((air) => {
        updatinginfo()
        alert("Change Successful")
        modal_profile.style.display = "none"
        bvnInput1.display = ""
      })
    }
  })
 }
 function canCeL() {
  modal_profile.style.display= "none"
 }
function cardInfo(){
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find( d => d.id == loginInfo[0].userid)
    if (user) {
      let cardDetails = {
        cardid : loginInfo[0].userid,
        cardName : user.Firstname + " " + user.Lastname,
        cardNumber : user.Account_Number
      }
      fetch("http://localhost:2345/card",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(cardDetails)
      }).then((res)=>res.json()).then((data)=>{
        location.reload()
      })
    }
  })
}

function dontShow() {
  Promise.all([
    fetch("http://localhost:2345/card").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find( d => d.cardid == loginInfo[0].userid )
    if (user) {
      console.log("Hello");
      card_page.style.display = "none"
      jjb.style.display = "block"
    }else{
      console.log("hi");
    jjb.style.display = "none"
    card_page.style.display = "block"
    }
  })
}

function changeImg() {
  let filereader = new FileReader()
  filereader.addEventListener("load", (ev) =>{
    let result = ev.target.result
    imageUrl = result
  })
  if (imageforprofile) {
    filereader.readAsDataURL(imageforprofile.files[0])
  }
}

function changeProfilepic() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let picture = data.find((user) => user.id == loginInfo[0].userid);
    if (picture) {
      fetch(`http://localhost:2345/signUp/${picture.id}`, {
        method : "PATCH",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify({
          Profile : imageUrl
        })
      }).then((res) => res.json()).then((info) => {
        location.reload()
      })
    }
  })
}


function confirmDeposit () {
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  // container.style.height = "700px";
  jjb.style.display = "none";
  next_transfer.style.display = "none"
  transferUserA.style.display = "none"
  profilePage.style.display = "none"
  next_transferA.style.display = "block"
}

// card_page.style.display = "none"
function deposit() {
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  // container.style.height = "700px";
  jjb.style.display = "none";
  next_transfer.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
  transferUserA.style.display = "block"
}
function bill() {
  billi.style.display = "block";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  jjb.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
}

function home() {
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "block";
  container4.style.display = "block";
  container5.style.display = "block";
  container6.style.display = "block";
  contactus.style.display = "block";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  card_page.style.display = "none";
  jjb.style.display = "none";
  sendToo.style.display = "none";
  sendTo.style.display = "none";
  next_transfer.style.display = "none";
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
}
function acc () {
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  card_page.style.display = "none";
  jjb.style.display = "none";
  sendToo.style.display = "none";
  sendTo.style.display = "none";
  next_transfer.style.display = "none";
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "block"
}
function airt() {
  buy_airtime.style.display = "block";
  billi.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transferUser.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  jjb.style.display = "none";
  transferUserA.style.display = "none"
  profilePage.style.display = "none"
  next_transferA.style.display = "none"
}
function dat() {
  buy_airtime.style.display = "none";
  buy_airtim1.style.display = "block";
  billi.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  jjb.style.display = "none";
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
}
function canCel() {
  modal.style.display = "none";
}
function canCell() {
  modal1.style.display = "none";
}
function canCelll() {
  modal11.style.display = "none";
}

function findUser() {
  fetch("http://localhost:2345/signUp")
    .then((res) => res.json())
    .then((data) => {
      let isuserthere = data.find((user) => user.Account_Number == tt.value);
      if (isuserthere) {
        nameDisplay.innerHTML =
          isuserthere.Firstname + " " + isuserthere.Lastname;
        nameDisplay.style.color = "green";
      } else if (tt.value == "") {
        nameDisplay.innerHTML = "";
      } else {
        nameDisplay.innerHTML = "Invalid";
        nameDisplay.style.color = "red";
      }
    });
}
function buyAirtime() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    // let loggedUser = localStorage.getItem("loggedUser");
    let user = data.find((info) => info.id === loginInfo[0].userid);

    // let user = data.find((d) => d.id === loggedUser);

    if (user) {
      if (
        network.value == "" ||
        amount1.value == "" ||
        mobile_number.value == ""
      ) {
        alert("Please select a network provider ");
      } else if (amount1.value < 0 || amount1.value > user.Amount) {
        alert("Insufficient Balance");
      } else {
        airt_amt.innerHTML = amount1.value;
        airt_amt1.innerHTML = amount1.value;
        modal.style.display = "block";
      }
    }
  });
}
function fundTransfer() {
  billi.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "block";
  // container.style.height = "593px";
  card_page.style.display = "none";
  jjb.style.display = "none";
  next_transfer.style.display = "none"
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
  buy_airtime.style.display = "none"
  buy_airtim1.style.display = "none"
}
function cardo() {
  billi.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  // container.style.height = "620px";
  // card_page.style.display = "block";
  // jjb.style.display = "none";
  next_transfer.style.display = "none"
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
  buy_airtim1.style.display = "none"
  buy_airtime.style.display = "none"
  dontShow()
}
function bstn() {
  alert("you've successfully purchased a pocket card for FREE!!");
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  // container.style.height = "700px";
  next_transfer.style.display = "none"
  next_transferA.style.display = "none"
  transferUserA.style.display = "none"
  profilePage.style.display = "none"
  updatinginfo()
  cardInfo()
}
function typeit() {
  if (inp1.value.length == 1) {
    inp2.focus();
  }
  if (inp2.value.length == 1) {
    inp3.focus();
  }
  if (inp3.value.length == 1) {
    inp4.focus();
  }
}
function pocket() {
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "none";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  // container.style.height = "600px";
  jjb.style.display = "none";
  sendTo.style.display = "block";
  sendToo.style.display = "block";
  transferUserA.style.display = "none"
  profilePage.style.display = "none"
  next_transferA.style.display = "none"
}
function hstry() {
  billi.style.display = "none";
  buy_airtim1.style.display = "none";
  buy_airtime.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  container6.style.display = "none";
  contactus.style.display = "none";
  transaction_history.style.display = "block";
  transferUser.style.display = "none";
  card_page.style.display = "none";
  // container.style.height = "610px";
  jjb.style.display = "none";
  sendTo.style.display = "none";
  next_transfer.style.display = 'none'
  transferUserA.style.display = "none"
  next_transferA.style.display = "none"
  profilePage.style.display = "none"
}
function proceedNow() {
  if (tt.value == "") {
    alert("please fill in an account number");
  } else {
    billi.style.display = "none";
    buy_airtim1.style.display = "none";
    buy_airtime.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
    container6.style.display = "none";
    contactus.style.display = "none";
    transaction_history.style.display = "none";
    transferUser.style.display = "none";
    card_page.style.display = "none";
    // container.style.height = "610px";
    jjb.style.display = "none";
    sendTo.style.display = "none";
    next_transfer.style.display = "block";
    profilePage.style.display = "none"
  }
}
//
function typeitt() {
  if (inp11.value.length == 1) {
    inp22.focus();
  }
  if (inp22.value.length == 1) {
    inp33.focus();
  }
  if (inp33.value.length == 1) {
    inp44.focus();
  }
}
function typeitt1() {
  if (inp111.value.length == 1) {
    inp222.focus();
  }
  if (inp222.value.length == 1) {
    inp333.focus();
  }
  if (inp333.value.length == 1) {
    inp444.focus();
  }
}
function con() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {

    // let loggedUser = localStorage.getItem("loggedUser");

    let user = data.find((d) => d.id === loginInfo[0].userid);

    if (hid.value == "" || hid1.value == "") {
      alert("input cant be empty");
    }else if (hid.value < 0 || hid.value > user.Amount) {
      alert("insufficient balance")
    }
     else {
      modal11.style.display = "block";
      trans_amt1.innerHTML = hid.value;
      trans_amt2.innerHTML = hid.value;
    }
  });
}

function transConfirm() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let accountTo = data.find(
      (d) =>
        d.Account_pin ==
          `${inp111.value}${inp222.value}${inp333.value}${inp444.value}` &&
        d.id == loginInfo[0].userid
    );
    let amountToAdd = Number(accountTo.Amount) - Number(hid.value);
    console.log(accountTo);
    if (accountTo) {
      fetch(`http://localhost:2345/signUp/${accountTo.id}`, {
        headers: {
          "content-type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          Amount: amountToAdd,
        }),
      })
        .then((res) => res.json())
        .then((info) => {
          toAnotherUser();
          updatinginfo();
          transactionHistory();
          receiveMoney()
        });
    }
  });
}

function postTransaction() {
  Promise.all([
    fetch("http://localhost:2345/login").then((res) => res.json()),
    fetch("http://localhost:2345/transaction_history").then((res) =>
      res.json()
    ),
  ]).then(([loginInfo, transactionhistory]) => {
    // let user2 = transactionhistory.find((d) => d.TransactionId == loginInfo[0].userid);
    // console.log(user2);
    for (let index = 0; index < transactionhistory.length; index++) {
      // const element = array[index];
      if (transactionhistory[index].TransactionId == loginInfo[0].userid) {
        tbody.innerHTML += `
        <tr>
          <td style=" border: 2px solid black; text-align: center; padding: 9px;">${transactionhistory[index].Name}</td>
          <td style=" border: 2px solid black; text-align: center;  padding: 9px;">${transactionhistory[index].TransactionType}</td>
          <td style=" border: 2px solid black; text-align: center;  padding: 9px;">${transactionhistory[index].Date}</td>
          <td style=" border: 2px solid black; text-align: center;  padding: 9px;">${transactionhistory[index].Time}</td>
          <td style=" border: 2px solid black; text-align: center;  padding: 9px;">${transactionhistory[index].Amount}</td>
        </tr>
    `
      }
      
    }
    updatinginfo();
  });
}
postTransaction()
function toAnotherUser() {
  fetch("http://localhost:2345/signUp")
    .then((res) => res.json())
    .then((signUp) => {
      let finduser = signUp.find((d) => d.Account_Number == tt.value);
      toanothername = finduser.Firstname
      let newAmount = Number(finduser.Amount) + Number(hid.value);
      if (finduser) {
        fetch(`http://localhost:2345/signUp/${finduser.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Amount: newAmount,
          }),
        });
        alert(
          "Your money is on the way, the recepient will be credited within 5mins"
        );
        modal11.style.display = "none";
      }
      updatinginfo();
    });
}
function buyData() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    // let loggedUser = localStorage.getItem("loggedUser");
    let user = data.find((info) => info.id === loginInfo[0].userid);

    // let user = data.find((d) => d.id === loggedUser);

    if (user) {
      if (network2.value == "" || data1.value == "" || mobile_num.value == "") {
        alert("Please select a network provider ");
      } else if (data1.value < 0 || data1.value > user.Amount) {
        alert("Insufficient Balance");
      } else {
        airt_amt2.innerHTML = data1.value;
        airt_amt3.innerHTML = data1.value;
        modal1.style.display = "block";
      }
    }
  });
}
function transactionHistory() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find((d) => d.id == loginInfo[0].userid);
    sendmoneyuser = user.Firstname
    if (user) {
      transactionPart = {
        Name: toanothername,
        TransactionType: "Money Sent" ,
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString(),
        Amount: `-${hid.value}`,
        TransactionId: user.id,
      };
      fetch("http://localhost:2345/transaction_history", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(transactionPart),
      });
    }
  });
}

function transactionHistoryB() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find((d) => d.id == loginInfo[0].userid);
    if (user) {
      transactionPart2 = {
        Name: "You",
        TransactionType: "Airtime",
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString(),
        Amount: `-${amount1.value}`,
        TransactionId: user.id,
      };
      fetch("http://localhost:2345/transaction_history", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(transactionPart2),
      });
    }
  });
}
function transactionHistoryC() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find((d) => d.id == loginInfo[0].userid);
    if (user) {
      transactionPart3 = {
        Name: "You",
        TransactionType: "Data",
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString(),
        Amount: `-${data1.value}`,
        TransactionId: user.id,
      };
      fetch("http://localhost:2345/transaction_history", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(transactionPart3),
      });
    }
  });
}

function transactionHistoryD() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find((d) => d.id == loginInfo[0].userid);
    if (user) {
      transactionPart4 = {
        Name: user.Firstname,
        TransactionType: "Deposit",
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString(),
        Amount: `+${hidA.value}`,
        TransactionId: user.id,
      };
      fetch("http://localhost:2345/transaction_history", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(transactionPart4),
      });
    }
  });
}

function receiveMoney() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let user = data.find((d) => d.Account_Number == tt.value);
    let tosenduser = user.id
    if (user) {
      transactionPart = {
        Name: sendmoneyuser,
        TransactionType: "Money Received",
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString(),
        Amount: `+${hid.value}`,
        TransactionId: tosenduser,
      };
      fetch("http://localhost:2345/transaction_history", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(transactionPart),
      });
    }
  })
}

function signOut() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let userinfo = data.find((info) => info.id === loginInfo[0].userid);
    console.log(userinfo);
    if (userinfo) {
      fetch(`http://localhost:2345/login/${loginInfo[0].id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((logOut) => {
          alert("Successful");
          window.location.href = "./login2.html";
        });
    }
  });
}
function confam() {
  fetch("http://localhost:2345/signUp")
    .then((res) => res.json())
    .then((data) => {
      let accountToBeDebited = data.find(
        (d) =>
          d.Account_pin ==
          `${inp1.value}${inp2.value}${inp3.value}${inp4.value}`
      );
      console.log(accountToBeDebited);

      if (accountToBeDebited) {
        let newAmount =
          Number(accountToBeDebited.Amount) - Number(amount1.value);
        fetch(`http://localhost:2345/signUp/${accountToBeDebited.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Amount: newAmount,
          }),
        })
          .then((res) => res.json())
          .then((air) => {
            updatinginfo();
            transactionHistoryB();
            alert(
              `you have successfully recharge ${network.value} of ${amount1.value}`
            );
            modal.style.display = "none";
          });
      } else {
        alert("incorrect pin");
      }
    });
}
function confamm() {
  fetch("http://localhost:2345/signUp")
    .then((res) => res.json())
    .then((data) => {
      let accountToBeDebited = data.find(
        (d) =>
          d.Account_pin ==
          `${inp11.value}${inp22.value}${inp33.value}${inp44.value}`
      );

      if (accountToBeDebited) {
        let newAmount = Number(accountToBeDebited.Amount) - Number(data1.value);
        fetch(`http://localhost:2345/signUp/${accountToBeDebited.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Amount: newAmount,
          }),
        })
          .then((res) => res.json())
          .then((air) => {
            updatinginfo();
            transactionHistoryC();
            alert(
              `you have successfully bought ${network2.value} data of ${data1.value}`
            );
            modal1.style.display = "none";
          });
      } else {
        alert("incorrect pin");
        // modal=''
      }
    });
}

function updatinginfo() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then(([data, loginInfo]) => {
    let userinfo = data.find((info) => info.id == loginInfo[0].userid);
    if (userinfo) {
      username.innerHTML = userinfo.Firstname;
      amount.innerHTML = `NGN${userinfo.Amount}`;
      accountNumber.innerHTML = userinfo.Account_Number;
      cardName.innerHTML = userinfo.Firstname + " " + userinfo.Lastname
      cardNumber.innerHTML = userinfo.Account_Number
      Id1.innerHTML = userinfo.Firstname
      Id2.innerHTML = userinfo.Lastname
      Id3.innerHTML = userinfo.Email
      Id4.innerHTML = userinfo.Gender
      Id5.innerHTML = userinfo.Dob
      bvnWord.innerHTML = userinfo.Bvn
      bvnOk.innerHTML = userinfo.Nickname
      image.src = userinfo.Profile
      // transaction_history.innerHTML = userinfo.transaction_history
    }
    // changeProfilepic()
    // console.log(userinfo);
    // console.log(loginInfo);
  })
}
updatinginfo();

function via () {
  alert("Call our pocket agent line 02014148482")
}
function via1 () {
  alert("transferring to other banks is currently not availale")
}

function makePayment() {
  Promise.all([
    fetch("http://localhost:2345/signUp").then((res) => res.json()),
    fetch("http://localhost:2345/login").then((res) => res.json()),
  ]).then (([data, loginInfo])=>{
    let userdata = data.find ( (d) => d.id == loginInfo[0].userid)
    let new_amount = Number(userdata.Amount) + Number(hidA.value)
    console.log(userdata);
    if (userdata) {
        fetch(`http://localhost:2345/signUp/${userdata.id}`,{
        method : "PATCH",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify({
          Amount : new_amount
        })
      }
      ).then((res) => res.json())
      .then((air) => {
        transactionHistoryD()
      })
    }
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-3938a81fcaa711634c73f14797c7da01-X",
      tx_ref: "pocket-48981487343MDI0NzMx",
      amount: hidA.value,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: userdata.Email,
        phone_number: "07048998083",
        name: userdata.Firstname + " " + userdata.Lastname,
      },
      customizations: {
        title: "The Pocket bank",
        description: "Payment for an awesome cruise",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
      configurations: {
        session_duration: 10, //Session timeout in minutes (maxValue: 1440 minutes)      
        max_retry_attempt: 5, //Max retry (int)
      },
    });

  })

}