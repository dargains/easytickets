// "use client";

// import React, { useState } from "react";

// import { User } from "@/types";
// import { createUser } from "@/libs/User";

// type Props = {
//   initialUserState: User;
// };

// const initialUserState: User = {
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
//   role: "b110cd8b-96ad-40c9-a828-76a31c97772b",
// };

// const SignupForm = () => {
//   const [hasError, setHasError] = useState(false);
//   const [formData, setFormData] = useState<User>(initialUserState);

//   const onSubmit = async (userInfo: User) => {
//     setHasError(false);
//     const response = await createUser(userInfo);
//     if (!response.ok) {
//       const responseText = await response.text();
//       setHasError(true);
//       throw new Error(responseText);
//     }
//     const { data } = await response.json();
//     return data;
//   };

//   const onChange = ({ target }: { target: HTMLInputElement }) =>
//     setFormData({ ...formData, [target.name]: target.value });

//   const handleSubmit = () => {
//     onSubmit(formData);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="first_name">Primeiro nome</label>
//         <input
//           type="text"
//           id="first_name"
//           name="first_name"
//           value={formData.first_name}
//           onChange={onChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="last_name">Último nome</label>
//         <input
//           type="text"
//           id="last_name"
//           name="last_name"
//           value={formData.last_name}
//           onChange={onChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={onChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={onChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>registar</button>

//       {hasError ? <p>ocorreu um erro</p> : ""}
//     </div>
//   );
// };

// export default SignupForm;
export default function SignupForm() {
  return <div>SignupForm</div>;
}
