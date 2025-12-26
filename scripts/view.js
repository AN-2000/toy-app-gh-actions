const userList = document.querySelector("#user-list");
const postList = document.querySelector("#post-list");
let currentActiveUserEl = null;

const showPosts = async (e) => {
  const userEl = e.target;
  if (currentActiveUserEl) currentActiveUserEl.classList.remove("active");
  currentActiveUserEl = userEl;
  const userId = userEl.id;
  userEl.classList.add("active");
  const posts = await getPosts(userId);
  let listString = "";
  for (let el of posts) {
    let statusTag = el.completed ? "completed" : "pending";
    listString += `<li id="${el.id}">${el.title} - <span class="status ${statusTag}">${statusTag}<span/></li>`;
  }
  postList.innerHTML = listString;
};

userList.addEventListener("dblclick", showPosts)

const loadApp = async () => {
  const data = await fetchUsers();
  let listString = "";
  for (let el of data) {
    listString += `<li id="${el.id}">${el.username}</li>`;
  }
  userList.innerHTML = listString;
};

loadApp();
