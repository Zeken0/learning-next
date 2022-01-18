import { useState, useEffect } from "react";
import Axios from "axios";

// This component displays a list of people from an API endpoint
const People = () => {
  // This variable holds the list of people
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const { data } = await Axios.get("https://reqres.in/api/users");
        setPeople(data.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (!people || isError) {
    return <div>Something went wrong 😢</div>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (people.length === 0) {
    return <h2>There are no people to show</h2>;
  }

  return (
    <section>
      {people.map(({ id, first_name, email, avatar }) => (
        <div key={id}>
          <h2>{first_name}</h2>
          <p>{email}</p>
          {/* NOTE: Ignore the warning message  */}
          <img src={avatar} alt={first_name} />
        </div>
      ))}
    </section>
  );
};

export default People;
