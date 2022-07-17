import {KeyIcon, LinkIcon} from '@heroicons/react/solid'

export default function About() {
  return (
    <>
      <div className="min-h-full">
        <main className="py-10">

            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                      Simple blog
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">About this project</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Author</dt>
                        <dd className="mt-1 text-sm text-gray-900">Bugs Bound</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">URL on GitHub</dt>
                        <dd className="cursor-pointer mt-1 text-sm text-blue-900 underline"><a href="https://github.com/BugsBound/react-express-blog" className="inline-flex"><LinkIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />react-express-blog</a></dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">What is it:</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          It's Pet project for final lesson on React.
                          This is my Final boss. Back-and use Express, JWT-auth, Postgress, Sequelize.
                          But Front-end use only React, axios and Tailwind.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>
        </main>
      </div>
    </>
  )
}
