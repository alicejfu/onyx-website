import { React } from '../../deps.ts';

const Strategies = () => {
    return (
        <div className="parentDivs">
          <div className='stratIntro'>
          <h1 className="headers">Strategies</h1>
          <p>Each strategy links to where it lives on Deno.land. Please use the URL in your <code>import</code> line to use the ES module.
          More strategies will appear here as they are developed. Feel free to create your own strategy and make a pull request to the Onyx repo!</p>
          </div>
          <div id="strategyContainer">
              <a
                className="strategy" 
                href='https://deno.land/x/onyx/src/strategies/local-strategy/local-strategy.ts'
                target='_blank'>
                  <span className='stratName'>Local Strategy</span>
                  <p className='stratDescript'>Local authentication strategy for Onyx</p>
                </a>
          </div>
        </div>
    )
}

export default Strategies;