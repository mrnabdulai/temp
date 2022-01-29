const audio = document.querySelector("audio");
audio.addEventListener("play", function (event) {
  const trackTitle = document.querySelector(
    " .PlayerArtistInfo-module__heading--2GwgO strong"
  );
  // console.log(typeof(trackTitle.innerText));

  if (trackTitle.innerText == "Bonita | (prod. by NeddyBeats & Benny's Legacy) | [Mixed & Mastered by NeddyBeats]") {
    console.log("The text is the required song ");
    document.getElementsByClassName("player__control--forwards")[0].click();
  } else {
    console.log("The song is another song");
    document.getElementsByClassName("player__control--back")[0].click();
  }
});
