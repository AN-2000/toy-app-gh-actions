const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const getPosts = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  const data = await res.json();
  return data;
};
