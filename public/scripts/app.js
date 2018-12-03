"use strict";

// const state = { 
//     name : "Cvanzy",
//     cities : [1, 2, 3],
//     getAllcityOut() {
//         console.log(this.name)
//         const newCity = this.cities.map((city) => {
//             return city += city ;
//         })

//         newCity.forEach((city) => {
//             console.log(city);
//         })

//         this.cities.forEach((city) => {
//             console.log(city);
//         })
//     }
// };

// state.getAllcityOut();


var cal = {
    nums: [1, 2, 3],
    multiplyBy: 10,
    mutiply: function mutiply() {
        var _this = this;

        return this.nums.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(cal.mutiply());
