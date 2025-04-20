const cricketers = [
    {
        name: "Virat Kohli",
        role: "Batsman",
        team: "India",
        matches: 274,
        runs: 12898,
        average: 57.32,
        image: "https://i.pinimg.com/474x/49/11/11/491111dae73aa7d8cccd0560670ca392.jpg"
    },
    {
        name: "Rohit Sharma",
        role: "Batsman",
        team: "India",
        matches: 251,
        runs: 10709,
        average: 49.00,
        image: "https://c.ndtvimg.com/2024-01/5ac7uupo_rohit-sharma-afp_625x300_24_January_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
    },
    {
        name: "Jasprit Bumrah",
        role: "Bowler",
        team: "India",
        matches: 89,
        runs: 85,
        average: 10.2,
        image: "https://cricketcupworld.com/wp-content/uploads/2024/05/jasprit-bumrah-AA.webp"
    },
    {
        name: "KL Rahul",
        role: "Wicketkeeper Batsman",
        team: "India",
        matches: 72,
        runs: 2546,
        average: 45.7,
        image: "https://www.deccanchronicle.com/h-upload/2024/11/13/1862235-gbskr-ebmaaewv3.webp"
    },
    {
        name: "Hardik Pandya",
        role: "All-Rounder",
        team: "India",
        matches: 74,
        runs: 1584,
        average: 33.0,
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/hardikpandyaasiacupindvpak_1_x.jpeg?VersionId=jVB2pDmPFxwkWY3eAl9f6CCQoOx7mVhf"
    },
    {
        name: "Shubman Gill",
        role: "Batsman",
        team: "India",
        matches: 44,
        runs: 2271,
        average: 61.4,
        image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png"
    },
    {
        name: "Ravindra Jadeja",
        role: "All-Rounder",
        team: "India",
        matches: 188,
        runs: 2500,
        average: 33.3,
        image: "https://uccricket.live/wp-content/uploads/2024/11/Ravindra-Jadeja-IPL-2025-Price.webp"
    },
    {
        name: "Mohammed Shami",
        role: "Bowler",
        team: "India",
        matches: 100,
        runs: 180,
        average: 9.2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijLiH1VlUCDDr5tNAJi4Y22Uu1Lm8OEQNgA&s"
    },
    {
        name: "Kuldeep Yadav",
        role: "Bowler",
        team: "India",
        matches: 90,
        runs: 120,
        average: 10.0,
        image: "https://th-i.thgim.com/public/incoming/x67ae4/article68337535.ece/alternates/FREE_1200/GettyImages-2155145512.jpg"
    },
    {
        name: "Rishabh Pant",
        role: "Wicketkeeper Batsman",
        team: "India",
        matches: 30,
        runs: 865,
        average: 35.2,
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/19/full/1737258410-1178.jpg?im=FeatureCrop,size=(826,465)"
    },
    {
        name: "Suryakumar Yadav",
        role: "Batsman",
        team: "India",
        matches: 55,
        runs: 1675,
        average: 41.2,
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/388700/388739.6.jpg"
    },
    {
        name: "Axar Patel",
        role: "All-Rounder",
        team: "India",
        matches: 55,
        runs: 505,
        average: 24.0,
        image: "https://cricfit.com/wp-content/uploads/2022/01/No-Text-Thumbnail-36-1.png"
    },
    {
        name: "Yuzvendra Chahal",
        role: "Bowler",
        team: "India",
        matches: 72,
        runs: 50,
        average: 6.3,
        image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/yuzvendra-chahal.png"
    },
    {
        name: "Ishan Kishan",
        role: "Wicketkeeper Batsman",
        team: "India",
        matches: 27,
        runs: 933,
        average: 39.0,
        image: "https://circleofcricket.com/post_image/post_image_8c7dc1a.jpg"
    },
    {
        name: "Shreyas Iyer",
        role: "Batsman",
        team: "India",
        matches: 50,
        runs: 1750,
        average: 46.1,
        image: "https://images.news18.com/ibnlive/uploads/2024/05/shreyas-iyer-india-bcci-2024-05-dc6a51936f4f9aebdc6e52d647825f4f.jpg"
    }
];


let cardcontainer = document.querySelector(".cardcontainer");
let clutter = '';
cricketers.forEach((cricketer) => {
    clutter += `<div class="card">
    <div class="imagecontainer">
        <img src="${cricketer.image}" alt="${cricketer.name}">
    </div>
    <div class="content">
        <h1>${cricketer.name}</h1>
        <p><span>Role:</span> ${cricketer.role}</p>
        <p><span>Team:</span> ${cricketer.team}</p>
        <p><span>Matches:</span> ${cricketer.matches}</p>
        <p><span>Runs:</span> ${cricketer.runs}</p>
        <p><span>Average:</span> ${cricketer.average}</p>
    </div>
</div>`;
});

cardcontainer.innerHTML = clutter;