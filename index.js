import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());

const students = [
    {
        firstName: "Yitzchak",
        lastName: "Mark",
        city: "Lod",
        hobby: "reading",
        age: 33,
        phoneNumber: "0527137068",
    },
    {
        firstName: "Yedidya",
        lastName: "Friedland",
        city: "Bnei Brak",
        hobby: "learning",
        age: 30,
        phoneNumber: "0527174650",
    },
    {
        firstName: "Yaakov",
        lastName: "Shulman",
        city: "Lod",
        hobby: "creation",
        age: 30,
        phoneNumber: "0542685543",
    },
    {
        firstName: "Ariel",
        lastName: "Nisim",
        city: "Modi'in Illit",
        hobby: "sports",
        age: 25,
        phoneNumber: "0583238812",
    },
    {
        firstName: "Moishy",
        lastName: "Berger",
        city: "Lod",
        hobby: "Gaming",
        age: 27,
        phoneNumber: "0587647123",
    },
    {
        firstName: "Uri",
        lastName: "Schneider",
        city: "Bnei Brak",
        hobby: "basketball",
        age: 31,
        phoneNumber: "0583289825",
    },
    {
        firstName: "Mordechai",
        lastName: "Amiram",
        city: "E'lad",
        hobby: "play the guitar",
        age: 34,
        phoneNumber: "0555531726",
    },
    {
        firstName: "Yehuda",
        lastName: "Cywiak",
        city: "Bnei Brak",
        hobby: "listen to music and podcasts",
        age: 24,
        phoneNumber: "0527183008",
    },
    {
        firstName: "David",
        lastName: "Pechtalt",
        city: "Zikhron Ya'akov",
        hobby: "reading",
        age: 23,
        phoneNumber: "0548434158",
    },
    {
        firstName: "Shalom",
        lastName: "Kenig",
        city: "Petah Tikva",
        hobby: "singing",
        age: 25,
        phoneNumber: "0512239770",
    },
    {
        firstName: "Motti",
        lastName: "Nadel",
        city: "Bnei Brak",
        hobby: "animals",
        age: 27,
        phoneNumber: "0533105452",
    },
    {
        firstName: "Yehuda",
        lastName: "Edelstein",
        city: "Jerusalem",
        hobby: "games",
        age: 27,
        phoneNumber: "0532480071",
    },
    {
        firstName: "Meir",
        lastName: "Shindler",
        city: "Bnei Brak",
        hobby: "art",
        age: 38,
        phoneNumber: "0526123001",
    },
    {
        firstName: "Shlomo",
        lastName: "Rozental",
        city: "Petah Tikva",
        hobby: "sleep",
        age: 27,
        phoneNumber: "0504115845",
    },
    {
        firstName: "Avshalom",
        lastName: "Ram",
        city: "Bnei Brak",
        hobby: "books",
        age: 37,
        phoneNumber: "0527128119",
    },
];

app.get("/", (req, res) => {
    try {
        res.status(200).send(students);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.put("/", (req, res) => {
    try {
        res.status(200).send(req.body);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
