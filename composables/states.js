export const useSort = () =>
  useState("tabs", () => [
    { name: "sort[0]", slug: "views" },
    { name: "sort[1]", slug: "average_rating" },
    { name: "sort[2]", slug: "experience" },
    { name: "sort[3]", slug: "original_price" },
    { name: "sort[4]", slug: "count_of_ratings" },
  ]);

export const useSelectedSort = () => useState(() => 0);

export const useLoginModal = () => useState(() => false);

export const useClinicModal = () => useState(() => false); 

export const useLoginTitle = () => useState(() => "loginTitle.default");

export const useRedirect = () => useState(() => null);

export const useToastOpen = () => useState(() => false);
export const useToastText = () => useState(() => null);

export const useAuthenticated = () => useState(() => false);

export const useGenderOptions = () =>
  useState(() => [
    { name: "userGender[1]", value: "M" },
    { name: "userGender[0]", value: "F" },
  ]);

export const useUserInfo = () => useState(() => null);

export const useCount = () => useState(() => 0);

export const useFilters = () =>
  useState(() => [
    { default: "filter.specialty", value: null },
    { default: "filter.date", value: null },
    { default: "filter.metro", value: null },
  ]);

export const useReceiptionType = () => useState(() => null);
