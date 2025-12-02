export const fetchUsersAPI = async (controller?: AbortController) => {
  const response = await fetch("https://randomuser.me/api/?results=1000", {
    signal: controller?.signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const json = await response.json();
  return json.results;
};
