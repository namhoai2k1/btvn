function validateDuLieu() {
    alert("Đăng kí");
    let checkedTrue = 0;

    //kiểm tra lỗi và báo lỗi

    let inputRequire = document.getElementsByClassName("require");

    console.log(inputRequire);

    for (let i = 0; i < inputRequire.length; i++) {
        //name
        if (inputRequire[i].name == "full_name"){
            document.getElementById("full_name_error").innerHTML = "Vui lòng nhập đủ họ tên";
            document.getElementById("full_name").focus();
        }
        //address
        if (inputRequire[i].name == "address"){
            document.getElementById("address_error").innerHTML = "Vui lòng nhập đủ họ tên";
            document.getElementById("address").focus();
        }
        //phone number
        if (inputRequire[i].name == "code_number"){
            document.getElementById("code_number_error").innerHTML = "Vui lòng nhập đủ họ tên";
            document.getElementById("code_number").focus();
        }
        //email
        if (inputRequire[i].name == "email_name"){
            document.getElementById("email_name_error").innerHTML = "Vui lòng nhập đủ họ tên";
            document.getElementById("email_name").focus();
        }
    }
    //kiem tra giới tinh
    if (document.getElementById("man").checked == false && document.getElementById("woman").checked == false) {
        document.getElementById("sex_error").innerHTML = "Vui lòng nhập đủ họ tên"; 
    }

    //chon tour
    if (document.getElementById("pick_haLong").checked == false && document.getElementById("pick_daLac").checked == false && document.getElementById("pick_sapa").checked == false) {
        document.getElementById("tour_error").innerHTML = "Vui lòng nhập đủ họ tên"; 

    }

    //chon phuong tien
    if (document.getElementById("vehicle").value != 1 && document.getElementById("vehicle").value != 2 && document.getElementById("vehicle").value != 3) {
        document.getElementById("vehicle_error").innerHTML = "Vui lòng nhập đủ họ tên"; 
    }
    return false;
}
