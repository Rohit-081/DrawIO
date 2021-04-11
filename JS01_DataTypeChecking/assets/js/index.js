function checkDataType(data) {
    if (data === undefined) return "Please provide data";
    if (data instanceof Array) return "Data is of Array type";
    return "Data is of " + typeof data + " type";

}

function onClick() {
    var data = document.getElementById('inputData').value;
    var partsArray = data.split('');

    document.getElementById('typeOfData').innerHTML = checkDataType(data);
}