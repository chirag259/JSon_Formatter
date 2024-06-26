const JSONBefore = document.getElementById("JSONBEFORE");
const JSONAfter = document.getElementById("JSONAFTER");

function ValidateJSON() {
    try {
        if (JSONBefore.value == "") {
            console.log("please enter JSON Value ");
            return;
        }

        JSON.parse(JSONBefore.value);
        JSONAfter.value = "Validation Successful!";
        return true;
    } catch (e) {
        JSONAfter.value = e;
    }
}

function FormatJSON() {
    if (ValidateJSON()) {
        let parseJSON = JSON.parse(JSONBefore.value);
        let JSONformatvalue = JSON.stringify(parseJSON, undefined, 4);
        JSONAfter.value = JSONformatvalue;
    }
}
function MinifyJSON() {
    if (ValidateJSON()) {
        let parseJSON = JSON.parse(JSONBefore.value);
        let JSONformatvalue = JSON.stringify(parseJSON);
        JSONAfter.value = JSONformatvalue;
    }
}
