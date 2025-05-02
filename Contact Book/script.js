let contactbook = [
    { id: 1, name: "Aarav Patel", phone: "9876543210", email: "aarav.patel@example.com", address: "Ahmedabad, Gujarat",birthday : "2000-01-01",image : "https://images.unsplash.com/photo-1710410798243-708f6cee5f51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95cyUyMG1vZGVsfGVufDB8fDB8fHww" },
    { id: 2, name: "Sneha Sharma", phone: "8765432109", email: "sneha.sharma@example.com", address: "Delhi",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Rohan Mehta", phone: "7654321098", email: "rohan.mehta@example.com", address: "Mumbai, Maharashtra",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1652278859457-837e5884de31?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Priya Iyer", phone: "6543210987", email: "priya.iyer@example.com", address: "Chennai, Tamil Nadu",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1711128639071-001871ea08fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGdpcmxzJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" },
    { id: 5, name: "Kabir Khan", phone: "5432109876", email: "kabir.khan@example.com", address: "Lucknow, Uttar Pradesh",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1617301433432-6eea8b87350d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaWxkcmVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" },
    { id: 6, name: "Ananya Das", phone: "4321098765", email: "ananya.das@example.com", address: "Kolkata, West Bengal",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWxkcmVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" },
    { id: 7, name: "Vikram Singh", phone: "3210987654", email: "vikram.singh@example.com", address: "Jaipur, Rajasthan",birthday : "2001-01-01",image : "https://plus.unsplash.com/premium_photo-1707816508611-f4153ce582b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "Meera Nair", phone: "2109876543", email: "meera.nair@example.com", address: "Kochi, Kerala",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, name: "Arjun Reddy", phone: "1987654321", email: "arjun.reddy@example.com", address: "Hyderabad, Telangana",birthday : "2001-01-01", image : "https://images.unsplash.com/photo-1652278858177-6c3cf833071e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXMlMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D"},
    { id: 10, name: "Neha Jain", phone: "9876123450", email: "neha.jain@example.com", address: "Bhopal, Madhya Pradesh",birthday : "2001-01-01",image : "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdpcmxzJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" },
    { id: 11, name: "Yash Gupta", phone: "8765012349", email: "yash.gupta@example.com", address: "Patna, Bihar",birthday : "2001-01-01",image : "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?t=st=1746164954~exp=1746168554~hmac=69c44ff3987d38ac81fb2827701ccca217415d073eb9f683e3bdc407273e25fa&w=740" },
    { id: 12, name: "Divya Kapoor", phone: "7654901238", email: "divya.kapoor@example.com", address: "Chandigarh",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1599829606666-5ac43d5ff60d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 13, name: "Rajesh Verma", phone: "6543890127", email: "rajesh.verma@example.com", address: "Nagpur, Maharashtra",birthday : "2001-01-01", image : "https://img.freepik.com/premium-photo/portrait-young-man-standing-against-corrugated-iron_1048944-25606047.jpg?ga=GA1.1.1098996078.1739377632&semt=ais_hybrid&w=740" },
    { id: 14, name: "Simran Kaur", phone: "5432789016", email: "simran.kaur@example.com", address: "Amritsar, Punjab",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1638156333879-3a0f265dbb01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGdpcmxzJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" },
    { id: 15, name: "Harsh Vardhan", phone: "4321678905", email: "harsh.vardhan@example.com", address: "Noida, Uttar Pradesh",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1631040651289-703d4e435573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJveXMlNUQlMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D" },
    { id: 16, name: "Aisha Sheikh", phone: "3210567894", email: "aisha.sheikh@example.com", address: "Srinagar, J&K",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1679136340788-fc1d57461ae6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 17, name: "Nikhil Rao", phone: "2109456783", email: "nikhil.rao@example.com", address: "Pune, Maharashtra",birthday : "2001-01-01",image : "https://plus.unsplash.com/premium_photo-1664876514376-e684971ec8d3?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 18, name: "Tanya Bhatt", phone: "1988345672", email: "tanya.bhatt@example.com", address: "Dehradun, Uttarakhand",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1675135370622-67cabcd9ef9f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 19, name: "Siddharth Roy", phone: "9877234561", email: "siddharth.roy@example.com", address: "Guwahati, Assam",birthday : "2001-01-01", image : "https://images.unsplash.com/photo-1627027368008-71376d8c3382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJveXMlNUQlMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D" },
    { id: 20, name: "Ritika Sinha", phone: "8766123459", email: "ritika.sinha@example.com", address: "Ranchi, Jharkhand",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1723051963745-d10d43248655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJveXMlNUQlMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D" },
    { id: 21, name: "Karan Malhotra", phone: "7655012348", email: "karan.malhotra@example.com", address: "Surat, Gujarat",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1623881548458-04f3915b00b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJveXMlNUQlMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D" },
    { id: 22, name: "Pooja Yadav", phone: "6544901237", email: "pooja.yadav@example.com", address: "Indore, Madhya Pradesh",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1695827163796-c26a087bd728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 23, name: "Ishaan Desai", phone: "5433890126", email: "ishaan.desai@example.com", address: "Vadodara, Gujarat",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1597699639265-bb1b1fd01026?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 24, name: "Naina Joshi", phone: "4322789015", email: "naina.joshi@example.com", address: "Shimla, Himachal Pradesh",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1660078445195-1d5e8b7f31ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 25, name: "Ravi Shankar", phone: "3211678904", email: "ravi.shankar@example.com", address: "Bengaluru, Karnataka",birthday : "2001-01-01",image : "https://images.unsplash.com/photo-1652278855203-6ac4a64dce81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];
 
  let callingscreen = document.querySelector(".calling");
  let contacts = document.querySelector(".contact-list");
let contactlist = document.querySelector(".contact-list");
let callingbg = document.querySelector(".calling-bg");
let contactinfo = document.querySelector(".contactinfo");

let clutter = "<h1>Contacts</h1>";
contactbook.map((contact) => {
    clutter += ` <div class="contact">
        <div class="data">
         <div class="profile"><img src="${contact.image}"></div>
         <div class="contact-name">${contact.name}</div>
        </div>
        <div class="contact-icon"><i class="ri-phone-line"></i></div>    
      </div>
      <hr>`
})

contactlist.innerHTML = clutter;


let notch = document.querySelector(".dynamic-island");

let callbutton = document.querySelectorAll(".contact-icon");
let callingscreenname = document.querySelector(".callingscreen-name");
let calling = document.querySelector(".callingdisplay");
let onedot = document.querySelector(".onedot");
let twodot = document.querySelector(".twodot");
let threedot = document.querySelector(".threedot");

callbutton.forEach((button, index) => {
    button.addEventListener("click", (e) => {
       

        button.style.transform = "scale(0.9)";
        button.style.transition = "transform 0.1s ease";

        notch.style.width = "150px";
        notch.style.transition = "transform 20s ease";

        callingbg.style.backgroundImage = `url(${contactbook[index].image})`;
        e.stopPropagation();
        contactinfo.style.display = "none";
        callingscreen.style.display = "block";

        callingscreenname.innerHTML = contactbook[index].name;
        contacts.style.display = "none";




        console.log(`Calling ${contactbook[index].name}`);

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 200);

        setTimeout(() => {
            notch.style.width = "120px";
        }, 200);

        let dotInterval;
let dotStep = 0;

clearInterval(dotInterval);

onedot.style.visibility = "hidden";
twodot.style.visibility = "hidden";
threedot.style.visibility = "hidden";

dotInterval = setInterval(() => {
    if (dotStep === 0) {
        onedot.style.visibility = "visible";
        twodot.style.visibility = "hidden";
        threedot.style.visibility = "hidden";
    } else if (dotStep === 1) {
        twodot.style.visibility = "visible";
    } else if (dotStep === 2) {
        threedot.style.visibility = "visible";
    } else if (dotStep === 3) {
        onedot.style.visibility = "hidden";
        twodot.style.visibility = "hidden";
        threedot.style.visibility = "hidden";
        dotStep = -1; 
    }

    dotStep++;
}, 1000); 


    })
})

let speaker = document.querySelector(".volume");
let video = document.querySelector(".video");
let mic = document.querySelector(".mic");
let add = document.querySelector(".add");
let endcall = document.querySelector(".endcall");

speaker.addEventListener("click", () => {
   
    if (speaker.style.backgroundColor === "white") {
        speaker.style.backgroundColor = "#dadada";
        speaker.style.color = "white";  
    } else {
        speaker.style.backgroundColor = "white";
        speaker.style.color = "black";  
    }
});

video.addEventListener("click", () => {
   
    if (video.style.backgroundColor === "white") {
        video.style.backgroundColor = "#dadada";
    } else {
        video.style.backgroundColor = "white";
    }
});

mic.addEventListener("click", () => {
   
    if (mic.style.backgroundColor === "white") {
        mic.style.backgroundColor = "#dadada";
      
    } else {
        mic.style.backgroundColor = "white";
    }
});

// Function to update the time every second
function updateTime() {
    const timeElement = document.getElementById("time");
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeElement.textContent = hours + ":" + minutes;
}
setInterval(updateTime, 1000);

updateTime();


endcall.addEventListener("click", () => {
    callingscreen.style.display = "none";
    contacts.style.display = "block";

    notch.style.width = "150px";
    notch.style.transition = "transform 20s ease";

    setTimeout(() => {
        // button.style.transform = "scale(1)";
        notch.style.width = "120px";
    }, 200);
})


let contact = document.querySelectorAll(".contact");

let ciimage = document.querySelector(".ciimage");
let cinumber = document.querySelector(".cinumber .numberinfo");
let ciaddress = document.querySelector(".addressinfo");
let cibirthday = document.querySelector(".birthdayinfo");
let ciemail = document.querySelector(".emailinfo");
let ciname = document.querySelector(".ciname");

contact.forEach((contact, index) => {
    contact.addEventListener("click", () => {
        contactlist.style.display = "none";
        contactinfo.style.display = "block";
        ciname.innerHTML = contactbook[index].name;
        ciimage.style.backgroundImage = `url(${contactbook[index].image})`;
        cinumber.innerHTML = contactbook[index].phone;
     ciaddress.innerHTML = contactbook[index].address;
        cibirthday.innerHTML = contactbook[index].birthday;
        ciemail.innerHTML = contactbook[index].email;
    });
});

let back = document.querySelector(".back");
back.addEventListener("click", () => {
    contactlist.style.display = "block";
    contactinfo.style.display = "none";
});

//calling



