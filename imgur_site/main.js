import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="navbar">
  <div id='cont'>

  <a>
  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAABlCAMAAABOWWcrAAAAwFBMVEX/////1QAAW7shcL+qtneIppYYasH/7ZT/87RXk9L/+t7W5fT/9cL/87j/64X/2iH/4Ub/+NYhcMS0z+s/fan/41jE2e///vsEXrwzfMnM3vHe6vb1+fzs8/r//O//8KGUuuKbv+RtodiKtOBhmdWtyun//fT/64j/3z3/6HH/5WP/6n3/+dlypNlGiM5+rN0+g8z/++j/9stQjtD/3z7/8ajM3ep7p8ZdlsuUudmjw92ht6Ls8Obr7NbHzZnm6MumPLomAAAInElEQVR4nO1a64KiOgxGZw/qoDLqUVRQFLw76jiu57bn8v5vdRRtaZMUZHZd0PH7SZs2/ZomaYqmPfDAh9Abr0rr0mrcS1uRjMH22vkT2iM7bWWyhCHjJeBmmLY62cEmL8NPW6GsYJiHGKetUjbQ0xEzupO2UpmAj4jJ5x+u5og3gpl12kplAvgw5fP1tJXKBNoEM3raSmUCdYKZTtpKZQIjghkvbaUygQbBTDdtpbKBHSKmlLZKGYENPU39ceE+w5CpeXrctjmcURi6297jaiDC3nRO4XrzMBgEx+7aD3N54IEHHvi0cGyjm7FA4DQ23mg1oGK24a9Kni9dpboDb9c5YF3aDMkw77R8b33s8TbaXPiG5bQ2a5Zy6jvfEJpa/sjbtDBfEUpzTX3vKEtMF8gORd1aq3Vdr79txKm1Aatf7eA03Q6rTLDhDU8udukemNgZruWiT8ePJac1ghW0DqvTj8986bAGq1aaj8qUr8Oiv6+zxPasmuOHN4FSqK5QidAlxrSGsMbgtcUu5TE6DYEXn6gStleR3Iw7WCSffwtUWYUfVpKQp1SaDwuV5xAWUQ9kh5LSfDypSP4kWq0tbf4APNoJWLNtG1OVsONkDU2FLslL/vQoKJWPRKuRlK5TrsmQdBUNW3ph023NgdutnzayJ69WZFeWaLc8xRoObYG9OlQd7IwNzYuzUovkffllQ3juiVCaQS6vCHVKeb8Ptom3ZhR0HMgfhSHA9HmFwXDlbNXuByCpiRaBM4buAij9hEeGyocnDj4kEctqB0azBl9Df4afL6PgG4qTxEA8YxnU04UaYU1NrbRK+XBjojfjhODwQ+XCjYkydAKRJnVsR46ym4wY4blHrTSDB3qErMbpecRxF3vwY0gu3JjvBXzhS2gxB26ZZITSDPCJkXsJ+5KZjjZjwI/hy8ElZpcIcoDqxZw+Aiz4RyjNAAfnj2jdC+YJ/AzqOOKDPyXWPAay0eDafCxs1epGGgRkhttb64J5NmTHknLw74foKJP59xMM1erwewc6qayBekcC2MVN8uOZGYSaE7+nxOOnMKP7sZOQzNRXLaNntDzlwnSvYfTs1oaS3oWae3EKUvgJzNT5LS8hMxuWh/YUkWvEBqYS4vBfApuMnXpp2DKMhv+miKzXZkYfCUEiGTNCGu6QoUt0hcTtk98sqVypzWnXDNo9X5WZg7FLIyRi5k2UpMKfdLcjXAmr8zjEYaxLmeCYMpvrMdPejeG1NBEzcimGOE/yDQD+NhrmqmMs+gQqFS2Cmmsx0/aIGk8SZsDPWPgfv7bMO7Yqxhw+aPjuMEB9rsVMnfz7IwkzINNEmah82ij1hqoGqpCA/yG8DjM6XRRMwsxAFnWQvcMkHTnpgYpT6ldbnK1ehxnFv+FJmIGFuTjq8KE5d8BuZqURQMRehxlFKTYJM/A4Is1hMcCDHc7MYNdMVkNRaL8KM6ofNpMwA50kcgSQGcTAmRmUBLbJRya0iKswo/ph87dfAX7nTesnAOip/oAd4MvOn7DDX+eRoXb0viF3dBVmYNhgKOcAmrzJhE3PQPYFdqiADlXYoXD6joyN3jdUoLoKM6pf5lNh5tsvAN9o5WC3v8/f//kC8C8ShT2+sIb/4mVTZOYr/G6SuvVht1q80krlWUMRNrxkiRkkSDPz+vmYacLvuQmlG1qEkhm8OjTDbTCzRHpDyQDzi5n5ei/MuEjvOaUbUoAx8w4b0Gnc3igzNaQ3dZyQampmclas7G0wg22dt0QNz5lBrjn3DmSnsAO3qowzg10wGpw4cpwZFM5zSyA8gx1mN8IMseoZOE/4xITMYJszJzHCfFkZZ2ZCLHu2jdTrCM4MMgnZhU8i2jPOjLYg1m3uuWAfBewAnBmieRk64T72ULnirTBDRKcDzOp7X7O2RYq3Izgze0rYPRnd6xQpfgA3yKwzQ/ngeHBmqNN4gGnOKFZyggPOPjPP9AqiwZlJTGw4cTaYQVmFkLXgG0I8QmZIBx2BfnJmUHxbqJnZAlm0cWXQoQA7uGGbheNHLIStSSYtpDsX3NNPQOlkGP7Q5DAFR8zUQAeUtuyFxg+cJ4EZKt1RQsx2IkxBBkonp+qFQ1kUO6FRIcuVjCrpiZDHp+M6jaIgh+6aMH3mgGcmHAV6ghkUhSaBbrzILPpSMyIuDqK4hQqDSshrh617TQFoGeG+QMVRpQAmJciXWYB2SF0lekVFuGvSFWCrCNAITdkLwLiBLmwMIGkSDMMCQ8D7LLI3F3UAKRsy3FrU6lzk6eQl9i/zwgvgHkFYQCeBYyIrJ65uHjeEPImJayzA3eHt6avS3eBYQ96AsHWJr0Hljb56wQCS0cxEguUxYEjW4Gmh5pAWTvq6Mm02syOL4Buuo6PzBvECw6UG3OMMBlwRQj5mytFFNHaSW/GskwXLieAnmwolivhUnC6XMG4SVmsVoriZFbGEJoUWE4ZTGRU2+rwPWrbMP8+wkwnAL8UmrYRmMd5NV707r0uRHHNxzqXhvZHMyayi4qZgzhU6C6aGFoxVc6fLQpF62ujvC8upq/TfB6uoFJZV91XdwSofOhSUWrJhyu5yvljMp/vQ/qEPIq0ymKHalE3HbBaIYySg5laXhQr5lnMDQEkoUSsOMXkuF/duYb8vvm+jfMc9AN054+zuswDfjG7V+JOisjBN86Wq8gfPKOjgh8i7xJYn6WaVct9EpjIlut0f5EvPrApcSI2KxBEB8o6AVm42q8XX/iGoWNvKkrxGq2pv94WPVIGJ28kdgnijjIOqKHlnQI8K8fgcXgaXzmOhuJbdHegnyggoi7V3B+LlOQqqu+QdAv8b9LCYM5I8qUTese8PkcVxEbPoSssdwkKv3hTMwr0XWyhsl3F2Y1Y/S+UBQlnEDdAsfkZ74bBqhSZhOl+XN1ul/aGwnsvutDqfL5qL+XzqlqPfOh5IE/8DtWe8N24pR7kAAAAASUVORK5CYII=' 
  width="160px" height="40px"
  />
  </a>
  <button id='btn' type="button" class="btn btn-success">New post</button>
  <div id='serdiv'>
  <input id='inp' class="form-control me-1" type="search" placeholder="Images, #tags, @Users, Oh my!" aria-label="Search">
  <i id='icon' class="fa fa-search" style="font-size:25px;color:white"></i>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" fill="white" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
  <button id='btn' type="button" class="btn btn-primary">Go Add-free</button>
  <a id="sign"><p>Sign In</p></a>
  <button id='btn' type="button" class="btn btn-success">Sign Up</button>  
   </div>

   <div class='message'>
   <h4>When this baby hits 88 memes per hour...you're gonna see some serious stuff.</h4>
   </div>

   <div id='p'>
   <p>EXPOLRE TAGS</p>
    <p>MORE TAGS + </p>
   </div>
   <div id='tranding'>
   <div class="TrendingTags-container" style="width: 1098px;">
   <a class="Tag " href="/t/fishing?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/4bOlFT2_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 232px;">
   <div class="Tag-title" style="background-color: rgb(77, 84, 154);"><div class="Tag-name">fishing</div><div class="Tag-posts">FEATURED • 5,111 Posts</div>
   </div></a>
   <a class="Tag " href="/t/funny?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/9r1qCDq_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;">
   <div class="Tag-title" style="background-color: rgb(99, 56, 117);"><div class="Tag-name">funny</div><div class="Tag-posts">2,699,468 Posts</div></div></a><a class="Tag " href="/t/dog?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/59NSmVP_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;"><div class="Tag-title" style="background-color: rgb(0, 130, 97);"><div class="Tag-name">dog</div><div class="Tag-posts">211,784 Posts</div></div></a><a class="Tag " href="/t/aww?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/avRBRpN_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;"><div class="Tag-title" style="background-color: rgb(96, 174, 187);"><div class="Tag-name">aww</div><div class="Tag-posts">765,178 Posts</div></div></a><a class="Tag " href="/t/oc?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/4LBx79U_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;"><div class="Tag-title" style="background-color: rgb(171, 128, 184);"><div class="Tag-name">oc</div><div class="Tag-posts">40,000 Posts</div></div></a><a class="Tag " href="/t/memes?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/1z4dgZT_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;"><div class="Tag-title" style="background-color: rgb(186, 81, 159);"><div class="Tag-name">memes</div><div class="Tag-posts">574,194 Posts</div></div></a><a class="Tag " href="/t/gaming?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/nrFCOUB_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;"><div class="Tag-title" style="background-color: rgb(43, 26, 90);"><div class="Tag-name">gaming</div><div class="Tag-posts">298,768 Posts</div></div></a><a class="Tag " href="/t/staff_picks?source=featured_tag_module" style="background-image: url(&quot;https://i.imgur.com/DbQMO3A_d.jpg?maxwidth=800&amp;shape=thumb&amp;fidelity=high&quot;); height: 130px; width: 110px;"><div class="Tag-title" style="background-color: rgb(19, 45, 49);"><div class="Tag-name">staff picks</div><div class="Tag-posts">6,551 Posts</div></div></a></div>
   </div>
  </div>
