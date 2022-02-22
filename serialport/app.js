const SerialPort = require("serialport");
const ReadLine = require("@serialport/parser-readline");

const port = new SerialPort("COM3", { baudRate: 9600 });
const parser = port.pipe(new ReadLine({ delimiter: "\n" }));

port.on("open", () => {
	console.log("Se abrió la comunicación");
});

parser.on("data", (data) => {
	console.log(data);
});
