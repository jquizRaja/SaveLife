export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("All fields are mandatory");
    }
    console.log("login", e, email, password, role);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  email,
  role,
  password,
  organizationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      "register=>",
      e,
      email,
      password,
      role,
      organizationName,
      hospitalName,
      website,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};
