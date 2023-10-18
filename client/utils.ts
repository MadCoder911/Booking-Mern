import axios from "axios";
import { useEffect, useState } from "react";

export const fetchFeatured: () => Promise<number[] | any> = async () => {
  try {
    const response: number[] = await axios.get(
      `${process.env.API_URL}/hotels/countByCity?cities=berlin,cairo,aswan`
    );
    return response;
  } catch (error) {
    return error;
  }
};
