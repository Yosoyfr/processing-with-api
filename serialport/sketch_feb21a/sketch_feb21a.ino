void setup() {
  Serial.begin(9600); // Starts the serial communication
}
void loop() {
  Serial.println(getJSON()); //Write data on serial port
  delay(1000); //Wait for 1 sec. to repeat the process
}

String getJSON(){
    String temperatura = "\"temperatura\": ";
    temperatura.concat(random(10, 28)); //concat two structures, string + integer
    String viento = "\"viento-vel\": ";
    viento.concat(random(50, 100));
    String humedad = "\"humedad\": ";
    humedad.concat(random(10, 40));
    return "{"+temperatura+","+viento+","+humedad+"}"; //random json data
}
