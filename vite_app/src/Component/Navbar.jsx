import './Navbar.css'

function Navbar() {
  
    const nav =[
        {id : "1", title : "All"},
        {id : "2", title : "coke studio"},
        {id : "3", title : "UX"},
        {id : "4", title : "Case study"},
        {id : "5", title : "Music"},
        {id : "6", title : "bnagla lofi"},
        {id : "7", title : "Tour"},
        {id : "8", title : "Saintmartin"},
        {id : "9", title : "Tech"},
        {id : "10", title : "iphone 13"},
        {id : "11", title : "User Interface Design"},
        {id : "12", title : "computer"},
    ]

    return (
      <>
  
    
<div className="main3">
    <input className="search" type="text" placeholder="Search"/>
    <div className="search1">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt=""/>
    </div>
    <div className="mic">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt=""/>
    </div>
    <div className="create">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt=""/>
    </div>
    <div className="bell">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt=""/>
    </div>
    <div className="more">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt=""/>
    </div>
    <div className="profile">
        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png" alt=""/>
    </div> 

    <hr/>

    <div className="main4">

        {nav.map((Title) => (
              <div className="nav">{Title.title}</div>
            ))}
            
    </div>
</div>


      </>
    )
  }
  
  export default Navbar