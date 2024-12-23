for (var i = 0; i < 5; ++i) {
    console.log("Iteration ".concat(i));
}
var grades = [99.0, 89.0, 91.0, 81.0, 100.0];
var gradesSum = 0.0;
for (var i = 0; i < grades.length; ++i) {
    console.log("Grade ".concat(i + 1, ": ").concat(grades[i]));
    gradesSum += grades[i];
}
var gradesAverage = (gradesSum / grades.length);
console.log("The class grade average is: ".concat(gradesAverage));
var names = ["Nick", "Elliott", "Alyssa", "Jax", "Jeffrey"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1 == "Nick") {
        console.log("Hi ".concat(name_1, ", how was your studying today?"));
    }
    else if (name_1 == "Elliott") {
        console.log("Hi ".concat(name_1, ", go read a book stinky!!!"));
    }
    else {
        console.log("Sorry ".concat(name_1, ", I don't have a custom message for you. Too bad!"));
    }
}
