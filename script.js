//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKe7tUSlMlZWsFEVXsJRmNa2sw0oDJ_tE",
  authDomain: "tt-iot-c5946.firebaseapp.com",
  databaseURL: "https://tt-iot-c5946-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tt-iot-c5946",
  storageBucket: "tt-iot-c5946.appspot.com",
  messagingSenderId: "995143899677",
  appId: "1:995143899677:web:3cac0914bde46dacb544f4",
  measurementId: "G-GW0FQN9G2K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox1 = document.getElementById("tv-switch");
    var checkbox2 = document.getElementById("light-switch");
    var checkbox3 = document.getElementById("fan-switch");

    var checkbox4 = document.getElementById("oven-switch");
    var checkbox5 = document.getElementById("light2-switch");
    var checkbox6 = document.getElementById("fan2-switch");

    var checkbox7 = document.getElementById("air2-switch");
    var checkbox8 = document.getElementById("light3-switch");
    var checkbox9 = document.getElementById("fan3-switch");
  
    checkbox1.addEventListener('change', function () {
      if (checkbox1.checked) {
        // do this
        document.getElementById("tv-img").src = "./img/icons8-tv-on-100.png"
        document.getElementById("tv-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/living-room/Control").update({
          "TV": "ON"
        })
        
      } else {
        // do that
        document.getElementById("tv-img").src = "./img/icons8-tv-off-100.png"
        document.getElementById("tv-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/living-room/Control").update({
          "TV": "OFF"
        })
      }
    });

    checkbox2.addEventListener('change', function () {
      if (checkbox2.checked) {
        // do this
        document.getElementById("light-img").src = "./img/icons8-light-on-80.png"
        document.getElementById("light-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/living-room/Control").update({
          "LIGHT": "ON"
        })
        
      } else {
        // do that
        document.getElementById("light-img").src = "./img/icons8-light-off-80.png"
        document.getElementById("light-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/living-room/Control").update({
          "LIGHT": "OFF"
        })
      }
    });

    checkbox3.addEventListener('change', function () {
      if (checkbox3.checked) {
        // do this
        document.getElementById("fan-img").src = "./img/icons8-fan-auto-96.png"
        document.getElementById("fan-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/living-room/Control").update({
          "FAN": "ON"
        })
        
      } else {
        // do that
        document.getElementById("fan-img").src = "./img/icons8-fan-off-96.png"
        document.getElementById("fan-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/living-room/Control").update({
          "FAN": "OFF"
        })
      }
    });

    checkbox4.addEventListener('change', function () {
      if (checkbox4.checked) {
        // do this
        document.getElementById("oven-img").src = "./img/stove_on.png"
        document.getElementById("oven-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/kitchen/Control").update({
          "FRIGDE": "ON"
        })
        
      } else {
        // do that
        document.getElementById("oven-img").src = "./img/stove_off.png"
        document.getElementById("oven-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/kitchen/Control").update({
          "FRIGDE": "OFF"
        })
      }
    });

    checkbox5.addEventListener('change', function () {
      if (checkbox5.checked) {
        // do this
        document.getElementById("light2-img").src = "./img/icons8-light-on-80.png"
        document.getElementById("light2-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/kitchen/Control").update({
          "LIGHT": "ON"
        })
        
      } else {
        // do that
        document.getElementById("light2-img").src = "./img/icons8-light-off-80.png"
        document.getElementById("light2-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/kitchen/Control").update({
          "LIGHT": "OFF"
        })
      }
    });

    checkbox6.addEventListener('change', function () {
      if (checkbox6.checked) {
        // do this
        document.getElementById("fan2-img").src = "./img/icons8-fan-auto-96.png"
        document.getElementById("fan2-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/kitchen/Control").update({
          "FAN": "ON"
        })
        
      } else {
        // do that
        document.getElementById("fan2-img").src = "./img/icons8-fan-off-96.png"
        document.getElementById("fan2-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/kitchen/Control").update({
          "FAN": "OFF"
        })
      }
    });

    checkbox7.addEventListener('change', function () {
      if (checkbox7.checked) {
        // do this
        document.getElementById("air2-img").src = "./img/air-conditioner.png"
        document.getElementById("air2-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/bedroom/Control").update({
          "CONDITIONER": "ON"
        })
        
      } else {
        // do that
        document.getElementById("air2-img").src = "./img/air-conditioner-off.png"
        document.getElementById("air2-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/bedroom/Control").update({
          "CONDITIONER": "OFF"
        })
      }
    });

    checkbox8.addEventListener('change', function () {
      if (checkbox8.checked) {
        // do this
        document.getElementById("light3-img").src = "./img/icons8-light-on-80.png"
        document.getElementById("light3-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/bedroom/Control").update({
          "LIGHT": "ON"
        })
        
      } else {
        // do that
        document.getElementById("light3-img").src = "./img/icons8-light-off-80.png"
        document.getElementById("light3-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/bedroom/Control").update({
          "LIGHT": "OFF"
        })
      }
    });

    checkbox9.addEventListener('change', function () {
      if (checkbox9.checked) {
        // do this
        document.getElementById("fan3-img").src = "./img/icons8-fan-auto-96.png"
        document.getElementById("fan3-state").innerHTML = "ON";
        firebase.database().ref("/TT_IoT/bedroom/Control").update({
          "FAN": "ON"
        })
        
      } else {
        // do that
        document.getElementById("fan3-img").src = "./img/icons8-fan-off-96.png"
        document.getElementById("fan3-state").innerHTML = "OFF";
        firebase.database().ref("/TT_IoT/bedroom/Control").update({
          "FAN": "OFF"
        })
      }
    });
  });

