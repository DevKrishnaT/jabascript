let btn = document.getElementsByClassName("btn")[0];
let text = document.getElementsByClassName("text")[0];
// fech data
async function ftehc_data() {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom",
      {
        headers: {
          "X-Api-Key": "api_key",
        },
      }
    );
    if (!response.ok) {
      throw new Error("nhi chal rha kuch dikkat hai");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
// on click button
btn.addEventListener("click", () => {
  genrate();
  console.log("button clicked");
});

//catching data
let genrate = async () => {
  let data = await ftehc_data();

  if (!data) {
    console.log("No data received");
    return;
  }

  let want = data[0].quote;
  text.innerText = `${want}`;

  return want;
};
