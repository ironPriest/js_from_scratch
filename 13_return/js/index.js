function nameValueLog(id) {
    var el = document.getElementById(id)
    console.log(el.value)
}

function getNameValue(id) {
    var el = document.getElementById(id)
    return el.value
}

var firstNameId = 'first-name'
var lastNameId = 'last-name'

nameValueLog(firstNameId)
nameValueLog(firstNameId)
nameValueLog(firstNameId)

nameValueLog(lastNameId)
nameValueLog(lastNameId)
nameValueLog(lastNameId)

var value = getNameValue(lastNameId)
window.alert(value)