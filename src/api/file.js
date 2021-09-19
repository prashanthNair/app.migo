import axios from "axios";

const uploadApiUrl = ` https://94hjxzau34.execute-api.ap-south-1.amazonaws.com`;

export async function upload(formData) {
  const { data } = await axios.post(`${uploadApiUrl}/api/file`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}
