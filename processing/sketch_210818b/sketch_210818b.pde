void setup(){
  String[]json = loadStrings("http://localhost:3000/");
  
  for(String s:json){
    println(s);
  }
  
  saveStrings("data.json", json);
  
  JSONObject jobj = loadJSONObject("data.json");
  
  JSONArray eventsJSONArray = jobj.getJSONArray("events");
  
  for(int i = 0;i < eventsJSONArray.size();i++){
    JSONObject eventObject = eventsJSONArray.getJSONObject(i);
    printEventDetails(eventObject);
  }
  
}

void printEventDetails(JSONObject guildEvent){
   println("Event world_id:" + guildEvent.getInt("world_id"));
   println("Event map_id: " + guildEvent.getFloat("map_id")); // map id is actually integer, but i fetch it as float just as example.
   println("Event state:"+ guildEvent.getString("state"));
   println("Event event_id:" + guildEvent.getString("event_id"));
   println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
}

void draw(){

}
