# Code Sample from Twin Cities Code Camp Talk

Here are some sample code pieces that were a part of the talk on NodeJS.  The slides are located at [Slide Rocket](http://portal.sliderocket.com/AJAUI/Introduction_to_NodeJS).

## Blocking / Non-Blocking I/O

### Blocking Example
Running the binary for the io.cpp program:
    ./a.out
If that doesn't work you probably have to compile on your box:
    g++ io.cpp
    ./a.out
### Non-Blocking Example
    node eventio.js

## TCP Chat Server
    node chat.js
Then, in another terminal
    telnet localhost 8000
or
    nc localhost 8000

## HTTP Server
    node http.js
Then, in another terminal
    curl localhost:3000
Or just load it in a browser.

## HTTP Chunked
    node chunked.js
Then, in another terminal
    curl localhost:3000
