import axios from "axios";

const ojtApiUrl = "https://qzqvuzsu4g.execute-api.ap-south-1.amazonaws.com/dev";

export async function enroll(params) {
  const {
    firstName,
    lastName,
    contactNumber,
    email,
    courseTitle,
    meta,
    paymentDetails,
    startDate,
    duration,
    jobId,
  } = params;
  const { data } = await axios.post(`${ojtApiUrl}/enroll`, {
    firstName,
    lastName,
    contactNumber,
    email,
    courseTitle,
    meta,
    paymentDetails,
    startDate,
    duration,
    jobId,
  });

  return data;
}
