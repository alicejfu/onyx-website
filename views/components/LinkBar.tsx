import { React } from '../../deps.ts';

const LinkBar = () => {
  return (
    <div id='linkDiv'>
     <a className='linkLogos' id='github' target='_blank' href='https://github.com/oslabs-beta/onyx'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xlink="http://www.w3.org/1999/xlink" 
        aria-hidden="true" 
        focusable="false" 
        width="2.5em" 
        height="2.5em" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 1024 1024"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z" fill="white"/>
        </svg>
      </a>
     <a className='linkLogos' id='deno' target='_blank' href='https://deno.land/x/onyx'>
         <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" 
            aria-hidden="true" 
            focusable="false" 
            width="2.2em" 
            height="2.2em"
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 32 32">
                <path d="M14.74.011c-.073.005-.313.031-.532.052c-3.072.323-6.104 1.625-8.577 3.692A22.229 22.229 0 0 0 3.76 5.631C1.713 8.074.516 10.818.079 14.063c-.1.724-.1 3.151 0 3.875c.437 3.245 1.635 5.989 3.681 8.432a22.08 22.08 0 0 0 1.871 1.876c2.448 2.047 5.187 3.239 8.437 3.681c.719.1 3.151.1 3.869 0c3.245-.443 5.989-1.64 8.432-3.681a21.428 21.428 0 0 0 1.876-1.876c2.047-2.443 3.239-5.187 3.681-8.432c.1-.724.1-3.151 0-3.875c-.443-3.245-1.635-5.989-3.681-8.432a21.428 21.428 0 0 0-1.876-1.876C23.932 1.719 21.161.506 17.964.079c-.349-.048-.849-.068-1.787-.073c-.48-.011-.959-.011-1.432 0zm.197 1.697c0 .459.032 1.459.073 2.407c.025.464.052 1.131.063 1.479c.047 1.224.177 4.448.192 4.735l.021.287l-.177-.021a.561.561 0 0 1-.203-.041a3.787 3.787 0 0 1-.052-.604c-.12-2.547-.229-5.088-.328-7.631l-.027-.875l.115-.016c.057-.011.156-.02.219-.025h.104zm3.766-.093c.005.005.016 1.192.032 2.64c.015 1.448.031 2.756.047 2.896c.011.147.005.271-.016.276a.478.478 0 0 1-.213 0l-.177-.015l-.031-1.147l-.041-1.563c-.032-.692-.057-3.057-.037-3.119c.016-.043.057-.048.224-.016c.115.02.208.041.213.047zM9.599 2.932c.027.037.208 2.204.437 5.041l.161 1.953c.021.204.016.209-.109.287a.56.56 0 0 1-.156.084c-.011 0-.036-.104-.047-.229c-.057-.516-.265-2.985-.416-4.771c-.089-1.052-.167-1.991-.177-2.095c-.021-.172-.016-.187.083-.244c.131-.063.199-.079.224-.027zm10.833.792c.115.036.125.057.147.281c.041.396.031 2.276-.016 2.276c-.115 0-.349-.136-.369-.208a18.996 18.996 0 0 1-.021-1.24c0-1.281-.016-1.203.26-1.109zm-7.265.183c0 .109.027.692.057 1.312l.083 1.74c.032.687.037.661-.228.677c-.125.004-.125.004-.136-.193c-.011-.109-.025-.453-.052-.765c-.021-.317-.068-1-.099-1.516a28.728 28.728 0 0 0-.084-1.145c-.02-.199-.015-.204.089-.245a.8.8 0 0 1 .244-.041c.125-.005.125-.005.125.183zm10.916.541l.131.052l.032.527c.009.285.02.911.009 1.38l-.009.853l-.167-.077l-.167-.084l-.011-1.301c-.005-.724-.005-1.333.005-1.36c.015-.057.015-.057.176.011zm-7.187.516c.025.02.077 1.932.083 2.9l.005.584l-.187-.032c-.063-.004-.131-.015-.199-.025c-.011-.011-.125-2.927-.125-3.208v-.292l.199.027c.077.004.151.02.224.047zm9.063.276c.047.057.057.916.068 5.672c.009 5.457.009 5.599-.057 5.599a.267.267 0 0 1-.141-.047c-.057-.048-.063-.521-.083-5.183a492.66 492.66 0 0 0-.048-5.703l-.025-.568l.115.083c.068.047.14.115.177.147zm-3.527.807c.021.021.037.245.041.5c.021.869.021 6.199.005 6.213c-.009.011-.077-.011-.161-.041l-.14-.057V5.97l.115.02c.057.021.12.041.14.063zm-10.864.224c.016.104.031.344.047.541l.063.975c.041.692.036.74-.188.74c-.12 0-.135-.016-.151-.131c-.036-.235-.177-2.167-.156-2.203a.979.979 0 0 1 .317-.105c.027-.005.057.079.068.183zm-6.505 1l.192 1.943c.063.647.12 1.199.12 1.224c0 .047-.301.199-.333.161a120.517 120.517 0 0 1-.411-3.656c0-.093.301-.495.339-.448c.015.005.052.36.093.776zm15.426.417l.115.061l.005.855c.005.464.011.984.011 1.151c.011.355-.036.417-.251.339l-.119-.041v-.339c0-.187-.011-.735-.027-1.219l-.027-.875h.095a.55.55 0 0 1 .197.068zM6.787 9.213l.26 2.833l.136 1.453l-.156.156l-.147.151l-.031-.312c-.016-.172-.095-.973-.177-1.787c-.084-.807-.199-1.984-.26-2.609l-.109-1.135l.156-.141c.135-.129.151-.135.177-.063c.015.043.083.693.151 1.453zm-2.948.475c.088.776.317 2.839.516 4.583c.192 1.74.38 3.423.416 3.74c.032.312.084.787.115 1.063c.057.457.057.489-.005.536c-.093.073-.135.063-.135-.021c0-.036-.037-.333-.079-.656c-.068-.536-.188-1.453-.453-3.505c-.052-.411-.161-1.233-.235-1.828a454.963 454.963 0 0 1-.489-3.828c-.073-.536-.115-1.011-.104-1.063c.027-.109.26-.473.287-.453c.005.011.083.657.172 1.433zm-1.203 1.697l.244 1.921c.073.579.167 1.308.213 1.611l.073.552l-.084.072c-.047.037-.093.052-.109.037c-.015-.011-.047-.172-.072-.344c-.021-.172-.167-1.188-.323-2.245l-.281-1.927l.088-.265c.027-.095.063-.183.109-.267c.021 0 .079.387.141.855zm21.604-.516c.057.052.063.297.063 2.104v2.043h-.109c-.24 0-.235.063-.256-2.172l-.011-2.037h.125c.068 0 .156.027.188.063zm-8.615.704c.891.135 1.667.38 2.432.776c.495.255.735.432 1.287.957c.817.781 1.317 1.469 1.792 2.439c.687 1.405.957 2.656 1.296 6c.152 1.5.355 4.219.396 5.333c.011.323.041.853.063 1.176c.041.693.093.6-.516.896c-.848.412-1.661.693-2.735.953c-1.317.323-2.167.427-3.463.432l-.943.005l.005-.453c0-.249.025-.828.047-1.281c.12-2.187.093-4.957-.057-6.489c-.089-.885-.256-1.953-.349-2.187c-.02-.052.068-.1.459-.229c.713-.251 1.333-.557 1.421-.713c.172-.292-.129-.709-.515-.709c-.068 0-.272.073-.453.157c-.88.4-2.652.88-3.667.984c-.855.073-1.713.036-2.557-.104c-.417-.079-1.156-.355-1.771-.672c-.715-.371-1.152-.865-1.281-1.448c-.068-.313-.052-.943.041-1.297c.099-.391.369-.959.625-1.287c1.12-1.473 3.437-2.755 5.807-3.203a8.79 8.79 0 0 1 2.636-.036zm12.14.124c.141.057.156.073.156.209c.011 1.072-.015 3.525-.036 3.629c0 .037-.203.043-.292.005c-.057-.015-.063-.229-.063-1.963c0-1.245.016-1.948.043-1.948c.015 0 .109.031.192.063zm1.719 2.158l.141.063l-.027 3.255c-.031 4.151-.036 4.276-.187 4.635c-.24.584-.229.704-.209-1.869c.011-1.287.032-2.588.037-2.896c.011-.301.015-1.156.02-1.901c0-.895.011-1.343.043-1.343c.02 0 .104.025.181.057zm-23.667.984c.027.317.021.349-.099.599l-.125.271l-.047-.396c-.073-.629-.073-.656.079-.749c.068-.047.135-.079.145-.073c.016.011.036.167.047.349zm-2.432 2.369c.036.323.312 2.464.453 3.516c.213 1.625.229 1.86.135 1.76a20.336 20.336 0 0 1-.197-1.219c-.615-4.239-.609-4.213-.557-4.244c.104-.073.141-.032.167.187zm2.834 1.803c.027.099.141 1.167.141 1.296c0 .109-.141.209-.204.147c-.02-.021-.073-.355-.115-.74l-.093-.901l-.027-.197l.136.156c.068.073.12.151.161.24zm3.177 1.484c.041.041.073.199.109.62c.057.771.068.708-.093.708c-.167 0-.161.016-.219-.683c-.053-.703-.053-.692.052-.692c.052 0 .119.021.151.047zm3.12.057c.005.041.025.276.041.527c.011.244.047.807.079 1.239c.109 1.589.113 1.792.047 1.792c-.079 0-.084-.063-.172-1.183a59.184 59.184 0 0 0-.131-1.624c-.031-.428-.057-.787-.041-.792c.041-.047.156-.016.177.041zm-7.401.755c.025.037.177 1.297.359 3.016c.057.521.111 1.021.12 1.115l.021.167l-.099-.063a.195.195 0 0 1-.1-.192c0-.245-.171-1.88-.301-2.88a30.777 30.777 0 0 1-.131-1.109c0-.084.095-.115.131-.048zm22.708 1.646l-.025 1.645l-.1.147c-.224.333-.213.395-.203-1.448l.011-1.688l.145-.151a.963.963 0 0 1 .172-.147c.016 0 .016.74 0 1.647zm-3.635 2.61c.015 2.287.015 2.464-.048 2.536c-.041.041-.077.068-.088.057c-.025-.031-.068-5.016-.036-5.047c.015-.016.057-.021.088-.021c.052.016.068.292.084 2.475zm-12.855-1.568c.027.245.125 1.417.167 1.969c.021.364.021.38-.063.405c-.047.016-.104.011-.12-.005c-.025-.031-.115-.9-.219-2.249l-.031-.323h.125c.113 0 .119.011.14.203zm-3.093 1.38c.025.027.047.125.047.224c0 .104.047.636.099 1.183c.151 1.511.161 1.713.093 1.672c-.104-.057-.192-.147-.172-.172c0-.145-.015-.292-.041-.437a21.047 21.047 0 0 1-.077-.828a25.471 25.471 0 0 0-.084-.923c-.073-.687-.068-.771.016-.771c.041 0 .093.021.12.047zm1.859 2.646c.016.088.037.411.052.719c.032.588.016.629-.145.511c-.047-.037-.079-.183-.125-.631c-.083-.813-.083-.781.068-.765c.115.009.131.025.151.167zM8.697 13.459c-.411.177-.443.735-.057.927c.281.145.563.079.709-.167c.281-.437-.177-.973-.652-.76zm2.667.38a.604.604 0 0 0 0 1.021c.376.223.855-.073.855-.521c0-.432-.495-.724-.855-.505z" fill="white"/>
         </svg>
     </a>
    </div>
  )
}

export default LinkBar;