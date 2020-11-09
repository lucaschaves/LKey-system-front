import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../../services/api';

interface Course {
  name: string;
  description?: string;
  enabled: boolean;
}

interface CourseContextData {
  findAllCourse(): Promise<Course[]>;
  findCourseByName(name: string): Promise<Course>;
  newCourse(course: Course): Promise<Course>;
  alterCourse(course: Course): Promise<Course>;
}

const CourseContext = createContext<CourseContextData>({} as CourseContextData);

const CourseProvider: React.FC = ({ children }) => {
  const [state, setstate] = useState('');

  async function findAllCourse() {
    try {
      const response = await api.get('/course');
      if (response) {
        return response.data;
      }
      return {} as Course;
    } catch (err) {
      setstate(err.message);
      return {} as Course;
    }
  }

  async function findCourseByName(name: string) {
    try {
      const response = await api.get(`/course/${name}`);
      if (response) {
        return response.data;
      }

      return {} as Course;
    } catch (err) {
      setstate(err.message);
      return {} as Course;
    }
  }

  const newCourse = useCallback(async (course: Course) => {
    try {
      const response = await api.post('/course', course);
      if (response) {
        return response.data;
      }

      return {} as Course;
    } catch (err) {
      setstate(err.message);
      return {} as Course;
    }
  }, []);

  const alterCourse = useCallback(async (course: Course) => {
    try {
      const response = await api.put('/course', course);
      if (response) {
        return response.data;
      }

      return {} as Course;
    } catch (err) {
      setstate(err.message);
      return {} as Course;
    }
  }, []);

  return (
    <CourseContext.Provider
      value={{ findAllCourse, findCourseByName, newCourse, alterCourse }}
    >
      {children}
      {state}
    </CourseContext.Provider>
  );
};

function useCourse(): CourseContextData {
  const context = useContext(CourseContext);
  return context;
}

export { CourseProvider, useCourse };
