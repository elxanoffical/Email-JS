'use client'

export default function Home() {
  // service_6dsq4t9
  // template_a0me2kw
  const handleSubmit = (e:any) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    alert(`Full name: ${fullName}\nEmail: ${email}\nMessage: ${message}`);

  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <h1 className="text-center py-[40px]">Email JS</h1>
        <section className="flex justify-center py-[40px]">
          <form
            onSubmit={handleSubmit}
            className="py-[30px] px-[30px] rounded-2xl shadow-xl flex flex-col gap-[10px]"
          >
            <h2 className="text-center text-2xl font-semibold tracking-wider">
              Contact Us
            </h2>
            <div className="flex flex-col gap-1">
              <label
                className="text-xl text-gray-300 tracking-wide font-extralight"
                htmlFor="fullName"
              >
                Full name
              </label>
              <input
                className=" text-2xl border border-gray-600 py-[2px] px-[8px] text-gray-300 rounded"
                type="text"
                id="fullName"
                name="fullName"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xl text-gray-300 tracking-wide font-extralight"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" text-2xl border border-gray-600 py-[2px] px-[8px] text-gray-300 rounded"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xl text-gray-300 tracking-wide font-extralight"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className=" text-2xl border border-gray-600 py-[2px] px-[8px] text-gray-300 rounded"
                id="message"
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-[8px] border border-gray-600 rounded hover:bg-amber-500 transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}