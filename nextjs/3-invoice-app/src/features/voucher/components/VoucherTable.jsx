import React from "react";

const VoucherTable = () => {
  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem]  mx-auto mt-1.5">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className=" min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                      Invoices
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Create invoices, edit, download and more.
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="#"
                      >
                        View all
                      </a>

                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        Create
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Header */}

                {/* Collapse */}
                <div className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-900 dark:border-neutral-700">
                  <button
                    type="button"
                    className="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800 dark:text-neutral-200"
                    id="hs-as-table"
                    aria-expanded="false"
                    aria-controls="hs-as-table-label"
                    data-hs-collapse="#hs-as-table-label"
                  >
                    <svg
                      className="hs-collapse-open:rotate-90 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    Insights
                  </button>
                  <div
                    id="hs-as-table-label"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-as-table"
                  >
                    <div className="pb-4 px-6">
                      <div className="flex items-center space-x-2">
                        <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                          <svg
                            className="shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-800 dark:text-neutral-400">
                          There are no insights for this period.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Collapse */}

                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                            Invoice number
                          </span>
                          <div className="hs-tooltip">
                            <div className="hs-tooltip-toggle">
                              <svg
                                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                              </svg>
                              <span
                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700"
                                role="tooltip"
                              >
                                Invoice number related popup
                              </span>
                            </div>
                          </div>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                            Amount
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                            Status
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                            Due
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                            Created
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ2189H1-0038
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $400.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              10 Jan 2023
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              28 Dec, 12:12
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ218ADD-0099
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $200.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              06 Jan 2023
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              20 Dec, 09:27
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ218F94-0061
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $994.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                              </svg>
                              Declined
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              01 Jan 2023
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              14 Dec, 09:45
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ2138D4-0038
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $4,150.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              29 Dec
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              01 Dec, 16:59
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ2138R2-0012
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $2,489.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              29 Dec
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              01 Dec, 16:59
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ2131GS-0010
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $47.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              28 Dec
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              28 Nov, 11:00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ288UUE-3892
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $2,220.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              24 Dec
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              20 Dec, 09:27
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ2189C7-3822
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $80.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                              </svg>
                              Declined
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              29 Nov
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              28 Nov, 12:04
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                              #ADUQ2138F2-0099
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              US $1,249.00
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Paid
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              29 Nov
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              01 Nov, 14:32
                            </span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                        >
                          <span className="px-6 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 font-medium bg-white text-gray-700 shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* End Table */}

                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      <span className="font-semibold text-gray-800 dark:text-neutral-200">
                        9
                      </span>{" "}
                      results
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Prev
                      </button>

                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        Next
                        <svg
                          className="size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}

      {/* Modal */}
      <div
        id="hs-ai-invoice-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-ai-invoice-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto dark:bg-neutral-800">
            <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
              {/* Close Button */}
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-white/70 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-ai-invoice-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}

              {/* SVG Background Element */}
              <figure className="absolute inset-x-0 bottom-0">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1920 100.1"
                >
                  <path
                    fill="currentColor"
                    className="fill-white dark:fill-neutral-800"
                    d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                  ></path>
                </svg>
              </figure>
              {/* End SVG Background Element */}
            </div>

            <div className="relative z-10 -mt-12">
              {/* Icon */}
              <span className="mx-auto flex justify-center items-center size-15.5 rounded-full border border-gray-200 bg-white text-gray-700 shadow-2xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
              {/* End Icon */}
            </div>

            {/* Body */}
            <div className="p-4 sm:p-7 overflow-y-auto">
              <div className="text-center">
                <h3
                  id="hs-ai-invoice-modal-label"
                  className="text-lg font-semibold text-gray-800 dark:text-neutral-200"
                >
                  Invoice from Preline
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  Invoice #3682303
                </p>
              </div>

              {/* Grid */}
              <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div>
                  <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Amount paid:
                  </span>
                  <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                    $316.8
                  </span>
                </div>
                {/* End Col */}

                <div>
                  <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Date paid:
                  </span>
                  <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                    April 22, 2020
                  </span>
                </div>
                {/* End Col */}

                <div>
                  <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Payment method:
                  </span>
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="size-5"
                      width="400"
                      height="248"
                      viewBox="0 0 400 248"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M254 220.8H146V26.4H254V220.8Z"
                          fill="#FF5F00"
                        />
                        <path
                          d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                          fill="#F79E1B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="400" height="247.2" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                      •••• 4242
                    </span>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}

              <div className="mt-5 sm:mt-10">
                <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                  Summary
                </h4>

                <ul className="mt-3 flex flex-col">
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                    <div className="flex items-center justify-between w-full">
                      <span>Payment to Front</span>
                      <span>$264.00</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                    <div className="flex items-center justify-between w-full">
                      <span>Tax fee</span>
                      <span>$52.8</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                    <div className="flex items-center justify-between w-full">
                      <span>Amount paid</span>
                      <span>$316.8</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="mt-5 flex justify-end gap-x-2">
                <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Invoice PDF
                </a>
                <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width="12" height="8" x="6" y="14" />
                  </svg>
                  Print
                </a>
              </div>
              {/* End Buttons */}

              <div className="mt-5 sm:mt-10">
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  If you have any questions, please contact us at{" "}
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                    href="#"
                  >
                    example@site.com
                  </a>{" "}
                  or call at{" "}
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                    href="tel:+1898345492"
                  >
                    +1 898-34-5492
                  </a>
                </p>
              </div>
            </div>
            {/* End Body */}
          </div>
        </div>
      </div>
      {/* End Modal */}
    </>
  );
};

export default VoucherTable;
