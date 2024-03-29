export function useCheckRole() {
  const userData = JSON?.parse(localStorage.getItem("USER_LOGIN"));
  const user = userData?.user;

  return user;
}
