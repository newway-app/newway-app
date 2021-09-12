import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>newway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-green-nw">
          newway
        </h1>

        <p className="mt-3 text-2xl">
          let&apos;s create an app together
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">

          <a
            target="_blank" rel="noreferrer"
            href="https://www.youtube.com/channel/UC7MJ2lA2I5RBfn1Ocz8BJxQ"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-red-600 focus:text-blue-600"
          >
            <div className="flex gap-3 items-center mt-4">
              <svg height="32" viewBox="0 -77 512.00213 512" width="32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                  fill="#f00" />
                <path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff" />
              </svg>
              <h3 className="text-2xl font-bold">YouTube &rarr;</h3>
            </div>
            <p className="mt-4 text-base">
              subscribe on youtube
            </p>
          </a>

          <a
            target="_blank" rel="noreferrer"
            href="https://www.twitch.tv/newwayapp"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-700 focus:text-blue-600"
          >
            <div className="flex gap-3 items-center mt-4">
              <svg className="stroke-current fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                   width="32" height="32">
                <path
                  d="M 6 4 L 4 8 L 4 24 L 9 24 L 9 27 L 13 27 L 16 24 L 20 24 L 26 18 L 26 4 L 6 4 z M 8 6 L 24 6 L 24 17 L 21 20 L 15 20 L 12 23 L 12 20 L 8 20 L 8 6 z M 13 9 L 13 16 L 15 16 L 15 9 L 13 9 z M 17 9 L 17 16 L 19 16 L 19 9 L 17 9 z" />
              </svg>
              <h3 className="text-2xl font-bold">Twitch &rarr;</h3>
            </div>
            <p className="mt-4 text-base">
              follow on twitch
            </p>
          </a>

          <a
            target="_blank" rel="noreferrer"
            href="https://discord.gg/vqugZRf9ZN"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-500 focus:text-blue-600"
          >
            <div className="flex gap-3 items-center mt-4">
              <svg width="32" height="32" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="#5865F2" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3 className="text-2xl font-bold">Discord &rarr;</h3>
            </div>
            <p className="text-base mt-4">
              join discord
            </p>
          </a>

          <a
            target="_blank" rel="noreferrer"
            href="https://github.com/newway-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-500 focus:text-blue-600"
          >
            <div className="flex gap-3 items-center mt-4">
              <svg className="stroke-current fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                   width="32" height="32">
                <path
                  d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
              <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
            </div>
            <p className="mt-4 text-base">
              follow on github
            </p>
          </a>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="#"
        >
          made with hate<span className="mx-1 text-black text-xs">&#9829;</span>
          <Image src="/newway.svg" width="48" height="64" alt="newway logo" />
        </a>
      </footer>
    </div>
  );
}
