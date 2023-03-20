import React from 'react'
import '/Rectangle.svg';
import '/src/styles/Hero.css'

export const Hero = () => {
  return (
    <div className='Hero'>
      <div className='left-hero'>
          <div className='call-to-action'>
              <svg className="hero-vector" width="670" height="515" viewBox="0 0 670 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M650.3 258.517V258.517L652.228 261.993L654.158 265.517L656.064 269.089L657.922 272.709L659.709 276.376L661.403 280.086L662.985 283.836L664.436 287.623L665.74 291.44L666.884 295.283L667.858 299.146L668.655 303.024L669.269 306.91L669.697 310.8L669.94 314.688L670 318.569L669.879 322.439L669.581 326.293L669.112 330.128L668.478 333.939L667.686 337.725L666.743 341.483L665.658 345.211L664.445 348.91L663.117 352.579L661.691 356.221L660.181 359.84L658.605 363.439L656.975 367.022L655.308 370.594L653.614 374.16L651.906 377.726L650.192 381.297L648.479 384.876L646.773 388.47L645.078 392.081L643.395 395.714L641.725 399.371L640.065 403.053L638.414 406.764L636.766 410.502L635.116 414.267L633.458 418.059L631.786 421.875L630.09 425.712L628.363 429.568L626.595 433.436L624.779 437.313L622.905 441.193L620.964 445.068L618.946 448.932L616.845 452.778L614.65 456.596L612.354 460.377L609.95 464.114L607.431 467.796L604.79 471.414L602.022 474.957L599.121 478.415L596.084 481.777L592.906 485.034L589.586 488.173L586.12 491.185L582.508 494.06L578.751 496.786L574.847 499.354L570.8 501.754L566.612 503.977L562.285 506.015L557.825 507.859L553.238 509.502L548.529 510.938L543.705 512.163L538.775 513.17L533.748 513.959L528.633 514.526L523.441 514.873L518.184 515L512.873 514.911L507.52 514.61L502.137 514.104L496.739 513.401L491.336 512.511L485.943 511.445L480.572 510.217L475.235 508.842L469.943 507.336L464.709 505.716L459.541 504.001L454.448 502.21L449.439 500.361L444.52 498.474L439.694 496.566L434.967 494.654L430.338 492.754L425.81 490.878L421.381 489.039L417.049 487.25L412.812 485.52L408.668 483.862L404.612 482.286L400.64 480.802L396.747 479.421L392.928 478.153L389.176 477.008L385.485 475.997L381.847 475.129L378.255 474.412L374.7 473.854L371.172 473.463L367.662 473.244L364.161 473.202L360.659 473.34L357.145 473.659L353.609 474.159L350.04 474.839L346.429 475.694L342.767 476.718L339.044 477.905L335.252 479.243L331.384 480.722L327.433 482.328L323.393 484.047L319.26 485.861L315.032 487.754L310.706 489.705L306.283 491.696L301.763 493.704L297.149 495.709L292.446 497.689L287.659 499.623L282.794 501.489L277.859 503.266L272.865 504.934L267.822 506.474L262.739 507.867L257.631 509.097L252.508 510.149L247.385 511.009L242.273 511.666L237.188 512.109L232.141 512.331L227.146 512.326L222.214 512.089L217.359 511.62L212.591 510.917L207.92 509.983L203.356 508.82L198.907 507.434L194.581 505.83L190.384 504.016L186.323 502L182.4 499.792L178.621 497.399L174.988 494.834L171.504 492.104L168.17 489.221L164.987 486.195L161.958 483.034L159.081 479.748L156.359 476.346L153.792 472.836L151.381 469.225L149.125 465.522L147.026 461.733L145.085 457.865L143.301 453.924L141.674 449.918L140.204 445.853L138.892 441.734L137.734 437.569L136.729 433.365L135.869 429.133L135.147 424.882L134.551 420.625L134.068 416.373L133.68 412.139L133.37 407.937L133.116 403.781L132.896 399.682L132.685 395.653L132.457 391.705L132.187 387.849L131.847 384.094L131.41 380.447L130.85 376.915L130.139 373.5L129.255 370.206L128.172 367.032L126.869 363.977L125.327 361.037L123.53 358.208L121.462 355.481L119.114 352.848L116.477 350.298L113.549 347.82L110.328 345.4L106.818 343.025L103.027 340.679L98.9662 338.347L94.6506 336.014L90.0994 333.664L85.3352 331.28L80.3843 328.849L75.2763 326.355L70.0436 323.785L64.7217 321.126L59.3483 318.368L53.9632 315.5L48.608 312.514L43.3254 309.405L38.1591 306.168L33.1531 302.8L28.3511 299.302L23.7965 295.674L19.5315 291.922L15.5966 288.051L12.0305 284.069L8.8693 279.986L6.14604 275.814L3.89047 271.565L2.12855 267.255L0.882071 262.9L0.168361 258.517L0 254.123L0.384595 249.737L1.32461 245.376L2.81727 241.06L4.85451 236.806L7.423 232.631L10.5042 228.552L14.0747 224.583L18.1064 220.739L22.5671 217.03L27.4207 213.467L32.6282 210.058L38.1479 206.808L43.9365 203.72L49.9497 200.797L56.1436 198.037L62.4752 195.438L68.9039 192.996L75.3899 190.706L81.8939 188.559L88.3781 186.548L94.806 184.661L101.14 182.886L107.341 181.208L113.369 179.609L119.186 178.071L124.755 176.572L130.042 175.091L135.014 173.604L139.642 172.088L143.904 170.519L147.778 168.872L151.25 167.124L154.309 165.252L156.948 163.234L159.168 161.051L160.972 158.683L162.369 156.115L163.374 153.331L164.004 150.322L164.281 147.078L164.232 143.594L163.887 139.867L163.277 135.897L162.44 131.69L161.412 127.252L160.232 122.593L158.942 117.727L157.583 112.67L156.195 107.442L154.821 102.065L153.502 96.5635L152.275 90.9638L151.18 85.2945L150.251 79.5856L149.523 73.8683L149.025 68.1744L148.785 62.5365L148.828 56.9869L149.173 51.5577L149.837 46.2802L150.834 41.1847L152.173 36.2999L153.859 31.6527L155.894 27.2676L158.276 23.167L160.998 19.3702L164.051 15.8938L167.424 12.7509L171.101 9.95167L175.063 7.50258L179.291 5.40673L183.763 3.66378L188.455 2.26997L193.342 1.21828L198.399 0.498528L203.599 0.0976709L208.917 0L214.327 0.187474L219.805 0.640057L225.325 1.33605L230.866 2.25251L236.407 3.36572L241.928 4.65168L247.413 6.08655L252.846 7.64709L258.215 9.31109L263.508 11.0578L268.718 12.868L273.838 14.7248L278.863 16.6131L283.79 18.5205L288.618 20.4357L293.346 22.3454L297.971 24.2324L302.492 26.0763L306.908 27.8558L311.22 29.5518L315.433 31.1482L319.549 32.6319L323.575 33.9928L327.518 35.2239L331.385 36.3215L335.186 37.2848L338.928 38.1156L342.62 38.8184L346.271 39.3999L349.888 39.869L353.479 40.2358L357.051 40.5119L360.61 40.71L364.161 40.8433L367.709 40.9254L371.257 40.9701L374.807 40.991L378.361 41.0012L381.92 41.0129L385.485 41.0376L389.055 41.0858L392.628 41.1666L396.205 41.2877L399.782 41.4555L403.359 41.6749L406.934 41.9492L410.505 42.2802L414.07 42.6684L417.628 43.1128L421.179 43.6111L424.722 44.1598L428.258 44.7544L431.787 45.3895L435.311 46.0588L438.832 46.7557L442.352 47.4729L445.876 48.203L449.407 48.9386L452.949 49.6723L456.508 50.397L460.088 51.1061L463.696 51.7936L467.337 52.4541L471.017 53.0832L474.742 53.6772L478.517 54.2336L482.348 54.751L486.24 55.2289L490.196 55.6682L494.222 56.0709L498.319 56.4399L502.491 56.7796L506.738 57.0951L511.061 57.3928L515.46 57.6797L519.931 57.964L524.473 58.2542L529.082 58.5597L533.752 58.8902L538.477 59.2557L543.25 59.6667L548.062 60.1337L552.904 60.6673L557.766 61.2778L562.636 61.9756L567.503 62.7703L572.353 63.6712L577.174 64.687L581.953 65.8255L586.675 67.0936L591.328 68.4973L595.897 70.0412L600.371 71.7294L604.736 73.5654L608.976 75.5528L613.077 77.6948L617.023 79.9941L620.797 82.4526L624.385 85.0712L627.771 87.8496L630.941 90.7866L633.882 93.8795L636.583 97.1241L639.034 100.515L641.226 104.046L643.154 107.708L644.814 111.493L646.206 115.389L647.331 119.386L648.193 123.472L648.799 127.633L649.159 131.856L649.283 136.128L649.187 140.434L648.887 144.763L648.402 149.099L647.753 153.43L646.961 157.744L646.052 162.03L645.05 166.277L643.98 170.476L642.87 174.619L641.744 178.699L640.631 182.71L639.555 186.65L638.541 190.514L637.613 194.303L636.793 198.017L636.101 201.658L635.554 205.228L635.169 208.733L634.957 212.178L634.93 215.57L635.093 218.916L635.452 222.223L636.005 225.501L636.752 228.759L637.686 232.004L638.798 235.247L640.078 238.496L641.51 241.758L643.077 245.042L644.762 248.354L646.542 251.701L648.396 255.087L650.3 258.517" fill="#CFE1FC"/>
                
                
            </svg>
            <div className='vector-text-wrapper'>
              <h1 className='vector-text'>We love tutoring and teaching kids for education and for fun</h1>
            </div>
          </div>
        <a href='https://linktr.ee/qlsglobaleducation'><button className="vector-button" >Sign Up!</button></a>
      </div>
      <div className='right-hero'>
        <img className="Hero-Image" src="src/GEC/Wiliam.jpg"/>
        <img className='svg-rectangle' src='/Rectangle.svg' />
      </div>
    </div>
  )
}
