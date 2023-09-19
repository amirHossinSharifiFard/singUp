export const validate = (data,type) => {
  const errors = {};
if(type==="singUp"){
  if (!data.name.trim()) {
    errors.name = "name is required";
  } else {
    delete errors.name;
  }
  if (data.confrimPassword.length <= 6) {
    errors.confrimPassword = "invalid password";
  } else if (data.confrimPassword === data.password) {
    delete errors.confrimPassword;
  } else {
    errors.confrimPassword = "your password is not match";
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "accept our regolaition";
  }
}


  if (data.email === "amir@gmail.com") {
    delete errors.email;
  } else {
    errors.email = "email is required";
  }

  if (data.password.length <= 6) {
    errors.password = "your password is to short";
  } else {
    delete errors.password;
  }

  

  return errors;
};
