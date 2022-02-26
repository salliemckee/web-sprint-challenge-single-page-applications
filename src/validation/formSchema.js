import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["Small", "Medium", "Large"]),

  onions: yup.boolean().oneOf([true], "Must choose a topping"),
  tomatoes: yup.boolean().oneOf([true], "Must choose a topping"),
  bellPeppers: yup.boolean().oneOf([true], "Must choose a topping"),
  roastedGarlic: yup.boolean().oneOf([true], "Must choose a topping"),

  special: yup.string().trim(),
});
export default formSchema;
