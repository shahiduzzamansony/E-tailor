import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              Difference between SQL and NoSQL
            </h2>
            <p>
              The Main Differences:
              <br /> Type – SQL databases are primarily called as Relational
              Databases (RDBMS); whereas NoSQL database are primarily called as
              non-relational or distributed database.
              <br /> Language – SQL databases defines and manipulates data based
              structured query language (SQL). Seeing from a side this language
              is extremely powerful. SQL is one of the most versatile and
              widely-used options available which makes it a safe choice
              especially for great complex queries. But from other side it can
              be restrictive. SQL requires you to use predefined schemas to
              determine the structure of your data before you work with it. Also
              all of your data must follow the same structure. This can require
              significant up-front preparation which means that a change in the
              structure would be both difficult and disruptive to your whole
              system.
              <br /> Scalability – In almost all situations SQL databases are
              vertically scalable. This means that you can increase the load on
              a single server by increasing things like RAM, CPU or SSD. But on
              the other hand NoSQL databases are horizontally scalable. This
              means that you handle more traffic by sharding, or adding more
              servers in your NoSQL database. It is similar to adding more
              floors to the same building versus adding more buildings to the
              neighborhood. Thus NoSQL can ultimately become larger and more
              powerful, making these databases the preferred choice for large or
              ever-changing data sets.
              <br /> Structure – SQL databases are table-based on the other hand
              NoSQL databases are either key-value pairs, document-based, graph
              databases or wide-column stores. This makes relational SQL
              databases a better option for applications that require multi-row
              transactions such as an accounting system or for legacy systems
              that were built for a relational structure.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              What is JWT, and how does it work?
            </h2>
            <p>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              What is the difference between javascript and NodeJS?
            </h2>
            <p>
              1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language. As a result, it is used to create
              network-centric applications. It's a networked system made for
              data-intensive real-time applications. If we compare node js vs.
              python, it is clear that node js will always be the preferred
              option.
              <br /> 2. JavaScript is a simple programming language that can be
              used with any browser that has the JavaScript Engine installed.
              Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language. It requires
              libraries that can be conveniently accessed from JavaScript
              programming to be more helpful. <br />
              3. Any engine may run JavaScript. As a result, writing JavaScript
              is incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
              <br /> 4. A specific non-blocking operation is required to access
              any operating system. There are a few essential objects in
              JavaScript, but they are entirely OS-specific. Node.js, on the
              other hand, can now operate non-blocking software tasks out of any
              JavaScript programming. It contains no OS-specific constants.
              Node.js establishes a strong relationship with the system files,
              allowing companies to read and write to the hard drive.
              <br /> 5. The critical benefits of JavaScript include a wide
              choice of interfaces and interactions and just the proper amount
              of server contact and direct visitor input.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-6">
        <div className="card bg-violet-600 text-white">
          <div className="card-body">
            <h2 className="card-title rext-3xl">
              How does NodeJS handle multiple requests at the same time?
            </h2>
            <p>
              Given a NodeJS application, since Node is single threaded, say if
              processing involves a Promise.all that takes 8 seconds, does this
              mean that the client request that comes after this request would
              need to wait for eight seconds? No. NodeJS event loop is single
              threaded. The entire server architecture for NodeJS is not single
              threaded. Before getting into the Node server architecture, to
              take a look at typical multithreaded request response model, the
              web server would have multiple threads and when concurrent
              requests get to the webserver, the webserver picks threadOne from
              the threadPool and threadOne processes requestOne and responds to
              clientOne and when the second request comes in, the web server
              picks up the second thread from the threadPool and picks up
              requestTwo and processes it and responds to clientTwo. threadOne
              is responsible for all kinds of operations that requestOne
              demanded including doing any blocking IO operations. The fact that
              the thread needs to wait for blocking IO operations is what makes
              it inefficient. With this kind of a model, the webserver is only
              able to serve as much requests as there are threads in the thread
              pool. NodeJS Web Server maintains a limited Thread Pool to provide
              services to client requests. Multiple clients make multiple
              requests to the NodeJS server. NodeJS receives these requests and
              places them into the EventQueue . NodeJS server has an internal
              component referred to as the EventLoop which is an infinite loop
              that receives requests and processes them. This EventLoop is
              single threaded. In other words, EventLoop is the listener for the
              EventQueue. So, we have an event queue where the requests are
              being placed and we have an event loop listening to these requests
              in the event queue. What happens next? The listener(the event
              loop) processes the request and if it is able to process the
              request without needing any blocking IO operations, then the event
              loop would itself process the request and sends the response back
              to the client by itself. If the current request uses blocking IO
              operations, the event loop sees whether there are threads
              available in the thread pool, picks up one thread from the thread
              pool and assigns the particular request to the picked thread. That
              thread does the blocking IO operations and sends the response back
              to the event loop and once the response gets to the event loop,
              the event loop sends the response back to the client. How is
              NodeJS better than traditional multithreaded request response
              model? With traditional multithreaded request/response model,
              every client gets a different thread where as with NodeJS, the
              simpler request are all handled directly by the EventLoop. This is
              an optimization of thread pool resources and there is no overhead
              of creating the threads for every client request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
