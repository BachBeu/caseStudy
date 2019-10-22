let UserName = function () {
    this.arrAdmin = [["admin", "admin1", "admin2"], ["123123123", "456456456", "789789789"]];
    //this.logged = 0;
    this.login = function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (username.trim() === '') {
            alert("Please input username.");
        } else if (password.trim() === '') {
            alert("Please input password.");
        } else {
            for (let i = 0; i < this.arrAdmin[0].length; i++) {
                if (username === this.arrAdmin[0][i] && password === this.arrAdmin[1][i]) {
                    //this.logged = 1;
                    alert("Welcome " + this.arrAdmin[0][i] + " login success!");
                    return window.location = "AddStudent.html";
                }
            }
            alert("Username or password is incorect.");
            clearLogin();
        }
    };
};
function clearLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
let log = new UserName();

var studentList = [];
function addStudent() {
    var stuId = document.getElementById("studentId").value;
    var stuName = document.getElementById("studentName").value;
    var stuEmail = document.getElementById("studentEmail").value;
    var stuPhone = document.getElementById("studentPhone").value;
    var stuAddress = document.getElementById("studentAddress").value;
    var fTU = document.getElementById("fTL").value;
    var student = {
        "studentId" : stuId,
        "studentName" : stuName,
        "studentEmail" : stuEmail,
        "studentPhone" : stuPhone,
        "studentAddress" : stuAddress,
        "fTL" : fTU,
    };
/*    validateId(stuId);
    validateName(stuName);
    validateEmail(stuEmail);
    validatePhone(stuPhone);*/
    if(curIndex == -1){//chỉ số hiện tại
        add(student);
    }else{
        studentList[curIndex] = student;
        curIndex = -1;
        document.getElementById("btnAdd").innerHTML = "Add Student";
        displayAll();
    }
}
function displayAll() {
    var detailSL = document.getElementById("detailList");
    detailSL.innerHTML = "";
    for (let i = 0; i < studentList.length; i++){
        var student = studentList[i];
        detailSL.innerHTML += "<tr>"+
            "<td>"+(i+1)+"</td>"+
            "<td>"+student.studentId+"</td>"+
            "<td>"+student.studentName+"</td>"+
            "<td>"+student.studentEmail+"</td>"+
            "<td>"+student.studentPhone+"</td>"+
            "<td>"+student.studentAddress+"</td>"+
            "<td><img src='Images/' +student.fTL+></td>"+
            "<td><center><button  onclick='edit("+i+")'>Edit</button></center></td>"+
            "<td><center><button  onclick=' onStudentDelete("+i+")'>Delete</button></center></td>"+
            "</tr>"
    }
}
function add(student) {
    studentList.push(student);
    console.log(studentList.length);
    var detailSL = document.getElementById("detailList");
    detailSL.innerHTML += "<tr>"+
        "<td>"+studentList.length+"</td>"+
        "<td>"+student.studentId+"</td>"+
        "<td>"+student.studentName+"</td>"+
        "<td>"+student.studentEmail+"</td>"+
        "<td>"+student.studentPhone+"</td>"+
        "<td>"+student.studentAddress+"</td>"+
        "<td>"+student.fTL+"</td>"+
        "<td><center><button  onclick='edit("+(studentList.length - 1)+")'>Edit</button></center></td>"+
        "<td><center><button  onclick='onStudentDelete()'>Delete</button>   </center></td>"+
        "</tr>"
}

var curIndex = -1;
function edit(index) {
    curIndex = index;
    var student = studentList[index];
    document.getElementById("studentId").value = student.studentId;
    document.getElementById("studentName").value = student.studentName;
    document.getElementById("studentEmail").value = student.studentEmail;
    document.getElementById("studentPhone").value = student.studentPhone;
    document.getElementById("studentAddress").value = student.studentAddress;
    document.getElementById("fTL").value = student.fTL;
    document.getElementById("btnAdd").innerHTML = "Update Student";
    displayAll(index);
}
function onStudentDelete(index) {
    if (confirm("Bạn chắc chắn muốn xóa ??")){
        studentDelete();
        displayAll();
    }
}
function studentDelete(index) {
    studentList.splice(index, 1);
}
let str;
function validateId(str) {
    regexp = /^G+[BC]+H+[0-9]{5}$/;
    if(regexp.test(str)){
        alert("ID " + str + " Nhập vào hợp lệ");
    }else{
        alert("ID " + str + " Nhập vào không hợp lệ");
    }
}
function validateName(str) {
    regexp = /^[A-Z]+[a-z]{1,}\s[A-Z]+[a-z]{1,}\s[A-Z]+[a-z]{1,}/;
    if(regexp.test(str)){
        alert("Name " + str + " Nhập vào hợp lệ");
    }else{
        alert("Name " + str + " Nhập vào không hợp lệ");
    }
}
function validatePhone(str) {
    reg = /^\([0-9]{2}\)\-\(0+[0-9]{9}\)$/;
    if(reg.test(str)){
        alert(str + " Là số điện thoại hợp lệ");
    }else{
        alert(str + "Là số điện thoại không hợp lệ");
    }
}
function validateEmail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]* @[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test(str)){
        alert("Email " + str + " Nhập vào hợp lệ");
    }else{
        alert("Email " + str + " Nhập vào không hợp lệ");
    }
}