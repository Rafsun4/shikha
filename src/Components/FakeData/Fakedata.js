const fakeData = [

    {
        "id": "1",
        "name": "Learn Photography in 2020",
        "price": 79,
        "By": "Andrei Gomez",
        "img": ""
    },
    {
        "id": "2",
        "name": "Learn Italian Cooking",
        "price": 129.99,
        "By": "Shikara Bikul",
        "img": ""
    },
    {
        "id": "3",
        "name": "Learn To Code In Python",
        "price": 99.9,
        "By": "Abdul Malek",
        "img": ""
    },
    {
        "id": "4",
        "name": "Learn To Code In C++",
        "price": 111.89,
        "By": "Jashim Khan",
        "img": ""
    },
    {
        "id": "5",
        "name": "Learn To Sing Like Pro",
        "price": 299.89,
        "By": "Molla Khan",
        "img": ""
    },
    {
        "id": "6",
        "name": "Learn To Learn",
        "price": 9.29,
        "By": "Steve Fugal",
        "img": ""
    },
    {
        "id": "7",
        "name": "Learn Astronomy 101",
        "price": 19.39,
        "By": "Sharon Abigal",
        "img": ""
    },
    {
        "id": "8",
        "name": "Learn AstroPhysics",
        "price": 39.99,
        "By": "Amanda Sky",
        "img": ""
    },
    {
        "id": "9",
        "name": "Quantum Mechanics 101",
        "price": 9.99,
        "By": "Walter White",
        "img": ""
    },
    {
        "id": "10",
        "name": "Adobe Photoshop: Mastery",
        "price": 12.39,
        "By": "Shawn Mendes",
        "img": ""
    },
    {
        "id": "11",
        "name": "Learn Modern Arts",
        "price": 59.39,
        "By": "Mike Shinoda",
        "img": ""
    },
    {
        "id": "12",
        "name": "Mastery To Cooking",
        "price": 10.99,
        "By": "Garry Hugh",
        "img": ""
    },
    {
        "id": "13",
        "name": "Martial Art",
        "price": 5.99,
        "By": "Bruce Copy",
        "img": ""
    },
    {
        "id": "14",
        "name": "Journalism 101",
        "price": 11.99,
        "By": "Hasan Minhaz",
        "img": ""
    },
    {
        "id": "15",
        "name": "Business Strategy 101",
        "price": 259.99,
        "By": "Bill Murray",
        "img": ""
    },
    {
        "id": "16",
        "name": "Digital Marketing 101",
        "price": 9.99,
        "By": "Solaiman Babu",
        "img": ""
    },
    {
        "id": "17",
        "name": "Know Thyself",
        "price": 0,
        "By": "You",
        "img": ""
    },
    {
        "id": "18",
        "name": "Guitar Learning For Beginners",
        "price": 30,
        "By": "Oni Hasan",
        "img": ""
    }
]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;