import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import React from "react";
import Loading from "../../components/loading";

import { Link } from "react-router-dom";
import { ContainerUsers } from "./style.jsx";

// Components
import { ListUser, Header } from "../../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export { useQuery };

export function Users({ props }) {
  const [removeLoading, setRemoveLoading] = useState(false);

  async function getRepos() {
    const response = await fetch("https://api.github.com/users/");

    const data = await response.json();

    setRepositories(data.data);

    setRemoveLoading(true);
  }
  useEffect(() => {
    getRepos();
  }, [query]);

  const query = useQuery();
  const [user, setUser] = useState({});
  const [setRepositories] = useState([]);

  useEffect(() => {
    Api.getByUsername(query.get("text")).then((res) => setUser(res.data));

    Api.getReposByUsername(query.get("text")).then((res) =>
      setRepositories(res.data)
    );
  }, []);

  const getUser = () => {
    // Api.getByUsername(searchText).then(res => setUsers([...user, res.data]));
  };
  return (
    <ContainerUsers>
      <section className="ContentUsers">
        <Header></Header>
        <section className="BoxScrollList">
          {!removeLoading && <Loading />}
          <Link class="LinkPages" to={`/Perfil?text=${user.login}`}>
            <ListUser
              ProfilePicture={user.avatar_url}
              Name={user.name}
              Link={user.login}
              Company={user.company}
              Address={user.location}
              Stars={user.public_repos}
            />
          </Link>
        </section>
      </section>
    </ContainerUsers>
  );
}

export default Users;
