function calculateAge() {
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    
    var ageYear = endDate.getFullYear() - startDate.getFullYear();
    var ageMonth = endDate.getMonth() - startDate.getMonth();
    var ageDate = endDate.getDate() - startDate.getDate();
    var ageHours = endDate.getHours() - startDate.getHours();
    var ageMins = endDate.getMinutes() - startDate.getMinutes();
    
    if (ageMonth < 0 || (ageMonth == 0 && ageDate < 0)) {
        ageYear--;
        ageMonth += 12;
    }
    
    if (ageDate < 0) {
        ageDate += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        ageMonth--;
    }
    
    if (ageHours < 0) {
        ageHours += 24;
        ageDate--;
    }
    
    if (ageMins < 0) {
        ageMins += 60;
        ageHours--;
    }
    
    var ageString = ageYear + " years, " + ageMonth + " months, " + ageDate + " days, " + ageHours + " hours, " + ageMins + " minutes.";
    
    document.getElementById("result").innerHTML = ageString;
}
