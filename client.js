const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  console.log("Connecting ...");

  conn.on("connect", () => {
    console.log("Successfully conected to game server.");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    conn.write("Name: SLC");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 60)
  });

  return conn;
};



module.exports = connect;