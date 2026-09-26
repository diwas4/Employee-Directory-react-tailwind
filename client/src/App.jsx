import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import axios from "axios";
import { useEffect } from "react";
import { context } from "./context/AuthContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [nameData, setNameData] = useState([]);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [assignment, setAssignment] = useState('');
  const [position, setPosition] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/files/employees.json",
      );
      setNameData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading name data:", error);
      setLoading(false);
    }
  };
  //console.log(nameData)

  return (
    <>
      <div>
        <context.Provider
          value={{
            loading,
            setLoading,
            nameData,
            setNameData,
            query,
            setQuery,
            department,
            setDepartment,
            assignment,
            setAssignment,
            position,
            setPosition
          }}
        >
          <Header />
          
        </context.Provider>
      </div>
    </>
  );
}

export default App;
