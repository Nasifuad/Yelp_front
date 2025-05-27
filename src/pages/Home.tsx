import { useEffect } from "react";
import useUserStore from "../store/user.store";

const Home = () => {
  const { user, login, signup, authenticate } = useUserStore();
  const dataForLogin = {
    userName: "Nasife2uaduadada",
    password: "123456",
  };
  const dataForSignup = {
    userName: "Naseifeere2uaduadada",
    password: "1e23456",
    userEmail: "Naseife2uaduada2323@gmail.com",
  };
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div className="text-3xl font-bold mt-20 text-center gap-2">
      <p>Hello the user is {user}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => login(dataForLogin)}
      >
        {" "}
        Login{" "}
      </button>
      <button
        className="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signup(dataForSignup)}
      >
        SignUp
      </button>
    </div>
  );
};

export default Home;
2;
