

let click = document.getElementById("click")
let audio = document.getElementById("audio");
let blackScreen = document.getElementById("black-screen");
let intro = document.getElementById("intro");
let jumpscare = document.getElementById("jumpscare");
let jumpscareDiv = document.getElementById("jumpscareDiv");
let error = document.getElementById("error");
let background = document.getElementById("background");
let piano = document.getElementById("piano")
let ChangeMusic = document.getElementById("change-music")
let TheWayYouAre = document.getElementById("just-the-say-you-are")



function playError(duration) {
    error.play()
    error.style.display = "block";
    audio.play();
    setTimeout(() => {
        error.style.display = "none";
        audio.pause();
    }, duration);

}

function EndGame(EndName) {
    //rearrange everything
    TheWayYouAre.play()
    if (TheWayYouAre.currentTime < 40) {
        TheWayYouAre.currentTime = 40;
    }
    TheWayYouAre.volume = 0.25;
    document.getElementById("cream").style.backgroundColor = "#F3E5AB"
    document.getElementById("c1").style.backgroundColor = "#eee2b1"
    document.getElementById("c2").style.backgroundColor = "#eee2b1"
    document.getElementById("c3").style.backgroundColor = "#eee2b1"
    document.getElementById("c4").style.backgroundColor = "#eee2b1"
    document.getElementById("c5").style.backgroundColor = "#eee2b1"
    document.getElementById("candle").style.display = "block"
    document.getElementById("flame").style.display = "block"
    const CreamLayer1 = document.getElementById("l2")
    const CreamLayer2 = document.getElementById("l4")
    CreamLayer1.style.backgroundColor = "#F3E5AB"
    CreamLayer1.style.boxShadow = "0px 2px 0px 0px #DED19B, 0px 4px 0px 0px #D9CC97, 0px 6px 0px 0px #D4C793, 0px 8px 0px 0px #CFC28F"
    CreamLayer2.style.backgroundColor = "#F3E5AB"
    CreamLayer2.style.boxShadow = "0px 2px 0px 0px #DED19B, 0px 4px 0px 0px #D9CC97, 0px 6px 0px 0px #D4C793, 0px 8px 0px 0px #CFC28F"
    //add dance,text and images
    const Ending = document.getElementById("Ending")
    Ending.style.display = "block"
    document.body.style.cssText = `
    background-color: #ffedbf;
    opacity: 1;
    background-image:  radial-gradient(#f7803c 1.5px, transparent 1.5px), radial-gradient(#f7803c 1.5px, #ffedbf 1.5px);
    background-size: 20px 20px;
    background-position: 0 0,10px 10px;`
    const EndTextNameContainer = document.getElementById("EndTextNameContainer")
    const EndTextName = document.getElementById("EndName")
    EndTextName.innerHTML = EndName
    setTimeout(() => {
        EndTextNameContainer.style.transform = "translateX(-90%)"
        setTimeout(() => {
            EndTextNameContainer.style.transform = "translateX(90%)"
            setTimeout(() => { EndTextNameContainer.style.display = "none" }, 500)
        }, 4000)
    }, 4000)
}
function LoseEndGame(EndName) {
    const EndTextNameContainer = document.getElementById("EndTextNameContainerLose")
    const EndTextName = document.getElementById("EndNameLose")
    EndTextNameContainer.style.display = "block"
    EndTextName.innerHTML = EndName
    setTimeout(() => {
        EndTextNameContainer.style.transform = "translateX(-90%)"
        setTimeout(() => {
            EndTextNameContainer.style.transform = "translateX(90%)"
            setTimeout(() => { EndTextNameContainer.style.display = "none" }, 500)
        }, 4000)
    }, 4000)
}


