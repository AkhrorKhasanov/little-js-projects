let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    } else {
        let today = new Date();
        let birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 0) {
            alert("The date of birth cannot be in the future.");
            return;
        } else if (age > 120) {
            alert("Please enter a valid date of birth.");
            return;
        } else if (age == 1) {
            document.getElementById("result").innerText = `Your age is: ${age} year`;
        } else {
            document.getElementById("result").innerText = `Your age is: ${age} years`;
        }
    }
});