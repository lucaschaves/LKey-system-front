import React, { useState, useEffect } from 'react';

import { useCourse } from '../../hooks/Course';

interface Course {
  name: string;
  description?: string;
  enabled: boolean;
}

const Dashboard: React.FC = () => {
  const [state, setState] = useState<Course[]>();
  const [stateName, setStateName] = useState<Course>();

  const {
    findCourseByName,
    findAllCourse,
    newCourse,
    alterCourse,
  } = useCourse();

  useEffect(() => {
    async function loadData() {
      setState(await findAllCourse());
    }

    loadData();
  }, [findAllCourse]);

  const findBy = async () => setStateName(await findCourseByName('Node'));

  const newC = async () => {
    await newCourse({
      name: 'React Native',
      description: 'Teste',
      enabled: true,
    });
  };

  const alterBy = async () => {
    await alterCourse({
      name: 'React Natives',
      enabled: true,
    });
  };

  const reloadBy = async () => {
    const data = await findAllCourse();
    console.log(data);
    setState(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Dashboard</h1>
      <br />
      <button style={{ width: 100 }} type="button" onClick={newC}>
        New Course
      </button>
      <br />
      <ul>{state && state.map(v => <li>{v.name}</li>)}</ul>
      <br />
      <button style={{ width: 100 }} type="button" onClick={findBy}>
        Find By Name
      </button>
      <br />
      {stateName && stateName.name}

      <button style={{ width: 100 }} type="button" onClick={alterBy}>
        Alter By Name
      </button>
      <br />

      <button style={{ width: 100 }} type="button" onClick={reloadBy}>
        Reload
      </button>
    </div>
  );
};

export default Dashboard;
