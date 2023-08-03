// 상단 nav 삽입
// ### 국문 ###
$('.sub-banner-include').load('/01_useInfo/include_sub/subBanner.html', function() {

  const storyBtn = document.querySelector("#storyBtn");
  const comeBtn = document.querySelector("#comeBtn");
  const ruleBtn = document.querySelector("#ruleBtn");
  let url = location.search;

  if(url.includes("story")) {
    storyBtn.checked = true;
  } else if(url.includes("come")){
    comeBtn.checked = true;
  } else if(url.includes("rule")){
    ruleBtn.checked = true;
  }

  storyBtn.addEventListener("click", ()=>{
    location.href = "./story.html?type=story";
  })
  comeBtn.addEventListener("click", ()=>{
    location.href = "./come.html?type=come";
  })
  ruleBtn.addEventListener("click", ()=>{
    location.href = "./rule.html?type=rule";
  })
});

// ### 영문 ###
$('.sub-banner-include_en').load('/01_useInfo/include_sub/subBanner_en.html', function() {

  const storyBtn = document.querySelector("#storyBtn");
  const comeBtn = document.querySelector("#comeBtn");
  const ruleBtn = document.querySelector("#ruleBtn");
  let url = location.search;

  if(url.includes("story")) {
    storyBtn.checked = true;
  } else if(url.includes("come")){
    comeBtn.checked = true;
  } else if(url.includes("rule")){
    ruleBtn.checked = true;
  }

  storyBtn.addEventListener("click", ()=>{
    location.href = "./story_en.html?type=story";
  })
  comeBtn.addEventListener("click", ()=>{
    location.href = "./come_en.html?type=come";
  })
  ruleBtn.addEventListener("click", ()=>{
    location.href = "./rule_en.html?type=rule";
  })
});