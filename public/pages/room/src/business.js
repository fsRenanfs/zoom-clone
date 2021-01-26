class Business {
    constructor({ room, media, view, socketBuilder }){
        this.room = room
        this.media = media
        this.view = view
        this.socketBuilder = socketBuilder
            .setOnUserConnected(this.onUserConnected())
            .setOnUserDisconnected(this.onUserDisconnected())
            .build()
        this.socketBuilder.emit('join-room', this.room, 'teste01')            
        this.currentStream = {}
    }

   static initialize(deps) {
        const instance = new Business(deps)
        return instance._init()
    }

    async _init() {
        this.currentStream = await this.media.getCamera()
        console.log('Media stream', this.currentStream)
        this.addVideoStream('Renan')
    }

    addVideoStream(userId, stream = this.currentStream) {
        const isCurrentId = false
        this.view.renderVideo({
            userId,
            stream,
            isCurrentId
        })
    }

    onUserConnected = function() {
        console.log('con')
        return userId => {
            console.log('user connected!', userId)
        }
    }

    onUserDisconnected = function() {
        console.log('discon')
        return userId => {
            console.log('user disconnected!', userId)
        }
    }
}