const ListContainer = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div className="border border-gray-400 my-10 ">
      <div className="flex flex-wrap ">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">Model</th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Description
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Manufacturer
                        </th>

                        <th className="pb-3 pr-12 text-end min-w-[175px]">
                          Source
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          Variant
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">Category</th>
                        <th className="pb-3 text-end min-w-[50px]">Tags</th>
                        <th className="pb-3 text-end min-w-[50px]">On Order</th>
                        <th className="pb-3 text-end min-w-[50px]">
                          Allocated
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">
                          Available
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(() => (
                        <tr className="border-b border-dashed last:border-b-0">
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                <img
                                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                  className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col justify-start">
                                <a
                                  href="javascript:void(0)"
                                  className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                >
                                  Social Media API
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <span className="font-semibold text-light-inverse text-md/normal">
                              Olivia Cambell
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                              </svg>{" "}
                              6.5%{" "}
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              In Progress
                            </span>
                          </td>
                          <td className="pr-0 text-start">
                            <span className="font-semibold text-light-inverse text-md/normal">
                              2023-08-23
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                              <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;