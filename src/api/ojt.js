import axios from "axios";

const ojtApiUrl = "https://api.dev.migobucks.com/brand/ojt/register";

export async function enroll(params) {
  debugger
  const {
    firstName,
    lastName,
    contactNumber,
    email,
    courseTitle,
    experience,
    qualification,
    jobType,
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
    type:jobType,
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
