import { useEffect, useState } from "react";
import axios from "axios";
import IUsersData from "../interfaces/UsersData.interface";
import { useDispatch } from "react-redux";
import { setUserCount } from "../redux/userSlice";

function Users() {
  const [users, setUsers] = useState<IUsersData[]>([]);
  const dispatch = useDispatch();
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://66fd3be0c3a184a84d199284.mockapi.io/api/v1/users"
      );
      console.log({ data });
      setUsers(data);
      dispatch(setUserCount(data.length));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="Users mt-8 flex items-center justify-center v-screen">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((data) => (
            <tr key={data.id}>
              <td className="p-2">{data.name}</td>
              <td className="p-2">{data.email}</td>
              <td className="p-2">{data.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
