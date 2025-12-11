export async function getGitHubUserInfo(username) {
  try {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    if (!userResponse.ok) {
      throw new Error(`Ошибка: пользователь "${username}" не найден`);
    }

    const userData = await userResponse.json();

    const reposResponse = await fetch(userData.repos_url);
    const reposData = await reposResponse.json();

    return {
      user: userData,
      repos: reposData
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error.message);
  }
}