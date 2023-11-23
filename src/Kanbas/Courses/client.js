import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/api/courses`;

export const fetchCourses = async () => {
  const response = await axios.get(COURSES_URL);
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${courseId}`
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(COURSES_URL, course);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
  return response.data;
};
