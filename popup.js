document.getElementById("inputForm").addEventListener("submit", function(e) {
        alert("Loaded id")
        e.preventDefault();
        var inputValue = document.getElementById("inputField").value;
        chrome.storage.sync.set({idnum: inputValue}), function() {console.log('Saved',inputValue)};
    });