// Living room sensor
firebase.database().ref("/TT_IoT/living-room/Sensor/temp").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo1").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/living-room/Sensor/humid").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("doam1").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/living-room/Sensor/gas").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("khigas1").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/living-room/Sensor/light").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("anhsang1").innerHTML = nd;
  console.log(value);
});

// Kitchen room sensor
firebase.database().ref("/TT_IoT/kitchen/Sensor/temp").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo2").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/kitchen/Sensor/humid").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("doam2").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/kitchen/Sensor/gas").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("khigas2").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/kitchen/Sensor/light").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("anhsang2").innerHTML = nd;
  console.log(value);
});

// bedroom room sensor
firebase.database().ref("/TT_IoT/bedroom/Sensor/temp").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo3").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/bedroom/Sensor/humid").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("doam3").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/bedroom/Sensor/gas").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("khigas3").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/bedroom/Sensor/light").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("anhsang3").innerHTML = nd;
  console.log(value);
});

// Living-room control
firebase.database().ref("/TT_IoT/living-room/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var tv_status = snapshot.val()
    if (tv_status["TV"] == "ON"){
      document.getElementById("tv-img").src = "./img/icons8-tv-on-100.png"
      document.getElementById("tv-switch").checked = true;
      document.getElementById("tv-state").innerHTML = "ON";
    }
    else{
      document.getElementById("tv-img").src = "./img/icons8-tv-off-100.png"
      document.getElementById("tv-switch").checked = false;
      document.getElementById("tv-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})

firebase.database().ref("/TT_IoT/living-room/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var light_status = snapshot.val()
    if (light_status["LIGHT"] == "ON"){
      document.getElementById("light-img").src = "./img/icons8-light-on-80.png"
      document.getElementById("light-state").innerHTML = "ON"
      document.getElementById("light-switch").checked = true;
    }
    else{
      document.getElementById("light-img").src = "./img/icons8-light-off-80.png"
      document.getElementById("light-state").innerHTML = "OFF"
      document.getElementById("light-switch").checked = false;
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/TT_IoT/living-room/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var fan_status = snapshot.val()
    if (fan_status["FAN"] == "ON"){
      document.getElementById("fan-img").src = "./img/icons8-fan-auto-96.png"
      document.getElementById("fan-switch").checked = true;
      document.getElementById("fan-state").innerHTML = "ON";
    }
    else{
      document.getElementById("fan-img").src = "./img/icons8-fan-off-96.png"
      document.getElementById("fan-switch").checked = false;
      document.getElementById("fan-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})

// kitchen control
firebase.database().ref("/TT_IoT/kitchen/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var tv_status = snapshot.val()
    if (tv_status["FRIGDE"] == "ON"){
      document.getElementById("oven-img").src = "./img/stove_on.png"
      document.getElementById("oven-switch").checked = true;
      document.getElementById("oven-state").innerHTML = "ON";
    }
    else{
      document.getElementById("oven-img").src = "./img/stove_off.png"
      document.getElementById("oven-switch").checked = false;
      document.getElementById("oven-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})

firebase.database().ref("/TT_IoT/kitchen/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var light_status = snapshot.val()
    if (light_status["LIGHT"] == "ON"){
      document.getElementById("light2-img").src = "./img/icons8-light-on-80.png"
      document.getElementById("light2-state").innerHTML = "ON"
      document.getElementById("light2-switch").checked = true;
    }
    else{
      document.getElementById("light2-img").src = "./img/icons8-light-off-80.png"
      document.getElementById("light2-state").innerHTML = "OFF"
      document.getElementById("light2-switch").checked = false;
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/TT_IoT/kitchen/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var fan_status = snapshot.val()
    if (fan_status["FAN"] == "ON"){
      document.getElementById("fan2-img").src = "./img/icons8-fan-auto-96.png"
      document.getElementById("fan2-switch").checked = true;
      document.getElementById("fan2-state").innerHTML = "ON";
    }
    else{
      document.getElementById("fan2-img").src = "./img/icons8-fan-off-96.png"
      document.getElementById("fan2-switch").checked = false;
      document.getElementById("fan2-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})

// bedroom control
firebase.database().ref("/TT_IoT/bedroom/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var tv_status = snapshot.val()
    if (tv_status["CONDITIONER"] == "ON"){
      document.getElementById("air2-img").src = "./img/air-conditioner.png"
      document.getElementById("air2-switch").checked = true;
      document.getElementById("air2-state").innerHTML = "ON";
    }
    else{
      document.getElementById("air2-img").src = "./img/air-conditioner-off.png"
      document.getElementById("air2-switch").checked = false;
      document.getElementById("air2-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})

firebase.database().ref("/TT_IoT/bedroom/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var light_status = snapshot.val()
    if (light_status["LIGHT"] == "ON"){
      document.getElementById("light3-img").src = "./img/icons8-light-on-80.png"
      document.getElementById("light3-state").innerHTML = "ON"
      document.getElementById("light3-switch").checked = true;
    }
    else{
      document.getElementById("light3-img").src = "./img/icons8-light-off-80.png"
      document.getElementById("light3-state").innerHTML = "OFF"
      document.getElementById("light3-switch").checked = false;
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/TT_IoT/bedroom/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var fan_status = snapshot.val()
    if (fan_status["FAN"] == "ON"){
      document.getElementById("fan3-img").src = "./img/icons8-fan-auto-96.png"
      document.getElementById("fan3-switch").checked = true;
      document.getElementById("fan3-state").innerHTML = "ON";
    }
    else{
      document.getElementById("fan3-img").src = "./img/icons8-fan-off-96.png"
      document.getElementById("fan3-switch").checked = false;
      document.getElementById("fan3-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})

function switchPage(pageName) {
  var i, sections;
  sections = document.getElementsByTagName("section");
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  var targetSection = document.getElementById(pageName);
  targetSection.style.display = "flex";
}

var elements = document.querySelectorAll(".menu-button");

function handleElementClick(event) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("hover");
  }
  event.currentTarget.classList.add("hover");
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", handleElementClick);
}