window.addEventListener("load", () => {
    let text = document.createElement("span");
    text.classList.add("text");
    let yes = document.createElement("button");
    yes.classList.add("yes-button");
    yes.innerText = "Yes";
    let no = document.createElement("button");
    no.classList.add("no-button");
    no.innerText = "No";
    function both() {
        text.style.opacity = "0";
        yes.style.opacity = "0";
        no.style.opacity = "0";
        setTimeout(() => {
            setTimeout(() => {
                text.style.top = "70%";
                setTimeout(() => {
                    text.style.opacity = "1";
                    setTimeout(() => {
                        playError(1500);
                        setTimeout(() => {
                            text.style.opacity = "0";
                            setTimeout(() => {
                                text.style.fontWeight = "51"
                                text.innerText = "that's good"
                                text.style.opacity = "1";
                                setTimeout(() => {
                                    text.style.opacity = "0";
                                    setTimeout(() => {
                                        text.style.fontWeight = "51"
                                        text.innerText = "that's really good"
                                        text.style.opacity = "1";
                                        setTimeout(() => {
                                            text.style.opacity = "0";
                                            playError(500);
                                            setTimeout(() => {
                                                text.innerText = "Do you think that cake is delicious ?"
                                                text.style.opacity = "1";
                                                setTimeout(() => {
                                                    text.style.top = "65%";
                                                    yes.style.opacity = "1";
                                                    no.style.opacity = "1";
                                                    setTimeout(async () => {
                                                        await playError(1000);
                                                        const result = await useBtn();
                                                        console.log(result);
                                                        if (result === "yes") {
                                                            playError(1000);
                                                            document.getElementById("cream").style.backgroundColor = "red";
                                                            document.getElementById("c1").style.backgroundColor = "red";
                                                            document.getElementById("c2").style.backgroundColor = "red";
                                                            document.getElementById("c3").style.backgroundColor = "red";
                                                            document.getElementById("c4").style.backgroundColor = "red";
                                                            document.getElementById("c5").style.backgroundColor = "red";
                                                            let l2 = document.getElementById("l2");
                                                            l2.style.backgroundColor = "red";
                                                            l2.style.boxShadow = "0 2px 0 0 red , 0 4px 0 0 red , 0 6px 0 0 red , 0 8px 0 0 red";
                                                            let l4 = document.getElementById("l4");
                                                            l4.style.backgroundColor = "red";
                                                            l4.style.boxShadow = "0 2px 0 0 red , 0 4px 0 0 red , 0 6px 0 0 red , 0 8px 0 0 red";
                                                            text.style.opacity = "0";

                                                            yes.style.opacity = "0";
                                                            no.style.opacity = "0";
                                                            setTimeout(async () => {
                                                                setTimeout(() => { playError(200) }, 1000)
                                                                setTimeout(() => { playError(300) }, 1500)
                                                                text.innerText = "do you want to eat it ?"
                                                                text.style.opacity = "1";
                                                                yes.style.opacity = "1";
                                                                no.style.opacity = "1";
                                                                const EatorNot = await useBtn();
                                                                if (EatorNot === "yes") {
                                                                    piano.pause();

                                                                    yes.style.opacity = "0";
                                                                    no.style.opacity = "0";
                                                                    text.style.opacity = "0";
                                                                    text.innerText = "";
                                                                    yes.style.display = "none";
                                                                    no.style.display = "none";
                                                                    text.style.top = "70%";
                                                                    setTimeout(() => {
                                                                        text.style.display = "block";
                                                                        text.style.fontSize = "31px";
                                                                        text.style.opacity = "1";
                                                                        text.innerHTML = "before you eat it i want to tell you<br>something"
                                                                        setTimeout(() => {
                                                                            text.style.opacity = "0";
                                                                            setTimeout(() => {
                                                                                text.style.fontSize = "51px";
                                                                                text.style.color = "red";
                                                                                text.innerText = "are you comfortable ?"
                                                                                text.style.opacity = "1";
                                                                                setTimeout(async () => {
                                                                                    text.style.top = "65%";
                                                                                    yes.style.display = "block";
                                                                                    no.style.display = "block";
                                                                                    yes.style.opacity = "1";
                                                                                    no.style.opacity = "1";
                                                                                    const comfortable = await useBtn();
                                                                                    if (comfortable === "yes") {
                                                                                        playError(300);
                                                                                        text.display = "none";
                                                                                        yes.style.display = "none";
                                                                                        no.style.display = "none";
                                                                                        yes.style.opacity = "0";
                                                                                        no.style.opacity = "0";
                                                                                        text.style.opacity = "0";
                                                                                        setTimeout(() => {
                                                                                            text.style.display = "block";

                                                                                            setTimeout(() => { text.style.top = "70%" }, 1000)
                                                                                            setTimeout(() => { text.innerHTML = "you are my favorite<br>type"; text.style.opacity = "1" }, 1000)

                                                                                            setTimeout(() => {
                                                                                                text.style.display = "none"
                                                                                                playError(2000)
                                                                                                setTimeout(() => { EndGame("Cherry sauce End🍒") }, 2000) //cherry sauce End
                                                                                            }, 4000)
                                                                                        }, 2000)

                                                                                    }
                                                                                    else if (comfortable === "no") {
                                                                                        playError(100)
                                                                                        piano.play();
                                                                                        text.style.opacity = "0"
                                                                                        yes.style.opacity = "0"
                                                                                        no.style.opacity = "0"
                                                                                        setTimeout(() => {
                                                                                            text.style.fontSize = "31px"
                                                                                            text.style.color = "#ffffff9a"
                                                                                            setTimeout(() => {
                                                                                                text.innerHTML = "Do you want to change that<br>ridiculous song ?"
                                                                                                text.style.opacity = "1"
                                                                                                setTimeout(async () => {
                                                                                                    playError(100)
                                                                                                    text.style.top = "65%"
                                                                                                    yes.style.opacity = "1"
                                                                                                    no.style.opacity = "1"
                                                                                                    const ChangeSong = await useBtn()
                                                                                                    if (ChangeSong === "yes") {
                                                                                                        text.style.opacity = "0"
                                                                                                        no.style.opacity = "0"
                                                                                                        yes.style.opacity = "0"
                                                                                                        piano.pause()
                                                                                                        setTimeout(() => { text.innerHTML = "..."; text.style.top = "70%"; text.style.fontSize = "51px" }, 1000)
                                                                                                        setTimeout(() => {
                                                                                                            ChangeMusic.play();
                                                                                                            text.style.opacity = "1"
                                                                                                            setTimeout(() => {
                                                                                                                text.style.opacity = "0"
                                                                                                            }, 1000)
                                                                                                            setTimeout(() => {
                                                                                                                ChangeMusic.pause()
                                                                                                                setTimeout(() => {
                                                                                                                    TheWayYouAre.play()
                                                                                                                    TheWayYouAre.loop = true
                                                                                                                    TheWayYouAre.currentTime = 40;
                                                                                                                    TheWayYouAre.volume = 0.25;
                                                                                                                    setTimeout(() => {
                                                                                                                        text.innerHTML = "oh"; text.style.opacity = 1
                                                                                                                        setTimeout(() => {
                                                                                                                            text.style.display = "none"
                                                                                                                            playError(1000);
                                                                                                                            setTimeout(() => { EndGame("The whong music...🎵<br>End") }, 1000)
                                                                                                                        }, 3000)
                                                                                                                    }, 1000)

                                                                                                                }, 1000)
                                                                                                            }, 1800)
                                                                                                        }, 2000)
                                                                                                    }
                                                                                                    else if (ChangeSong === "no") {
                                                                                                        piano.pause()
                                                                                                        text.style.opacity = "0"
                                                                                                        yes.style.opacity = "0"
                                                                                                        no.style.opacity = "0"
                                                                                                        setTimeout(() => { text.style.fontSize = "51px"; text.style.top = "70%" }, 1000)
                                                                                                        setTimeout(() => {
                                                                                                            text.innerHTML = "Hah ?"
                                                                                                            text.style.opacity = "1"
                                                                                                            setTimeout(() => {
                                                                                                                text.style.opacity = "0"
                                                                                                                setTimeout(() => {
                                                                                                                    text.innerHTML = "Did you really like<br>it ???"
                                                                                                                    text.style.opacity = "1"
                                                                                                                    setTimeout(() => {
                                                                                                                        text.style.opacity = "0"
                                                                                                                        setTimeout(() => {
                                                                                                                            text.innerHTML = "Anyway"
                                                                                                                            text.style.opacity = "1"
                                                                                                                            setTimeout(() => {
                                                                                                                                text.style.opacity = "0"
                                                                                                                                setTimeout(() => {
                                                                                                                                    text.innerHTML = "you deserve it"
                                                                                                                                    text.style.opacity = "1"
                                                                                                                                    setTimeout(() => {
                                                                                                                                        playError(1000)
                                                                                                                                        text.style.display = "none"
                                                                                                                                        setTimeout(() => { EndGame("Ridiculous songs lover😝<br>End") }, 1000)
                                                                                                                                    }, 3000)
                                                                                                                                }, 2000)
                                                                                                                            }, 1000)
                                                                                                                        }, 1500)
                                                                                                                    }, 2000)
                                                                                                                }, 1000)
                                                                                                            }, 1000)
                                                                                                        }, 2000)

                                                                                                    }

                                                                                                }, 1000)
                                                                                            }, 2000)
                                                                                        }, 1000)

                                                                                    }
                                                                                }, 1000)
                                                                            }, 2000)
                                                                        }, 3000)

                                                                    }, 3000)
                                                                }
                                                                else if (EatorNot === "no") {
                                                                    playError(100)
                                                                    text.style.opacity = "0"
                                                                    yes.style.opacity = "0"
                                                                    no.style.opacity = "0"
                                                                    setTimeout(() => { text.style.top = "70%"; text.style.fontSize = "51px" }, 1000)
                                                                    setTimeout(() => {
                                                                        text.innerText = "it's okay"
                                                                        text.style.opacity = "1"
                                                                        setTimeout(() => {
                                                                            text.style.opacity = "0"

                                                                            setTimeout(() => {
                                                                                text.innerText = "This is cherry sauce"
                                                                                text.style.opacity = "1"
                                                                                playError(200)
                                                                                setTimeout(() => {

                                                                                    text.style.opacity = "0"
                                                                                    setTimeout(() => {
                                                                                        text.innerText = "but"
                                                                                        text.style.opacity = 1
                                                                                        setTimeout(() => {
                                                                                            text.style.opacity = "0"
                                                                                            setTimeout(() => {
                                                                                                text.style, fontSize = "31px"
                                                                                                setTimeout(() => {
                                                                                                    text.innerHTML = "For some reason<br>it doesn't taste like<br>cherry sauce"
                                                                                                    text.style.opacity = "1"
                                                                                                    playError(50)
                                                                                                    setTimeout(() => {
                                                                                                        text.style.opacity = "0"
                                                                                                        text.style.fontSize = "51px"
                                                                                                        setTimeout(() => {
                                                                                                            text.innerHTML = "Anyway"
                                                                                                            text.style.opacity = "1"
                                                                                                            setTimeout(() => {
                                                                                                                text.style.opacity = "0"
                                                                                                                piano.pause();
                                                                                                                setTimeout(() => { text.style.fontSize = "31px" }, 1000)
                                                                                                                setTimeout(() => {
                                                                                                                    text.innerHTML = "Have you ever felt like<br>someone was watching you<br>even though no one was<br>around ?"
                                                                                                                    text.style.opacity = "1"
                                                                                                                    setTimeout(async () => {
                                                                                                                        text.style.top = "65%"
                                                                                                                        yes.style.opacity = "1"
                                                                                                                        no.style.opacity = "1"
                                                                                                                        const feel = await useBtn()
                                                                                                                        if (feel === "yes") {
                                                                                                                            text.style.opacity = "0"
                                                                                                                            yes.style.opacity = "0"
                                                                                                                            no.style.opacity = "0"
                                                                                                                            setTimeout(() => { text.style.fontSize = "51px" }, 1000)
                                                                                                                            setTimeout(async () => {
                                                                                                                                text.innerHTML = "Are you comfortable"
                                                                                                                                text.style.opacity = "1"
                                                                                                                                yes.style.opacity = "1"
                                                                                                                                no.style.opacity = "1"
                                                                                                                                setTimeout(() => { playError(200) }, 200)
                                                                                                                                const comfortable = await useBtn()
                                                                                                                                if (comfortable === "yes" || comfortable === "no") {
                                                                                                                                    playError(300)
                                                                                                                                    piano.play()
                                                                                                                                    text.style.opacity = "0"
                                                                                                                                    yes.style.opacity = "0"
                                                                                                                                    no.style.opacity = "0"
                                                                                                                                    setTimeout(() => { text.style.fontSize = "31px" }, 1000)
                                                                                                                                    setTimeout(() => {
                                                                                                                                        text.innerHTML = "How about we cut the cake ?"
                                                                                                                                        text.style.opacity = "1"
                                                                                                                                        setTimeout(async () => {
                                                                                                                                            yes.style.opacity = "1"
                                                                                                                                            no.style.opacity = "1"
                                                                                                                                            const CutTheCake = await useBtn();
                                                                                                                                            if (CutTheCake === "yes") {
                                                                                                                                                piano.pause()
                                                                                                                                                text.style.opacity = "0"
                                                                                                                                                yes.style.opacity = "0"
                                                                                                                                                no.style.opacity = "0"
                                                                                                                                                setTimeout(() => { text.style.top = "70%"; text.style.fontSize = "51px" }, 1000)
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    text.innerText = "okay😊"
                                                                                                                                                    text.style.opacity = "1"
                                                                                                                                                    setTimeout(() => { playError(2000) }, 3000)
                                                                                                                                                    setTimeout(() => { text.style.display = "none"; EndGame("What was that🤨 End") }, 5000)
                                                                                                                                                }, 2000)
                                                                                                                                            }
                                                                                                                                            else if (CutTheCake === "no") {
                                                                                                                                                piano.pause()
                                                                                                                                                text.style.color = "red"
                                                                                                                                                text.innerHTML = ""
                                                                                                                                                no.style.opacity = "0"
                                                                                                                                                yes.style.opacity = "0"
                                                                                                                                                text.style.opacity = "0"

                                                                                                                                                yes.style.transform = "translateX(-50%)"
                                                                                                                                                setTimeout(() => { yes.style.left = "50%" }, 1000)
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    text.innerHTML = "how about we cut you<br>insted"
                                                                                                                                                    text.style.opacity = "1"
                                                                                                                                                    yes.style.opacity = "1"
                                                                                                                                                    setTimeout(async () => {
                                                                                                                                                        yes.style.opacity = "1"
                                                                                                                                                        const CutYouInsted = await useBtn()
                                                                                                                                                        if (CutYouInsted === "yes") {
                                                                                                                                                            text.innerHTML = ""
                                                                                                                                                            text.style.top = "70%"
                                                                                                                                                            text.style.fontSize = "51px"
                                                                                                                                                            yes.style.display = "none"
                                                                                                                                                            text.style.opacity = "0"
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                text.style.opacity = "1"
                                                                                                                                                                text.innerHTML = "your welcome"
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    jumpscareDiv.style.display = "block";
                                                                                                                                                                    jumpscare.style.display = "block"
                                                                                                                                                                    jumpscare.play();
                                                                                                                                                                    audio.play();
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        jumpscareDiv.remove()
                                                                                                                                                                        jumpscare.remove()
                                                                                                                                                                        error.style.display = "block"
                                                                                                                                                                        audio.play()
                                                                                                                                                                        LoseEndGame("That was bad🔪 End")
                                                                                                                                                                    }, 600)
                                                                                                                                                                }, 2000)
                                                                                                                                                            }, 2000)
                                                                                                                                                        }
                                                                                                                                                    })
                                                                                                                                                }, 4000)

                                                                                                                                            }
                                                                                                                                        }, 1000)
                                                                                                                                    }, 3000)


                                                                                                                                }

                                                                                                                            }, 3000)

                                                                                                                        }
                                                                                                                        else if (feel === "no") {
                                                                                                                            text.style.opacity = "0"
                                                                                                                            yes.style.opacity = "0"
                                                                                                                            no.style.opacity = "0"
                                                                                                                            setTimeout(() => { text.style.fontSize = "51px"; text.style.top = "70%" }, 1000)
                                                                                                                            setTimeout(() => {
                                                                                                                                text.innerHTML = "Forget about that<br>okay ?"
                                                                                                                                text.style.opacity = "1"
                                                                                                                                setTimeout(() => {
                                                                                                                                    text.style.display = "none"
                                                                                                                                    playError(2000)
                                                                                                                                    setTimeout(() => { EndGame("Hah ??? End") }, 2000) //Hah ? 
                                                                                                                                }, 3000)

                                                                                                                            }, 4000)


                                                                                                                        }


                                                                                                                    }, 1000)




                                                                                                                }, 4000)
                                                                                                            }, 1000)
                                                                                                        }, 2000)
                                                                                                    }, 4000)
                                                                                                }, 1000)

                                                                                            }, 1000)


                                                                                        }, 1000)
                                                                                    }, 1000)
                                                                                }, 3000)
                                                                            }, 2000)
                                                                        }, 2000)
                                                                    }, 3000)
                                                                }




                                                            }, 4000)



                                                        }
                                                        else if (result === "no") {
                                                            playError(1000);
                                                            setTimeout(() => { playError(100) }, 1000)
                                                            document.getElementById("flame").style.display = "none"
                                                            document.getElementById("candle").style.display = "none"
                                                            text.style.opacity = "0";
                                                            yes.style.opacity = "0";
                                                            no.style.opacity = "0";
                                                            text.style.top = "70%";
                                                            text.style.fontSize = "51px";
                                                            text.innerText = "but why ?..."
                                                            setTimeout(() => {
                                                                text.style.opacity = "1";
                                                                playError(100);
                                                                setTimeout(() => {
                                                                    text.style.opacity = "0";
                                                                    setTimeout(() => {
                                                                        text.style.fontSize = "31px";
                                                                        text.innerText = "i made it especially for you"
                                                                        text.style.opacity = "1";
                                                                        setTimeout(() => { playError(300) }, 500);
                                                                        setTimeout(() => {
                                                                            text.style.opacity = "0"
                                                                            setTimeout(() => {
                                                                                text.innerText = "do you think i'm weird"
                                                                                text.style.opacity = "1"
                                                                                setTimeout(async () => {
                                                                                    text.style.top = "65%"
                                                                                    yes.style.opacity = "1"
                                                                                    no.style.opacity = "1"
                                                                                    setTimeout(() => { playError(200) })
                                                                                    const DoYouThinkImWeird = await useBtn()
                                                                                    if (DoYouThinkImWeird === "yes") {
                                                                                        piano.pause()
                                                                                        setTimeout(() => { playError(50) }, 200)
                                                                                        text.innerText = ""
                                                                                        text.style.opacity = "0"
                                                                                        text.style.color = "red"
                                                                                        yes.style.opacity = "0"
                                                                                        no.style.opacity = "0"
                                                                                        yes.style.display = "none"
                                                                                        no.style.display = "none"
                                                                                        setTimeout(() => {
                                                                                            yes.style.display = "block"
                                                                                            no.style.display = "block"
                                                                                            text.style.opacity = "1"
                                                                                            text.innerHTML = "Do you think this is your last<br>bithday"
                                                                                            setTimeout(async () => {
                                                                                                yes.style.opacity = "1"
                                                                                                no.style.opacity = "1"
                                                                                                const LastBirthday = await useBtn()
                                                                                                if (LastBirthday === "yes") {
                                                                                                    text.innerHTML = ""
                                                                                                    text.style.top = "70%"
                                                                                                    yes.style.display = "none"
                                                                                                    no.style.display = "none"

                                                                                                    setTimeout(() => {
                                                                                                        playError(100)
                                                                                                        text.style.color = "palevioletred"
                                                                                                        text.innerHTML = "No, it isn't <3"
                                                                                                        setTimeout(() => {

                                                                                                            playError(1000)
                                                                                                            text.style.display = "none"
                                                                                                            setTimeout(() => { EndGame("Not yor last birthday🎉<br>End") }, 1000)
                                                                                                        }, 3000)
                                                                                                    }, 1000)
                                                                                                }
                                                                                                else if (LastBirthday === "no") {
                                                                                                    playError(100)
                                                                                                    document.body.style.background = "red"
                                                                                                    text.innerText = ""
                                                                                                    text.style.top = "70%"
                                                                                                    yes.style.display = "none"
                                                                                                    no.style.display = "none"
                                                                                                    yes.style.opacity = "0"
                                                                                                    no.style.opacity = "0"
                                                                                                    text.style.color = "black"
                                                                                                    text.style.opacity = "0"
                                                                                                    setTimeout(() => { playError(100) }, 300)
                                                                                                    setTimeout(() => { playError(200) }, 500)
                                                                                                    setTimeout(() => {

                                                                                                        text.innerText = "so you are brave"
                                                                                                        text.style.opacity = "1"
                                                                                                        setTimeout(() => {
                                                                                                            text.style.opacity = "0"
                                                                                                            yes.style.display = "block"
                                                                                                            no.style.display = "block"
                                                                                                            setTimeout(() => {
                                                                                                                text.innerText = "how about we cut the cake"
                                                                                                                text.style.opacity = "1"
                                                                                                                text.style.top = "65%"
                                                                                                                setTimeout(() => { playError(100) }, 300)
                                                                                                                setTimeout(async () => {
                                                                                                                    yes.style.opacity = "1"
                                                                                                                    no.style.opacity = "1"
                                                                                                                    const CutTheCake = await useBtn()
                                                                                                                    if (CutTheCake === "yes") {
                                                                                                                        playError(200)
                                                                                                                        text.innerHTML = ""
                                                                                                                        document.body.style.backgroundColor = "#1B1212"
                                                                                                                        text.style.opacity = "0"
                                                                                                                        yes.style.opacity = "0"
                                                                                                                        no.style.opacity = "0"
                                                                                                                        text.style.top = "70%"
                                                                                                                        text.style.fontSize = "31px"
                                                                                                                        text.style.color = "#ffffff9a"

                                                                                                                        setTimeout(() => {
                                                                                                                            text.innerHTML = "before you eat it i want to tell you<br>something"
                                                                                                                            text.style.opacity = "1"
                                                                                                                            setTimeout(() => { playError(150) }, 200)
                                                                                                                            setTimeout(() => {
                                                                                                                                text.style.opacity = "0"


                                                                                                                                setTimeout(() => { playError(300) }, 400)
                                                                                                                                setTimeout(() => {

                                                                                                                                    text.style.fontSize = "51px"
                                                                                                                                    text.innerHTML = "are you comfortable ?"
                                                                                                                                    text.style.opacity = "1"
                                                                                                                                    setTimeout(async () => {
                                                                                                                                        text.style.top = "65%"

                                                                                                                                        no.style.opacity = "1"
                                                                                                                                        yes.style.opacity = "1"
                                                                                                                                        const Comfotable = await useBtn()
                                                                                                                                        if (Comfotable === "yes") {
                                                                                                                                            text.innerHTML = ""
                                                                                                                                            text.style.top = "70%"
                                                                                                                                            text.style.opacity = "0"
                                                                                                                                            yes.style.display = "none"
                                                                                                                                            no.style.display = "none"
                                                                                                                                            setTimeout(() => {
                                                                                                                                                text.innerText = "Ugh"
                                                                                                                                                text.style.opacity = "1"
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    text.style.opacity = "0"
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        text.style.opacity = "1"
                                                                                                                                                        text.innerText = "you were on the line..."
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            playError(1000)
                                                                                                                                                            text.style.display = "none"
                                                                                                                                                            setTimeout(() => { EndGame("You were on the line🔪<br>End") }, 1000)
                                                                                                                                                        }, 4000)
                                                                                                                                                    }, 3000)
                                                                                                                                                }, 1000)
                                                                                                                                            }, 2000)

                                                                                                                                        }
                                                                                                                                        else if (Comfotable === "no") {
                                                                                                                                            piano.play();
                                                                                                                                            text.style.opacity = "0"
                                                                                                                                            yes.style.opacity = "0"
                                                                                                                                            no.style.opacity = "0"
                                                                                                                                            setTimeout(() => {
                                                                                                                                                text.style.fontSize = "31px"
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    text.innerHTML = "Do you want to change that<br>ridiculous song ?"
                                                                                                                                                    text.style.opacity = "1"
                                                                                                                                                    setTimeout(async () => {
                                                                                                                                                        playError(100)
                                                                                                                                                        text.style.top = "65%"
                                                                                                                                                        yes.style.opacity = "1"
                                                                                                                                                        no.style.opacity = "1"
                                                                                                                                                        const ChangeSong = await useBtn()
                                                                                                                                                        if (ChangeSong === "yes") {
                                                                                                                                                            text.style.opacity = "0"
                                                                                                                                                            no.style.opacity = "0"
                                                                                                                                                            yes.style.opacity = "0"
                                                                                                                                                            piano.pause()
                                                                                                                                                            setTimeout(() => { text.innerHTML = "..."; text.style.top = "70%"; text.style.fontSize = "51px" }, 1000)
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                ChangeMusic.play();
                                                                                                                                                                text.style.opacity = "1"
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    text.style.opacity = "0"
                                                                                                                                                                }, 1000)
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    ChangeMusic.pause()
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        TheWayYouAre.play()
                                                                                                                                                                        TheWayYouAre.loop = true
                                                                                                                                                                        TheWayYouAre.currentTime = 40;
                                                                                                                                                                        TheWayYouAre.volume = 0.25;
                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                            text.innerHTML = "oh"; text.style.opacity = 1
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                playError(1000);
                                                                                                                                                                                text.style.display = "none"
                                                                                                                                                                                setTimeout(() => { EndGame("the whong music...🎵<br>End") }, 1000)
                                                                                                                                                                            }, 3000)
                                                                                                                                                                        }, 1000)

                                                                                                                                                                    }, 1000)
                                                                                                                                                                }, 1800)
                                                                                                                                                            }, 2000)
                                                                                                                                                        }
                                                                                                                                                        else if (ChangeSong === "no") {
                                                                                                                                                            piano.pause()
                                                                                                                                                            text.style.opacity = "0"
                                                                                                                                                            yes.style.opacity = "0"
                                                                                                                                                            no.style.opacity = "0"
                                                                                                                                                            setTimeout(() => { text.style.fontSize = "51px"; text.style.top = "70%" }, 1000)
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                text.innerHTML = "Hah ?"
                                                                                                                                                                text.style.opacity = "1"
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    text.style.opacity = "0"
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        text.innerHTML = "Did you really like<br>it ???"
                                                                                                                                                                        text.style.opacity = "1"
                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                            text.style.opacity = "0"
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                text.innerHTML = "Anyway"
                                                                                                                                                                                text.style.opacity = "1"
                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                    text.style.opacity = "0"
                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                        text.innerHTML = "you deserve it"
                                                                                                                                                                                        text.style.opacity = "1"
                                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                                            playError(1000)
                                                                                                                                                                                            text.style.display = "none"
                                                                                                                                                                                            setTimeout(() => { EndGame("Ridiculous songs lover😝<br>End") }, 1000)
                                                                                                                                                                                        }, 3000)
                                                                                                                                                                                    }, 2000)
                                                                                                                                                                                }, 1000)
                                                                                                                                                                            }, 1500)
                                                                                                                                                                        }, 2000)
                                                                                                                                                                    }, 1000)
                                                                                                                                                                }, 1000)
                                                                                                                                                            }, 2000)

                                                                                                                                                        }

                                                                                                                                                    }, 1000)
                                                                                                                                                }, 2000)
                                                                                                                                            }, 1000)


                                                                                                                                        }
                                                                                                                                    }, 1000)
                                                                                                                                }, 3000)
                                                                                                                            }, 3000)
                                                                                                                        }, 3000)

                                                                                                                    }
                                                                                                                    else if (CutTheCake === "no") {
                                                                                                                        text.innerHTML = ""
                                                                                                                        no.style.display = "none"
                                                                                                                        yes.style.display = "none"
                                                                                                                        yes.style.opacity = "0"
                                                                                                                        text.style.opacity = "0"
                                                                                                                        yes.style.left = "50%"
                                                                                                                        yes.style.transform = "translateX(-50%)"
                                                                                                                        setTimeout(() => {
                                                                                                                            text.innerHTML = "how about we cut you<br>insted"
                                                                                                                            text.style.opacity = "1"
                                                                                                                            yes.style.display = "block"
                                                                                                                            setTimeout(async () => {
                                                                                                                                yes.style.opacity = "1"
                                                                                                                                const CutYouInsted = await useBtn()
                                                                                                                                if (CutYouInsted === "yes") {
                                                                                                                                    text.innerHTML = ""
                                                                                                                                    text.style.top = "70%"
                                                                                                                                    text.style.fontSize = "51px"
                                                                                                                                    yes.style.display = "none"
                                                                                                                                    text.style.opacity = "0"
                                                                                                                                    setTimeout(() => {
                                                                                                                                        text.style.opacity = "1"
                                                                                                                                        text.innerHTML = "your welcome"
                                                                                                                                        setTimeout(() => {
                                                                                                                                            jumpscareDiv.style.display = "block";
                                                                                                                                            jumpscare.style.display = "block"
                                                                                                                                            jumpscare.play();
                                                                                                                                            audio.play();
                                                                                                                                            setTimeout(() => {
                                                                                                                                                jumpscareDiv.remove()
                                                                                                                                                jumpscare.remove()
                                                                                                                                                error.style.display = "block"
                                                                                                                                                audio.play()
                                                                                                                                                LoseEndGame("The rude ending🩸")
                                                                                                                                            }, 600)
                                                                                                                                        }, 2000)
                                                                                                                                    }, 2000)
                                                                                                                                }
                                                                                                                            })
                                                                                                                        }, 4000)

                                                                                                                    }
                                                                                                                }, 1000)

                                                                                                            }, 3000)
                                                                                                        }, 3000)
                                                                                                    }, 3000)


                                                                                                }
                                                                                            }, 1000)
                                                                                        }, 3000)



                                                                                    }
                                                                                    else if (DoYouThinkImWeird === "no") {
                                                                                        playError(100)
                                                                                        text.style.opacity = "0"
                                                                                        yes.style.opacity = "0"
                                                                                        no.style.opacity = "0"
                                                                                        setTimeout(() => {
                                                                                            text.style.fontSize = "51px"
                                                                                            text.style.top = "70%"
                                                                                            setTimeout(() => {
                                                                                                text.innerText = "Aww"
                                                                                                text.style.opacity = "1"
                                                                                                setTimeout(() => {
                                                                                                    text.style.opacity = "0"
                                                                                                    setTimeout(() => {
                                                                                                        text.innerText = "that's sweet"
                                                                                                        text.style.opacity = "1"
                                                                                                        setTimeout(() => {
                                                                                                            text.style.opacity = "0"
                                                                                                            setTimeout(() => {
                                                                                                                text.style.fontSize = "31px"
                                                                                                                setTimeout(() => {
                                                                                                                    text.innerHTML = "Do you want to change that<br>ridiculous song ?"
                                                                                                                    text.style.opacity = "1"
                                                                                                                    setTimeout(async () => {
                                                                                                                        playError(100)
                                                                                                                        text.style.top = "65%"
                                                                                                                        yes.style.opacity = "1"
                                                                                                                        no.style.opacity = "1"
                                                                                                                        const ChangeSong = await useBtn()
                                                                                                                        if (ChangeSong === "yes") {
                                                                                                                            text.style.opacity = "0"
                                                                                                                            no.style.opacity = "0"
                                                                                                                            yes.style.opacity = "0"
                                                                                                                            piano.pause()
                                                                                                                            setTimeout(() => { text.innerHTML = "..."; text.style.top = "70%"; text.style.fontSize = "51px" }, 1000)
                                                                                                                            setTimeout(() => {
                                                                                                                                ChangeMusic.play();
                                                                                                                                text.style.opacity = "1"
                                                                                                                                setTimeout(() => {
                                                                                                                                    text.style.opacity = "0"
                                                                                                                                }, 1000)
                                                                                                                                setTimeout(() => {
                                                                                                                                    ChangeMusic.pause()
                                                                                                                                    setTimeout(() => {
                                                                                                                                        TheWayYouAre.play()
                                                                                                                                        TheWayYouAre.loop = true
                                                                                                                                        TheWayYouAre.currentTime = 40;
                                                                                                                                        TheWayYouAre.volume = 0.25;
                                                                                                                                        setTimeout(() => {
                                                                                                                                            text.innerHTML = "oh"; text.style.opacity = 1
                                                                                                                                            setTimeout(() => {
                                                                                                                                                playError(1000);
                                                                                                                                                text.style.display = "none"
                                                                                                                                                setTimeout(() => { EndGame("The whong music...🎵<br>End") }, 1000)
                                                                                                                                            }, 3000)
                                                                                                                                        }, 1000)

                                                                                                                                    }, 1000)
                                                                                                                                }, 1800)
                                                                                                                            }, 2000)
                                                                                                                        }
                                                                                                                        else if (ChangeSong === "no") {
                                                                                                                            piano.pause()
                                                                                                                            text.style.opacity = "0"
                                                                                                                            yes.style.opacity = "0"
                                                                                                                            no.style.opacity = "0"
                                                                                                                            setTimeout(() => { text.style.fontSize = "51px"; text.style.top = "70%" }, 1000)
                                                                                                                            setTimeout(() => {
                                                                                                                                text.innerHTML = "Hah ?"
                                                                                                                                text.style.opacity = "1"
                                                                                                                                setTimeout(() => {
                                                                                                                                    text.style.opacity = "0"
                                                                                                                                    setTimeout(() => {
                                                                                                                                        text.innerHTML = "Did you really like<br>it ???"
                                                                                                                                        text.style.opacity = "1"
                                                                                                                                        setTimeout(() => {
                                                                                                                                            text.style.opacity = "0"
                                                                                                                                            setTimeout(() => {
                                                                                                                                                text.innerHTML = "Anyway"
                                                                                                                                                text.style.opacity = "1"
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    text.style.opacity = "0"
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        text.innerHTML = "you deserve it"
                                                                                                                                                        text.style.opacity = "1"
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            playError(1000)
                                                                                                                                                            text.style.display = "none"
                                                                                                                                                            setTimeout(() => { EndGame("Ridiculous songs lover😝<br>End") }, 1000)
                                                                                                                                                        }, 3000)
                                                                                                                                                    }, 2000)
                                                                                                                                                }, 1000)
                                                                                                                                            }, 1500)
                                                                                                                                        }, 2000)
                                                                                                                                    }, 1000)
                                                                                                                                }, 1000)
                                                                                                                            }, 2000)

                                                                                                                        }

                                                                                                                    }, 1000)
                                                                                                                }, 2000)
                                                                                                            }, 1000)
                                                                                                        }, 2000)

                                                                                                    }, 2000)
                                                                                                }, 1000)
                                                                                            }, 1000)
                                                                                        }, 1000)

                                                                                    }
                                                                                }, 1000)
                                                                            }, 1000)
                                                                        }, 2000)


                                                                    }, 2000)
                                                                }, 2000)

                                                            }, 3000)
                                                        }

                                                    }, 1000)
                                                }, 1000)
                                            }, 2000)
                                        }, 2000)
                                    }, 1000)
                                }, 2000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
            text.innerText = "so that's your birthday right ?"
        }, 2000)
    }
    function useBtn() {
        return new Promise(resolve => {
            yes.addEventListener("click", () => {
                resolve("yes");
            });
            no.addEventListener("click", () => {
                resolve("no");
            });
        });
    }

    blackScreen.style.opacity = "0";
    setTimeout(() => {
        blackScreen.remove();
        window.addEventListener("pointerdown", () => {

            intro.style.display = "none";
            jumpscareDiv.style.display = "block";
            jumpscare.play();
            audio.play();
            setTimeout(() => {
                jumpscareDiv.style.display = "none";
                jumpscare.style.display = "none"
                playError(1000)
                setTimeout(() => {
                    error.style.display = "none";
                    
                    piano.play();
                    piano.loop = true;



                    document.body.appendChild(text);
                    document.body.appendChild(yes);
                    document.body.appendChild(no);



                    setTimeout(() => {

                        text.innerText = "oh"
                        text.style.fontSize = "51px";
                        text.style.opacity = "1";
                        setTimeout(() => {
                            text.style.opacity = "0";
                            setTimeout(() => {
                                text.innerText = "hello"
                                text.style.opacity = "1";
                                setTimeout(() => {
                                    text.style.opacity = "0";
                                    setTimeout(() => {
                                        text.innerText = "hmmm..."
                                        text.style.opacity = "1";
                                        setTimeout(() => {
                                            text.style.opacity = "0";
                                            setTimeout(() => {
                                                text.style.fontSize = "31px";
                                                text.innerText = "do you know why are you here ?"
                                                text.style.opacity = "1";

                                                setTimeout(() => {
                                                    text.style.top = "65%";
                                                    setTimeout(async () => {
                                                        yes.style.display = "block";
                                                        no.style.display = "block";
                                                        yes.style.opacity = "1";
                                                        no.style.opacity = "1";
                                                        const result = await useBtn();
                                                        console.log(result);
                                                        if (result === "yes" || result === "no") {
                                                            both();
                                                        }




                                                    }, 1000)
                                                }, 1000)
                                            }, 2000)
                                        }, 4000)


                                    }, 5000)
                                }, 2000)
                            }, 2000)
                        }, 2000)


                    }, 4000)


                }, 600)
            }, 400);
        }, { once: true });


    }, 5000);
});


