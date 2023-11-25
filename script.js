function checkName() {
    var name = document.getElementById("nameInput").value;
    var popupText = document.getElementById("popup-text");

    if (name.trim() !== "") {
        popupText.innerHTML = "Thank you for visiting our website, " + name + "!";
    } else {
        popupText.innerHTML = "Please enter a name.";
    }

    if (name.toLowerCase() === "ahlam") {
        popupText.innerHTML = "Hi Ahlam! Ali Belalia loves you.<br>Here's a special message: 'You make every moment special!'";
    }

    $('#myModal').modal('show');
}

function closePopup() {
    $('#myModal').modal('hide');
}
