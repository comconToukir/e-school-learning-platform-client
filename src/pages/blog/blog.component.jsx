const blogData = [
  {
    id: `fdggf`,
    h2: `What is CORS?`,
    p: `Cross-origin resource sharing (CORS) is a browser security feature
  that restricts cross-origin HTTP requests that are initiated from
  scripts running in the browser. If your REST API's resources receive
  non-simple cross-origin HTTP requests, you need to enable CORS
  support. CORS also relies on a mechanism by which browsers make a
  "preflight" request to the server hosting the cross-origin resource,
  in order to check that the server will permit the actual request. In
  that preflight, the browser sends headers that indicate the HTTP
  method and headers that will be used in the actual request.`,
  },
  {
    id: `ghjgvb`,
    h2: `Why are you using firebase? What other options do you have to
  implement authentication?`,
    p: `Firebase Authentication provides backend services, easy-to-use SDKs,
  and ready-made UI libraries to authenticate users to your app. It
  supports authentication using passwords, phone numbers, popular
  federated identity providers like Google, Facebook and Twitter, and
  more. Firebase Authentication integrates tightly with other Firebase
  services, and it leverages industry standards like OAuth 2.0 and
  OpenID Connect, so it can be easily integrated with your custom
  backend.`,
    p2: `Some alternatives to firebase authentication are Supabase, Okta, Auth0, OneLogin, Ory etc.`
  },
  {
    id: `mghjhgj`,
    h2: `How does the private route work?`,
    p: `Private Routes in React Router (also called Protected Routes) require
  a user being authorized to visit a route (read: page). So if a user is
  not authorized for a specific page, they cannot access it. The most
  common example is authentication in a React application where a user
  can only access the protected pages when they are authorized (which
  means in this case being authenticated). Authorization goes beyond
  authentication though. For example, a user can also have roles and
  permissions which give a user access to specific areas of the
  application.`,
  },
  {
    id: `dgdfvbc`,
    h2: `What is Node? How does Node work?`,
    p: `As an asynchronous event-driven JavaScript runtime, Node.js is
  designed to build scalable network applications. This is in contrast
  to today's more common concurrency model, in which OS threads are
  employed. Thread-based networking is relatively inefficient and very
  difficult to use. Furthermore, users of Node.js are free from worries
  of dead-locking the process, since there are no locks. Almost no
  function in Node.js directly performs I/O, so the process never blocks
  except when the I/O is performed using synchronous methods of Node.js
  standard library. Because nothing blocks, scalable systems are very
  reasonable to develop in Node.js. `,
    p2: `Node.js is similar in design to, and
  influenced by, systems like Ruby's Event Machine and Python's Twisted.
  Node.js takes the event model a bit further. It presents an event loop
  as a runtime construct instead of as a library. In other systems,
  there is always a blocking call to start the event-loop. Typically,
  behavior is defined through callbacks at the beginning of a script,
  and at the end a server is started through a blocking call like
  EventMachine::run(). In Node.js, there is no such start-the-event-loop
  call. Node.js simply enters the event loop after executing the input
  script. Node.js exits the event loop when there are no more callbacks
  to perform. This behavior is like browser JavaScript — the event loop
  is hidden from the user.`,
  },
];

const Blog = () => {
  return (
    <div className="bg-base-200 mt-8 p-4 rounded-md shadow-sm flex flex-col w-full border-opacity-50">
      {blogData.map((data) => (
        <div key={data.id}>
          <div className="divider">Blog post</div>
          <div className="grid card bg-base-300 rounded-box place-items-center p-5 my-4">
            <h2 className="bg-base-200 w-full text-center text-2xl font-semibold p-4 mb-5 rounded-md">
              {data.h2}
            </h2>
            <p className="p-4 w-full md:w-3/4">
              {data.p}{" "}
              {data.p2 ? (
                <>
                  <br />
                  <br />
                  {data.p2}
                </>
              ) : null}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
