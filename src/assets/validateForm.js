const validateForm = (email, password) => {
  const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!emailCheck) {
    return "Email is not valid";
  }

  if (!passwordCheck) {
    return "Password is not valid";
  }

  return null;
};

export default validateForm;
