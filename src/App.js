import {useState} from "react"
import bgBottom from "./images/bg-bottom.svg"
import bgTop from "./images/bg-top.svg"
  function App() {
    const [annualy, setAnnually] = useState(false)
  return (
    <>
    <div className="absolute top-0 right-0 -z-10"><img src={bgTop} alt="" className="w-full max-w-full"/></div>
      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 className="text-center text-slate-700 text-4xl mb-8"> Our Pricing </h1>
        <div class="toggle lg:mb-10">
          <label class="name">Annually</label>
          <input type="checkbox" class="checkbox" id="checkbox" checked={annualy} onChange={() => setAnnually(!annualy)}></input>

          <label for="checkbox" class="label">
          <div class="ball"></div> </label>

          <label class="name">Monthly</label>

        </div>
        <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
          <article className="p-8 rounded shadow bg-white lg:w-full">
            <h2 className=" text-slate-700 mb-5 text-xl">Basic</h2>
            {annualy && (<h3 className="flex items-center justify-center text-slate-700 text-5xl">
              <span>$</span>19.99
            </h3>)}
            {!annualy && (<h3 className="text-slate-700 text-5xl justify-center">
              <span className="mr-3 text-3xl">$</span>199.99
            </h3>)}
            <ul className="flex flex-col justify-center my-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">
                500 GB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-600">
                2 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-600">
                Send up to 3 GB
              </li>
            </ul>
            <button
              className="article2 btn
             py-3 w-full shadow hover:border-2 rounded-lg uppercase cursor-pointer border-2 duration-200  text-indigo-800"
            >
              Learn More
            </button>
          </article>
          <article className="p-8 rounded shadow article2 lg:w-full lg:scale-110">
            <h2 className="text-white mb-5 text-xl">Professional</h2>
           {annualy && ( <h3 className="flex items-center text-white justify-center text-5xl">
              <span className="text-3xl mr-3">$</span>24.99
            </h3>)}
           {!annualy && ( <h3 className="text-white text-5xl justify-center">
              <span className="mr-3 text-3xl">$</span>249.99
            </h3>)}
            <ul className="flex flex-col justify-center my-8">
              <li className="border-t border-white py-3 text-white">
                1 TB Storage
              </li>
              <li className="border-t border-white py-3  text-white">
                5 Users Allowed
              </li>
              <li className="border-y border-white py-3  text-white">
                Send up to 10 GB
              </li>
            </ul>
            <button className="btn2 bg-white py-2 w-full shadow border-2 rounded-lg uppercase text-indigo-600 border-white cursor-pointer hover:text-white hover:bg-indigo-500 hover:bg-transparent transition-all duration-200">
              Learn More
            </button>
          </article>
          <article className="p-8 rounded shadow bg-white lg:w-full">
            <h2 className=" text-slate-700 mb-5 text-xl">Master</h2>
            {annualy && (<h3 className="flex items-center text-slate-700 text-5xl justify-center">
              
              <span className="text-3xl mr-3">$</span>39.99
            </h3>)}
            {!annualy && (<h3 className="text-slate-700 text-5xl justify-center">
              <span className="mr-3 text-3xl">$</span>399.99
            </h3>)}
            <ul className="flex flex-col justify-center my-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">
                2 TB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-600">
                10 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-600">
                Send up to 20 GB
              </li>
            </ul>
            <button className="article2 btn
             py-3 w-full shadow hover:border-2 rounded-lg uppercase cursor-pointer border-2 duration-200 text-indigo-800">Learn More</button>
          </article>
        </div>

        <br/>
        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#" target="_blank" rel="noreferer">Toluwashe Jegede</a>.
        </div>
      </section>
      <div className="absolute left-0 bottom-0 -z-10"><img src={bgBottom} alt="" className="w-full max-w-full"/></div>
    </>
  )
}

export default App;
