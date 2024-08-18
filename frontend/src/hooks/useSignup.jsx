const useSignup = () => {
  const signup = async ({name, email, password }) => {
    try {
      const res = await fetch(`http://localhost:1400/api/v1/auth/signup`, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        alert("signed in....");
    } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Signup error " + (err.message || "An unknown error occurred"));
    }
  };
  return { signup };
};

export default useSignup;
