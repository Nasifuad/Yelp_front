import useUserStore from "../store/user.store";

const Home = () => {
  const { user, login } = useUserStore();
  const data = {
    userName: "Nasife2uaduadada",
    password: "123456",
  };
  return (
    <div className="text-3xl font-bold mt-20 text-center">
      <p>Hello the user is {user}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => login(data)}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
2;
