let myLeads = [];
const inputEl = document.getElementById("lead-input");
const saveBtn = document.getElementById("save-lead");
const deleteBtn = document.getElementById("delete-leads");
const saveTabBtn = document.getElementById("save-tab");
const leadsList = document.getElementById("leads-list");
const  currentLeads = JSON.parse(localStorage.getItem('myLeads'));

const storedLeads = JSON.parse(localStorage.getItem('myLeads'));
if (storedLeads) {
    myLeads = storedLeads;
    renderLeads();
}


saveBtn.addEventListener("click", function() {
 if (inputEl.value) {  
        myLeads.push(inputEl.value);
        localStorage.setItem('myLeads', JSON.stringify(myLeads)); 
        inputEl.value = "";
        renderLeads();
    }
});
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
});
saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        renderLeads();
    });
});

function renderLeads() {
    leadsList.innerHTML = "";
    for (let i = 0; i < myLeads.length; i++) {
     leadsList.innerHTML += <li>" + myLeads[i] + "</li>";
 }

 
}


 

