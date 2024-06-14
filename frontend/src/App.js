import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#615f60] to-[#170cb8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#615f60] to-[#170cb8] opacity-50"
        style={{
          clipPath:
            'polygon(64.1% 44.1%, 90% 61.6%, 87.5% 26.9%, 75.5% 0.1%, 70.7% 2%, 62.5% 32.5%, 50.2% 62.4%, 42.4% 68.1%, 37.5% 58.3%, 35.2% 34.5%, 17.5% 76.7%, -10.1% 64.9%, 7.9% 100%, 17.6% 76.8%, 66.1% 97.7%, 64.1% 44.1%)',
        }}
      />
      </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Therabot
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Therabot is a chatbot that provides therapy services to users. It is designed to
              provide a safe space for users to talk about their feelings and emotions. Using
              natural language processing, Therabot can understand and respond to users in a way
              that feels natural and human-like. Therabot is available 24/7 and can help users
              work through a variety of issues, including stress, anxiety, depression, and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/chatbox"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>
  );
}
