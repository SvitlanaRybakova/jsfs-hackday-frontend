import axios from "axios";

function App() {
  const test = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/");
      console.log(response.data); 

      return response.data;
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  };

  test();

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
