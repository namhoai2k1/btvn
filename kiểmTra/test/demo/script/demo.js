function validateDuLieu() {
    alert("Đăng kí");
    //báo lỗi và focus lỗi
    let inputRequire = document.getElementsByClassName("require");

    let checkTrue = 1;

    console.log(inputRequire);

    for (let i = 0; i < inputRequire.length; i++) {
        console.log(inputRequire[i].value);
        console.log(inputRequire[i].value.length);

        if(inputRequire[i].value.length < 1) {
            console.log(inputRequire[i].name);
            if (inputRequire[i].name == "full_name"){
                document.getElementById("full_name_error").innerHTML = "Vui lòng nhập đủ họ tên";
                document.getElementById("full_name").focus();
                checkTrue = 0;
            }
            if (inputRequire[i].name == "address"){
                document.getElementById("address_error").innerHTML = "Vui lòng nhập đủ địa chỉ của bạn";
                document.getElementById("address").focus();
                checkTrue = 0;
            }
            if (inputRequire[i].name == "email"){
                document.getElementById("email_error").innerHTML = "Vui lòng nhập email của bạn";
                document.getElementById("email").focus();
                checkTrue = 0;

            }
        }
    }

    //kiểm tra giới tính
    let sexMan = document.getElementById("man");
    let sexWoman = document.getElementById("woman");
    //check false and true of sex
    // console.log(sexMan);
    // console.log(sexMan.checked);
    // console.log(sexWoman);
    // console.log(sexWoman.checked);
    //kiêm tra
    if (sexMan.checked == false && sexWoman.checked == false) {
        document.getElementById("sex_error").innerHTML = "Vui lòng chọn giới tính của bạn";
        checkTrue = 0;
    }
    //check validate hoten 
    const check_name = /^([A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+\b ){1,4}[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
    let string_name = document.getElementById("full_name").value;
    if (check_name.test(string_name) == false){
        document.getElementById('full_name_error').innerHTML = "Định dạng họ tên không hợp lệ";
        document.getElementById('full_name').focus();
        checkTrue = 0;
    }

    //check email 
    const check_email = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    let string_email = document.getElementById("email").value;
    if (check_email.test(string_email) == false) {
        document.getElementById("email_error").innerHTML = "Định dạng email của bạn không hợp lệ";
        document.getElementById("email").focus();
        checkTrue = 0;
    }

    //chon tour 
    if ((document.getElementById("chonHalong").checked == false) && (document.getElementById("chonSapa").checked == false) && (document.getElementById("chonDanang").checked == false)) {
        document.getElementById("tour_error").innerHTML = "Vui lòng chọn tour du lịch";
        checkTrue = 0;
    }
    //chon phuong tiện 
    if ((document.getElementById("vehicle").value != 1) && (document.getElementById("vehicle").value != 2) && (document.getElementById("vehicle").value != 3)) {
        document.getElementById("vehicle_error").innerHTML = "Vui lòng chọn phương tiện";
    }
    if (document.getElementById("vehicle").value == 3) {
        if (document.getElementById("chonHalong").checked == true || document.getElementById("chonSapa").checked == true) {
            alert("không có phương tiện cho tour này");
        }
    }

    if (checkTrue == 1) {
        alert("ĐĂng kí thành công");
        // chuuyener  trang
        window.location="http://www.google.com";
    }
    return false;
}