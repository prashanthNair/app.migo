import axios from "axios";

const ojtApiUrl = "https://api.dev.migobucks.com/brand/ojt/register";

export async function enroll(params) {
  const {
    firstName,
    lastName,
    contactNumber,
    email,
    courseTitle,
    experience,
    qualification,
    meta,
    paymentDetails,
    startDate,
    duration,
    jobId,
    amount,
  } = params;
  debugger;
  const { data } = await axios.post(`${ojtApiUrl}`, {
    firstName,
    lastName,
    contactNumber,
    email,
    experience,
    qualification,
    courseTitle,
    meta,
    paymentDetails,
    startDate,
    duration,
    jobId,
    amount,
  });

  return data;
}
