import {useState} from "react";
import { PaperClipIcon } from '@heroicons/react/solid'

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("")

  return (
    <div className="max-w-3xl mx-auto sm:p-20">
    <form action="#" className="relative">
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden ">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title}
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500"
          placeholder="Title"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          onChange={(e) => {
            setText(e.target.value)
          }}
          value={text}
          rows={2}
          name="description"
          id="description"
          className="block w-full border-0 py-0 resize-none placeholder-gray-500 sm:text-sm"
          placeholder="Write a description..."
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}

        <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
            >
              <PaperClipIcon className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" aria-hidden="true" />
              <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">Attach a file</span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 "
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}
