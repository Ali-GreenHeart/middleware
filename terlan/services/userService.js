import modelUser from "../model/model.js";
import path from "path";
import bcrypt from 'bcrypt'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const userLogin = async (req, res) => {
  const { email, password } = req.body
  const user = await modelUser.findOne({ email })
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      return res.redirect('/users/profile')
    } else {
      return res.status(401).send('Bad credentials! Password is wrong!')
    }
  } else {
    return res.status(404).send('User not found!')
  }
}
export const registerPost = async (req, res) => {
  let { name, surname, password, ...rest } = req.body;
  const formattedName = capitalize(name);
  password = await bcrypt.hash(password, 10)
  const formattedSurnName = capitalize(surname);
  const profilePicture = req.file.filename
  const createUser = await modelUser.create({
    name: formattedName,
    surname: formattedSurnName,
    profilePicture,
    password,
    ...rest,
  });
  return res.status(201).redirect("/users/login")
};

export const getAlluser = async (limit) => {
  let respons;
  if (limit) {
    respons = await modelUser.find().limit(limit).exec();
  } else {
    respons = await modelUser.find();
  }
  return respons;
};

export const getByIdUser = async (id) => {
  const checkById = await modelUser.findById(id);
  return checkById;
};

export const getByTypes = async (query) => {
  const checkByType = await modelUser.find(query);
  console.log("Wholw user information", checkByType);
  return checkByType;
};

export const postUser = async (newUser) => {
  const createUser = await modelUser.create(newUser);
  return createUser;
};
export const deleteUser = async (id) => {
  const delUser = await modelUser.deleteOne({ _id: id });
  return delUser;
};

export const registerUser = async (req, res) => {
  return res.sendFile(path.resolve("./public/pages/register.html"));
};
export const loginUser = async (req, res) => {
  return res.sendFile(path.resolve("./public/pages/login.html"));
};

export const userProfile = async (req, res) => {
  const { name, surname, email, phone, address, profilePicture } = await modelUser.findById('66275d8d9cf95646e69b8e74')
  const html = `
    <p>${name} ${surname} -  ${email}</p>
    <p>call me 😉 ${phone}</p>
    <p>you can find me at ${address}</p>
    <img src="${`/images/${profilePicture}`}" />
  `
  return res.send(html)
};

