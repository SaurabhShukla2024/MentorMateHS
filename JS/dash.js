function select_mentor(s1, s2) { // add names to mentors in selection list dynamically
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";

    if (s1.value == "Maths") {
        var optionArray = ["select|Select", "jaysan|Jaysan", "mihir|Mihir", "rekha|Rekha"];
    } else if (s1.value == "Science") {
        var optionArray = ["select|Select", "isha|Isha", "ankita|Ankita", "prayag|Prayag"];
    } else if (s1.value == "English") {
        var optionArray = ["select|Select", "shalin|Shalin", "saurabh|Saurabh"];
    }

    for (var option in optionArray) {
        var pair = optionArray[option].split('|');
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

document.getElementById("addQues").onclick = function () {
    window.open("question_page.html","_top");
};
/*
document.getElementById("addMeet").onclick = function () {
    window.open("meeting_page.html","_top");
};
*/
const meetBtn = document.querySelector("#addMeet");

meetBtn.addEventListeners("click", function(){
    window.location.replace("meeting_page.html");
})

function openTab(TabName) {

    if (TabName == 'Questions') {
        location.href = "dashq.html";
    }
    if (TabName == 'Meetings') {
        location.href = "dashm.html";

    }

}