`;

document.querySelector('#data').innerHTML = `

<div id='container'>
<div class="Dropdown-title1"><span class="caret1" >Most Viral</span> <span class="caret"></span></div>
<div class="Dropdown-title2">
<span class="caret1">Newest</span>
<span class="caret"></span>
<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="55" fill="white" class="bi bi-filter" viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg></span>
<span><i style="font-size:35px margin-top:10px"  class="fa">&#xf008;</i></span>
<span><i style="font-size:48px margin-top:10px" class="fa">&#xf0c8;</i></span>
</div>
</div>
`;

document.querySelector('#grids').innerHTML = `
<div id="grid">
<div class="r1"></div>
        <div  class="r2"></div>
        <div class="r3"></div>
        <div class="r4"></div>
        <div  class="r5"></div>
        <div class="r6"></div>        
        
</div>

`;
document.querySelector('#grids2').innerHTML = `
<div id="grid2">
<div class="r1"></div>
        <div  class="r2"></div>
        <div class="r3"></div>
        <div class="r4"></div>
        <div  class="r5"></div>
        <div class="r6"></div>        
        
</div>

`;
document.querySelector('#grids3').innerHTML = `
<div id="grid3">
<div class="r7"></div>
        <div  class="r8"></div>
        <div class="r9"></div>
        <div class="r10"></div>
        <div  class="r11"></div>
        <div class="r12"></div>        
        
</div>

`;