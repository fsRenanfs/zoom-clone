class Media {
    async getCamera(audio = true, video = true){
        //Não funcionava em conexão HTTP, habilitando urls inseguras funcionou, https://stackoverflow.com/questions/56005165/navigator-getusermedia-and-navigator-webkitgetusermedia-undefined-after-updating
        return navigator.mediaDevices.getUserMedia({ 
            video, 
            audio
        })
    }
}