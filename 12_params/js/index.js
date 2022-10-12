function valueClassNameLog (elementName) {
    debugger
    console.log(elementName.value)
    console.log(elementName.className)
}

/*
function firstNameValueAlert() {
    console.log(firstNameEl.value)
    console.log(firstNameEl.className)
}

function lastNameValueAlert() {
    console.log(lastNameEl.value)
    console.log(lastNameEl.className)
}
*/

var firstNameId = 'first-name'
var firstNameEl = document.getElementById(firstNameId)
valueClassNameLog(firstNameEl)
//firstNameValueAlert()

var lastNameId = 'last-name'
var lastNameEl = document.getElementById(lastNameId)
valueClassNameLog(lastNameEl)
//lastNameValueAlert()

var addressId = 'address'
var addressEl = document.getElementById(addressId)
valueClassNameLog(addressEl)

var citiesId = 'cities'
var citiesEl = document.getElementById(citiesId)
valueClassNameLog(citiesEl)

var hobbylistId = 'hobbylist'
var hobbylistEl = document.getElementById(hobbylistId)
valueClassNameLog(hobbylistEl)

var divId = 'div'
var divEl = document.getElementById(divId)
var imgId = 'img'
var imgEl = document.getElementById(imgId)

//window.alert(firstNameEl.value)
//window.alert(firstNameEl.className)
//window.alert(lastNameEl.value)
//window.alert(addressEl.value)
//window.alert(citiesEl.innerHTML)
//window.alert(hobbylistEl.innerHTML)
//window.alert(divEl.innerHTML)
//window.alert(imgEl.src)
//window.alert(imgEl.alt)

firstNameEl.value = 'Andrei'
valueClassNameLog(firstNameEl)

lastNameEl.value = 'Pupkin'
valueClassNameLog(lastNameEl)

//window.alert(addressEl.className)

//window.alert(lastNameEl.className)

//firstNameEl.className = 'temp'

imgEl.title = 'rolling'