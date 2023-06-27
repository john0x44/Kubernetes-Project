Install QT Creator for building this application!

Make sure to add the WebSocket library in your 'CMakeLists.txt' file: 
target_link_libraries(K8SPodLogger PRIVATE Qt${QT_VERSION_MAJOR}::WebSockets)