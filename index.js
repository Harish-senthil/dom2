function label_create(tagname,attr1,attrval1,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attr1,attrval1)
    ele.innerHTML = content
    return ele;
}


function break_create(){
    var breakele = document.createElement("br")
    return breakele;
}
function input_create(tagname,attr1,attrval1,idname){
    var inp = document.createElement(tagname)
    inp.setAttribute(attr1,attrval1)
    inp.className = "main"
    inp.id = idname
    return inp;
}

function submit_create(tagname, content) {
    var submit = document.createElement(tagname);
    submit.setAttribute("type", "submit");
    submit.innerHTML = content;

    submit.addEventListener("click", function() {
        var firstNameValue = document.getElementById("Firstname").value;
        var middleNameValue = document.getElementById("Middlename").value;
        var lastNameValue = document.getElementById("Lastname").value;
        var emailValue = document.getElementById("Email").value;
        var addressValue = document.getElementById("Address").value;

        console.log(firstNameValue);
        console.log(middleNameValue);
        console.log(lastNameValue);
        console.log(emailValue);
        console.log(addressValue);
    });

    return submit;
}


var firstName = label_create("label","for","firstname","First Name");
let firstbreak = break_create()
let firstinp = input_create("input","type","text","Firstname")
let firstinp_br = break_create()
var middleName = label_create("label","for","middlename","Middle Name");
let middlebreak = break_create()
let middleinp = input_create("input","type","text","Middlename")
let middleinp_br = break_create()
var lastName = label_create("label","for","lastname","Last Name");
let lastbreak = break_create()
let lastinp = input_create("input","type","text","Lastname")
let lastinp_br = break_create()
var email = label_create("label","for","email","Email");
let emailbreak = break_create()
let emailinp = input_create("input","type","email","Email")
let emailinp_br = break_create()
var address = label_create("label","for","address","Address");
let addbreak = break_create()
let addinp = input_create("input","type","textarea","Address")
let addinp_br = break_create()
var sub = submit_create("button","submit")

document.body.append(firstName,firstbreak,firstinp,firstinp_br,middleName,middlebreak,middleinp,middleinp_br,lastName,lastbreak,lastinp,lastinp_br,email,emailbreak,emailinp,emailinp_br,address,addbreak,addinp,addinp_br,sub);
