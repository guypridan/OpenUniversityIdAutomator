(() => {
    chrome.storage.sync.get('idnum', function (obj) {
        console.log('IDNum:', obj);
        if (typeof obj != 'undefined') {
            let input = document.getElementById("p_mis_student").value = obj['idnum'];
        }
    });
    
})();