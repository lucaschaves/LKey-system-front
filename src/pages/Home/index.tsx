import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux";
import { getCourses } from "../../redux/modules/course/effects";
import { getUsers} from "../../redux/modules/user/effects";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { courses, users } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  console.log("courses", courses.list);
  console.log("users", users.list);

  const handleNew = () => {

  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleNew}>New</button>
      <ul>
        <span>Course</span>
        {courses.list.map((v) => (
          <li key={v.id}>
            <p>{v.name}</p>
          </li>
        ))}
        <span>Users</span>
        {users.list.map((v) => (
          <li key={v.id}>
            <p>{v.fullName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
