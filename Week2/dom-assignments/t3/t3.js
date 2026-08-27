'use strict'

let browser = navigator.userAgent
let browserName = "Unknown Browser";
let version = "Unknown"
let aw = window.innerWidth;
let  ah = window.innerHeight;
let w = screen.width;
let h = screen.height;
const target = document.getElementById("target");
if (browser.includes("Firefox/")) {
    browserName = "Mozilla Firefox";
    version = browser.split("Firefox/")[1]?.split(" ")[0];
  } else if (browser.includes("Edg/")) {
    browserName = "Microsoft Edge";
    version = browser.split("Edg/")[1]?.split(" ")[0];
  } else if (browser.includes("Chrome/")) {
    browserName = "Google Chrome";
    version = browser.split("Chrome/")[1]?.split(" ")[0];
  } else if (browser.includes("Safari/")) {
    browserName = "Apple Safari";
    version = browser.split("Version/")[1]?.split(" ")[0] || "Unknown";
  }

let osName= "Unknown OS";
  if (browser.includes("Win")) osName = "Windows";
  else if (browser.includes("Mac")) osName = "macOS";
  else if (browser.includes("Linux")) osName = "Linux";
  else if (browser.includes("Android")) osName = "Android";
  else if (browser.includes("iPhone") || browser.includes("iPad")) osName = "iOS";
const now = new Date();
  const dateFormatted = now.toLocaleDateString("fi-FI", {
    day: "numeric",
    month: "numeric",
    year: "numeric"
  });
  const timeFormatted = now.toLocaleTimeString("fi-FI")

target.innerHTML = `
    <p><strong>Browser and version:</strong> ${browser}</p>
    <p><strong>Operating system:</strong> ${osName}</p>
    <p><strong>Screen size:</strong> ${w} x ${h} px</p>
    <p><strong>Available screen space:</strong> ${aw} x ${ah} px</p>
    <p><strong>Date:</strong> ${dateFormatted}</p>
    <p><strong>Time:</strong> ${timeFormatted}</p>
  `;
