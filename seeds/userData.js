const {User} = require("../models");

const userdata = [
    // User ID 1
    {
        username: "lamperouge1218",
        email: "test@test.test",
        password:"p@ssw0rd12345",
    },
    // User ID 2
    {
        username: "GalileoHumpkins",
        email: "test2@test.test",
        password: "myfioraiscracked45",
    },
    // User ID 3
    {
        username: "LessBarrierReef",
        email: "test3@test.test",
        password: "gardenzOftheM00n",
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
