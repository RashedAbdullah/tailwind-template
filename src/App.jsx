/* eslint-disable react/no-unescaped-entities */
export const App = () => {
  return (
    <div className="bg-[#F1F1F1] font-Roboto font-light">
      <main className="flex items-center justify-center max-w-3xl m-auto py-10 flex-col gap-6">
        <div className="bg-white flex p-5 rounded-lg gap-5">
          <div className="bg-[#f2f6fa] flex flex-col p-2 items-center justify-between rounded max-h-24 m-auto">
            <p>
              <i className="fa-solid fa-plus text-[#CBC9E1]"></i>
            </p>
            <p className="font-bold text-primary">12</p>
            <p>
              <i className="fa-solid fa-minus text-[#CBC9E1]"></i>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-normal">
                  <img
                    src="https://avatar.iran.liara.run/public/32"
                    alt="avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span>Amyrobson</span>
                </div>
                <p>1 month ago</p>
              </div>
              <p className="text-primary font-bold">
                <i className="fa-solid fa-reply"></i>
                <span className="ml-2">Reply</span>
              </p>
            </div>
            <article className="text-lg mt-3">
              Impresive! Though it seems the drag feature could be imporved. But
              overall it looks incredible. you have nailded the design and the
              responsiveness at various breakpoints works really well.
            </article>
          </div>
        </div>
        <div className="bg-white flex p-5 rounded-lg gap-5">
          <div className="bg-[#f2f6fa] flex flex-col p-2 items-center justify-between rounded max-h-24 m-auto">
            <p>
              <i className="fa-solid fa-plus text-[#CBC9E1]"></i>
            </p>
            <p className="font-bold text-primary">5</p>
            <p>
              <i className="fa-solid fa-minus text-[#CBC9E1]"></i>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-normal">
                  <img
                    src="https://avatar.iran.liara.run/public/32"
                    alt="avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span>Maxblagun</span>
                </div>
                <p>2 weeks ago</p>
              </div>
              <p className="text-primary font-bold">
                <i className="fa-solid fa-reply"></i>
                <span className="ml-2">Reply</span>
              </p>
            </div>
            <article className="text-lg mt-3">
              Woah! Your prjoject looks awesome! How long yave you coding for?
              I'm still new. but think I want to dive into react as well soon.
              Perhaps you can give me an insight on where i can learn React?
              Thanks!
            </article>
          </div>
        </div>

        {/* <!-- With col border --> */}
        <div className="grid grid-cols-12 divide-x">
          <div></div>
          <div className="border-l-8 border-[#E2EAEE]"></div>
          <div className="col-span-10 border-none flex flex-col gap-5">
            <div className="bg-white flex p-5 rounded-lg gap-5 max-w-2xl">
              <div className="bg-[#f2f6fa] flex flex-col p-2 items-center justify-between rounded max-h-24 m-auto">
                <p>
                  <i className="fa-solid fa-plus text-[#CBC9E1]"></i>
                </p>
                <p className="font-bold text-primary">4</p>
                <p>
                  <i className="fa-solid fa-minus text-[#CBC9E1]"></i>
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-normal">
                      <img
                        src="https://avatar.iran.liara.run/public/32"
                        alt="avatar"
                        className="h-8 w-8 rounded-full"
                      />
                      <span>Ramsesmiro</span>
                    </div>
                    <p>1 weeks ago</p>
                  </div>
                  <p className="text-primary font-bold">
                    <i className="fa-solid fa-reply"></i>
                    <span className="ml-2">Reply</span>
                  </p>
                </div>
                <article className="text-lg mt-3">
                  <span className="text-primary font-bold">@Maxblagun</span> If
                  yo're still new, i'd recommend focusing on the fundamentals of
                  HTML, CSS and JS before considering React. It's very tempting
                  to jump ahead but lay a solid foundation first.
                </article>
              </div>
            </div>
            <div className="bg-white flex p-5 rounded-lg gap-5 max-w-2xl">
              <div className="bg-[#f2f6fa] flex flex-col p-2 items-center justify-between rounded max-h-24 m-auto">
                <p>
                  <i className="fa-solid fa-plus text-[#CBC9E1]"></i>
                </p>
                <p className="font-bold text-primary">5</p>
                <p>
                  <i className="fa-solid fa-minus text-[#CBC9E1]"></i>
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-normal">
                      <img
                        src="https://avatar.iran.liara.run/public/32"
                        alt="avatar"
                        className="h-8 w-8 rounded-full"
                      />
                      <span>Maxblagun</span>
                    </div>
                    <p className="bg-primary text-white px-2 rounded">you</p>
                    <p>2 days ago</p>
                  </div>
                  <div className="font-bold flex items-center gap-5">
                    <p className="text-red-500">
                      <i className="fa-solid fa-trash"></i>
                      <span className="ml-2">Delete</span>
                    </p>
                    <p className="text-primary flex gap-1 items-center">
                      <i className="fa-solid fa-pencil"></i>
                      <span>Edit</span>
                    </p>
                  </div>
                </div>
                <article className="text-lg mt-3">
                  <span className="font-bold text-primary">@Ramsesmiro</span> I
                  couldn't agree more with this. Everything moves so fast and it
                  always seems like everyone knows the newest library /
                  framwork. but the fundamentals are what stay constant.
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- input box --> */}
        <div className="bg-white flex p-5 rounded-lg gap-5 w-full">
          <form action="" className="flex justify-evenly w-full">
            <div>
              <img
                src="https://avatar.iran.liara.run/public/32"
                alt="user"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div>
              <textarea
                className="border p-2 resize-none outline-primary"
                name=""
                id=""
                cols="65"
                rows="4"
                placeholder="Add a comment"
              ></textarea>
            </div>
            <div>
              <button className="py-2 px-6 rounded-lg text-xl text-white bg-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
