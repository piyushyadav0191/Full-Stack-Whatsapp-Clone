import axios from "axios";

const cloud_name = process.env.REACT_APP_CLOUD_NAME2;
const cloud_secret = process.env.REACT_APP_CLOUD_SECRET2;
export const uploadFiles = async (files) => {
  let formData = new FormData();
  formData.append("upload_preset", cloud_secret);
  let uploaded = [];
  for (const f of files) {
    const { file, type } = f;
    formData.append("file", file);
    let res = await uploadToCloudinary(formData);
    uploaded.push({
      file: res,
      type: type,
    });
  }
  return uploaded;
};
const uploadToCloudinary = async (formData) => {
  return new Promise(async (resolve) => {
    return await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/raw/upload`,
        formData
      )
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
