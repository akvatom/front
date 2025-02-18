export const useAuthUser = async ({ phone_number, code }, lang) => {
  const body = {
    phone_number: phone_number,
    user_entered_code: code,
  };

  const { data } = await useMyFetch(`${lang}/auth/sms-verificate/`, {
    method: "POST",
    body: body,
    key: `code${code}`,
  });

  return data.value;
};

export const useLogOut = () => {
  const token = useCookie("access");
  const refresh = useCookie("refresh");
  const isAuthenticated = useAuthenticated();
  const userInfo = useUserInfo();

  token.value = null; // clear the access token cookie
  refresh.value = null; // clear the refresh token cookie
  isAuthenticated.value = false; // set authenticated state value to false
  userInfo.value = null;
};

export const useRefreshToken = async (lang) => {
  const refresh = useCookie("refresh");
  const token = useCookie("access");
  const isAuthenticated = useAuthenticated();
  const body = {
    refresh: refresh.value,
  };

  await useMyFetch(`${lang}/auth/token/refresh/`, {
    method: "POST",
    body: body,
    headers: {
      Authorization: "Bearer " + token.value,
    },
  }).then((res) => {
    if (res.data.value) {
      token.value = res.data.value.access;
      isAuthenticated.value = true;
      console.log("refreshed");
    }
    if (res.error.value) {
      useLogOut();
      useUserInfo().value = null;
    }
  });
};

export const usePersonalData = async (lang, access) => {
  const userInfo = useUserInfo();
  const isAuthenticated = useAuthenticated();
  const accessToken = useCookie("access");
  if (!accessToken.value && !access) return;

  if (!userInfo.value) {
    const { data, error } = await useMyFetch(`${lang}/auth/get-profile/`, {
      headers: { Authorization: `Bearer ${accessToken.value ?? access}` },
    });
    
    if (error.value && error.value.statusCode == 401) {
      console.log("error 401");
      useRefreshToken(lang);
    } else if (data.value) {
      isAuthenticated.value = true;
      userInfo.value = data.value;
    }
  }
};
