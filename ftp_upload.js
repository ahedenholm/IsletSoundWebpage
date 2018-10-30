const ftp = require("basic-ftp")
const fs = require("fs")

let password = process.env.ISLETSOUNDSSH_PW || "SET PASSWORD IN ENVVAR";
let username = process.env.ISLETSOUNDSSH_USER || "SET USERNAME IN ENVVAR";

const sftpOptions = {
  host: "ssh.isletsound.com",
  // host: "46.30.211.236",
  port: 22,
  user: username,
  password: password,
  secure: true
}

const ftpOptions = {
  host: "ftp.isletsound.com",
  port: 21,
  user: username,
  password: password + "2",
  secure: false
}

async function upload() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access(ftpOptions)
    console.log('client.list()', await client.list())
    await client.clearWorkingDir()
    await client.uploadDir("./build")
  }
  catch (err) {
    console.log('error: ', err)
  }
  client.close()
}

upload()