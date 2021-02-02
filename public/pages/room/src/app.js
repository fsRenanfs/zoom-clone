requestUserName = () => {
  const name = prompt('User name')
  if (!name) {
      alert('wrong name')

      window.location = '/pages/home'     
  }

  return name
}

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');

  const userName = requestUserName()
  console.log(`Welcome to room ${room} ${userName}`)

  //const socketUrl = 'https://whispering-shelf-04920.herokuapp.com'
  const socketUrl = 'http://localhost:3000'
  const socketBuilder = new SocketBuilder({ socketUrl })

  const peerConfig = Object.values({
    id: undefined,
    config: {
      //host:'fierce-woodland-76655.herokuapp.com',
      //secure: true,
      port: 9000,
      host: 'localhost',
      path: '/'
    }
  })
  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media()
  const deps = {
    userName,
    view, 
    media,
    room, 
    socketBuilder,
    peerBuilder
  }

  Business.initialize(deps)
  // view.renderVideo({ userId: 'teste01', url: 'https://media.giphy.com/media/9DiiFpJVjsCXqrJUSy/giphy.mp4'})
  // view.renderVideo({ userId: 'teste01', url: 'https://media.giphy.com/media/9DiiFpJVjsCXqrJUSy/giphy.mp4'})
  
}

window.onload = onload