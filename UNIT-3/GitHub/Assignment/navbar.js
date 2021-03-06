function navbar(){
    return `<div id="logo">
    <a href="./index.html">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"
        alt=""
        srcset=""
      />
    </a>
  </div>
  <div id="search">
    <input id="search-input" type="text" placeholder="Search Github" />
  </div>

  <div id="options">
    <ul id="list">
      <li>Pull Requests</li>
      <li>Issues</li>
      <li>Marketplace</li>
      <li><a href="explore.html"> Explore</a></li>
    </ul>
  </div>

  <div id="profile">
      <img
      id="profile-img"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fRjYMjw7_Ymj8eNXiP5JNAHaEK%26pid%3DApi&f=1"
      alt=""
      srcset=""
    />
  </div>
  <h1 id="loginbtn" style="font-size:18px;cursor:pointer;color:blue; border: 2px solid blue;padding:2px 8px;">Login</h1>
  <h1 id="signupbtn" style="font-size:18px;cursor:pointer;color:blue; border: 2px solid blue;padding:2px 8px; margin-left:10px">Signup</h1>

  
</div>`
}

export {navbar}