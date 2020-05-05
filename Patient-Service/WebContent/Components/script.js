$(document).ready(function() {

	// hide area of error messages
	$("#nic_error").hide();
	$("#fName_error").hide();
	$("#lName_error").hide();
	$("#dob_error").hide();
	$("#gender_error").hide();
	$("#email_error").hide();
	$("#password_error").hide();
	$("#retype-password_error").hide();
	
	// variables for validations
	let vNic = true;
	let vEmail = true;
	let vPassword = true;
	let vRetypePassword = true;
	

	// check number of characters for nic
	$("#nic").focusout(function() {
		vNic = checkNic();
	});

	// check email is valid or not
	$("#email").focusout(function() {
		vEmail = checkEmail();
	});

	// check minimum requirement of password
	$("#password").focusout(function() {
		vPassword = checkPassword();
	});

	// check matching password
	$("#retype-password").focusout(function() {
		vRetypePassword = checkRetypePassword();
	});

	// check empty text fields
	$(document).on("click", "#signin-button", function(event) {

		let nicStatus = nicRequired();
		let fNameStatus = fNameRequired();
		let sNameStatus = sNameRequired();
		let dobStatus = dobRequired();
		let genderStatus = genderRequied();
		let emailStatus = emailRequied();
		let passwordStatus = passwordRequied();
		let retypePasswordStatus = retypePasswordRequied();
		
		// 
		$("#registration-form").submit(function() {
			vNic = checkNic();
			vEmail = checkEmail();
			vPassword = checkPassword();
			vRetypePassword = checkRetypePassword();
			
			if (nicStatus == false || fNameStatus == false || sNameStatus == false || dobStatus == false
					|| genderStatus == false || emailStatus == false || passwordStatus == false || retypePasswordStatus == false) {
				return false;
			} else {
				
				if(vNic == false || vEmail == false || vPassword == false || vRetypePassword == false) {
					return false;
				} else {
					return true;
				}
			}
		});

	});

});

// NIC validation
function checkNic() {
	let nicLength = $("#nic").val().length;

	if (nicLength == 10 || nicLength == 12) {
		$("#nic_error").hide();
		return true;
	} else {
		$("#nic_error").html("NIC should be 10 or 12 characters");
		$("#nic_error").show();
		return false;
	}
}

// email validation
function checkEmail() {
	let email = $("#email").val().trim();
	let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (regex.test(email)) {
		$("#email_error").hide();
		return true;
	} else {
		$("#email_error").html("Enter valid email");
		$("#email_error").show();
		return false;
	}
}

// password validation
function checkPassword() {
	let passwordLength = $("#password").val().length;

	if (passwordLength >= 8) {
		$("#password_error").hide();
		return true;
	} else {
		$("#password_error").html("Password have at least 8 characters");
		$("#password_error").show();
		return false;
	}
}

// retype password validation
function checkRetypePassword() {
	let passwordLength = $("#password").val();
	let retypePasswordLength = $("#retype-password").val();

	if (passwordLength == retypePasswordLength) {
		$("#retype-password_error").hide();
		return true;
	} else {
		$("#retype-password_error").html("Passwords don't match");
		$("#retype-password_error").show();
		return false;
	}
}

// nic is required field
function nicRequired() {
	if ($("#nic").val().trim() == "") {
		$("#nic_error").html("This field is required");
		$("#nic_error").show();
		return false;
	} else {
		$("#nic_error").hide();
		return true;
	}
}

// first name is required field
function fNameRequired() {
	if ($("#first-name").val().trim() == "") {
		$("#fName_error").html("This field is required");
		$("#fName_error").show();
		return false;
	} else {
		$("#fName_error").hide();
		return true;
	}
}

// last name is required field
function sNameRequired() {
	if ($("#last-name").val().trim() == "") {
		$("#lName_error").html("This field is required");
		$("#lName_error").show();
		return false;
	}
	else {
		$("#lName_error").hide();
		return true;
	}
}

// dob is required field
function dobRequired() {
	if ($("#dob").val().trim() == "") {
		$("#dob_error").html("This field is required");
		$("#dob_error").show();
		return false;
	} else {
		$("#dob_error").hide();
		return true;
	}
}

// gender is required field
function genderRequied() {
	if ($('input[name="gender"]:checked').length === 0) {
		$("#gender_error").html("This field is required");
		$("#gender_error").show();
		return false;
	} else {
		$("#gender_error").hide();
		return true;
	}
}

// email is required field
function emailRequied() {
	if ($("#email").val().trim() == "") {
		$("#email_error").html("This field is required");
		$("#email_error").show();
		return false;
	} else {
		$("#email_error").hide();
		return true;
	}
}

// password is required field
function passwordRequied() {
	if ($("#password").val().trim() == "") {
		$("#password_error").html("This field is required");
		$("#password_error").show();
		return false;
	} else {
		$("#password_error").hide();
		return true;
	}
}

// retype password is required field
function retypePasswordRequied() {
	if ($("#retype-password").val().trim() == "") {
		$("#retype-password_error").html("This field is required");
		$("#retype-password_error").show();
		return false;
	} else {
		$("#retype-password_error").hide();
		return true;
	}
}