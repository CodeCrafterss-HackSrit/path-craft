import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50 max-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
            Coursify
            <strong className="font-extrabold text-black sm:block">
              {" "}
              Learn Smarter, Learn Faster.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Create your own personalized learning experience with Coursify.  
            Explore, customize, and achieve your goals with AI-powered personalized learning path.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring active:bg-primary/90 sm:w-auto"
              href="/dashboard"
            >
             LET THE MAGIC BEGIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
