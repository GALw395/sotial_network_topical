import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://joarte.com/wp-content/uploads/2016/02/gal01-1024x576.jpg" alt="#" />
      </header>

      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>

      <div className="content">
        <div className="imges">
          <img src="https://klike.net/uploads/posts/2021-01/1610433559_5.jpg" alt="#" />
        </div>
        <div className="ava">
          ava + description
          <img src="https://cdnb.artstation.com/p/assets/covers/images/045/154/127/large/thibaut-granet-thibaut-granet-template-artstation-jinx.jpg?1642036430" alt="#" />
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
