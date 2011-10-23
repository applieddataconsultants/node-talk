# Code Samples for NodeJS Intro

Here are some sample code pieces:

## Blocking / Non-Blocking I/O

### Blocking Example
An simple example of blocking I/O in C++.

Running the binary for the io.cpp program:

    ./a.out

If that doesn't work you probably have to compile on your box:

    g++ io.cpp
    ./a.out

### Non-Blocking Example
The similar example of the above, with non-blocking I/O in Node.

    node eventio.js

## TCP Chat Server
A simple TCP based chat server.  To run:

    node chat.js

Then load up chat clients other terminals using something like:

    telnet localhost 8000

or if you have NetCat:

    nc localhost 8000

## HTTP Server
A basic HTTP server in Node:

    node http.js

Then, in another terminal

    curl localhost:3000

Or just load it in a browser.

## HTTP Chunked
A simple example of how chunked encoding works in Node:

    node chunked.js

Then, in another terminal

    curl localhost:3000
