import axios from "axios";

export const fetchFeatured = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/hotels/countByCity?cities=berlin,cairo,aswan`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchSearch = async (search) => {
  try {
    if (search === "all") {
      const response = await axios.get(`${process.env.API_URL}/hotels`);
      return response.data;
    } else {
      const response = await axios.get(
        `${process.env.API_URL}/hotels?city=${search}`
      );
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
