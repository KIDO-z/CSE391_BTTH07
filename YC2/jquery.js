$(document).ready(function(){
    // UserID
    function checkUserID() {
        let userID = $('#txtUserID').val()
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/
        if (userIDRegex.test(userID)) {
            return true
        }
        return false
    }
    // Password
    function checkPassword() {
        let txtPassword = $('#txtPassword').val()
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/
        if (passwordRegex.test(txtPassword)){
            return true
        }
        return false
    }
    //Name
    function checkName() {
        let txtName = $('#txtName').val()
        let nameRegex = /^[a-zA-Z]+$/
        if (nameRegex.test(txtName)) {
            return true
        }
        return false
    }
    
    //ZipCode
    function checkZipCode() {
        let txtZipCode = $('#txtZipCode').val()
        let zipCodeRegex = /^\d{5}/
        if (zipCodeRegex.test(txtZipCode)) {
            return true
        }
        return false
    }
    //Email
    function checkEmail() {
        let txtEmail = $('#txtEmail').val()
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
        if (emailRegex.test(txtEmail)) {
            return true
        }
        return false
    }
    //Gender
    function checkGender() {
        if ($("#txtMale").is(":checked") || $("#txtFemale").is(":checked")) {
            return true
        }
        return false
    }
    //Language
    function checkLanguage() {
        if ($("#txtEnglish").is(":checked") || $("#txtNonEnglish").is(":checked")) {
            return true
        }
        return false
    }
    
    //Country
    function checkCountry() {
        let seletxtCountry = $('#txtCountry option:selected')
        if (seletxtCountry.val() == 'Nhatban' || seletxtCountry.val() == 'Vietnam' || seletxtCountry.val() == 'Trungquoc') {
            return true
        }
        return false
    }
    $('#btnRegister').click(function(e){
        e.preventDefault();
        //UserID
        if (checkUserID()) {
            $('#statusOfUserID').text('UserID h???p l???')
            $('#statusOfUserID').css('color','blue')
        } else {
            $('#statusOfUserID').text('UserID kh??ng h???p h???p l???. ????? d??i t??? 5-12')
            $('#statusOfUserID').css('color','red')
        }
        //Password
        if (checkPassword() == true) {
            $('#statusOfPassword').text('Password h???p l???')
            $('#statusOfPassword').css('color','blue')
        } else {
            $('#statusOfPassword').text('Password kh??ng h???p h???p l???. ????? d??i t??? 7-12')
            $('#statusOfPassword').css('color','red')
        }
        // Name
        if (checkName() == true) {
            $('#statusOfName').text('Name h???p l???')
            $('#statusOfName').css('color','blue')
        } else {
            $('#statusOfName').text('Name kh??ng h???p h???p l???')
            $('#statusOfName').css('color','red')
        }
        //Address
        $('#statusOfAddress').text('Kh??ng b???t bu???c')
        $('#statusOfAddress').css('color','blue')
        // Country
        if (checkCountry() == true) {
            $('#statusOfCountry').text('???? ch???n qu???c gia')
            $('#statusOfCountry').css('color','blue')
        } else {
            $('#statusOfCountry').text('Xin m???i ch???n qu???c gia')
            $('#statusOfCountry').css('color','red')
        }
        // ZIP code
        if (checkZipCode() == true) {
            $('#statusOfZipCode').text('Zip code h???p l???')
            $('#statusOfZipCode').css('color','blue')
        } else {
            $('#statusOfZipCode').text('Zip code kh??ng h???p h???p l???.')
            $('#statusOfZipCode').css('color','red')
        }
        // Email
        if (checkEmail() == true) {
            $('#statusOfEmail').text('Email h???p l???')
            $('#statusOfEmail').css('color','blue')
        } else {
            $('#statusOfEmail').text('Email kh??ng h???p h???p l???.')
            $('#statusOfEmail').css('color','red')
        }
        // Gender
        if (checkGender() == true) {
            $('#statusOfGender').text('Gi???i t??nh h???p l???')
            $('#statusOfGender').css('color','blue')
        } else {
            $('#statusOfGender').text('Gi???i tinh ch??a ???????c ch???n.')
            $('#statusOfGender').css('color','red')
        }
        // Language
        if (checkLanguage() == true) {
            $('#statusOfLanguage').text('???? ch???n')
            $('#statusOfLanguage').css('color','blue')
        } else {
            $('#statusOfLanguage').text('Ngo???i ng??? ch??a ???????c ch???n.')
            $('#statusOfLanguage').css('color','red')
        }
        //About
        $('#statusOfAbout').text('Kh??ng b???t bu???c')
        $('#statusOfAbout').css('color','blue')
    })
})