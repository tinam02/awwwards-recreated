window.addEventListener("load", function () {
  const getFont = () => {
    let fontsArr = ["lynojean", "lynostan", "lynowalt", "lynoulys"];
    var randomNumber = Math.floor(Math.random() * fontsArr.length);
    let fontName = fontsArr[randomNumber];
    return fontName;
  };
  const changeFonts = () => {
    let x = document.getElementById("demo");
    // ovde se koristi textcontent jer innerhtml i innertext dodaju  i html tagove!!
    let txt = x.textContent;
    let newText = "";
    const forFonts = () => {
      for (let i = 0; i < txt.length; i++) {
        newText += `<span key={${i}} style="font-family:'${getFont()}'">${txt.charAt(
          i
        )}</span>`;
      }
    };
    forFonts();
    x.innerHTML = newText;
  };
  changeFonts();
});
