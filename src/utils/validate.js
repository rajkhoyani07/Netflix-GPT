export const checkValiData = (email, password, Name) => {
     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     const isNamevalid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(Name);

     if(!isEmailValid) return "Email ID is not valid";
     if(!isPasswordValid) return "Password is not valid";
     if(!isNamevalid) return "Enter Valid Name";
     
     return null;
    };