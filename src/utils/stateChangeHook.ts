export function StateChangeHook(
  state: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL"
) {
  switch (state) {
    case "SELF_STUDY":
      return "자습";
    case "AFTER_SCHOOL":
      return "방과후";
    case "MAJOR":
      return "동아리";
    default:
      return "";
  }
}
